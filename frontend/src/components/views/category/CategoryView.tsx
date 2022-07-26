import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { addRun } from "../../../redux/runs/actions";
import { RootState } from "../../../redux/store";
import GeneralModal from "../../modals/GeneralModal";
import Box from "../../util/Box";
import { BoxButton } from "../../util/Buttons";
import { Divider } from "../../util/Util";
import ViewWrapper from "../ViewWrapper";

const CategoryViewWrapper = styled.div`
  height: calc(100% + 10px);
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
`;

const Title = styled.h1`
  padding: 15px;
  margin: 0;
  font-size: var(--large-text);
`;

const RunsContainer = styled.div`
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RunWrapper = styled.div`
  padding: 10px;
`;

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const CategoryView = () => {
  const { categoryId } = useParams() as { categoryId: string };
  const [submitRunModalVisible, setSubmitRunModalVisible] =
    useState<boolean>(false);
  const dispatch = useDispatch();
  const categories = useSelector(
    (state: RootState) => state.categories.categories
  );
  const runs = useSelector((state: RootState) => state.runs.runs)?.filter(
    (run) => run.categoryId === categoryId
  );
  if (categories.length === 0 || runs === undefined) return null;

  const category = categories.filter((cat) => cat.categoryId === categoryId)[0];

  if (category === undefined)
    return (
      <ViewWrapper>
        <CategoryViewWrapper>
          <Box>
            <Title>🆘 Kategoriaa ei ole olemassa 🆘</Title>
          </Box>
        </CategoryViewWrapper>
      </ViewWrapper>
    );

  return (
    <ViewWrapper>
      <CategoryViewWrapper>
        {submitRunModalVisible && (
          <GeneralModal
            onSubmit={(data: any, password) => {
              const time = parseInt(data["Kesto (millisekunnit)"]);
              const days = parseInt(data["Kesto (päivät)"]);
              if (isNaN(days) || isNaN(time)) {
                alert("Ajan syöte virheellinen");
                return;
              }
              const dateString = data["Suorituspäivä"].split(".");
              const date = new Date(
                dateString[2],
                dateString[1] - 1,
                dateString[0]
              );
              if (date.toTimeString() === "Invalid Date") {
                alert("Ajan syöte virheellinen");
                return;
              }
              const runnerName = data["Suorittajan nimi"] || "";
              const proof = data["Todistusaineisto"] || "";
              if (runnerName.length === 0) {
                alert("Nimen syöte on tyhjä");
                return;
              }
              dispatch(
                addRun(
                  {
                    runnerName,
                    proof,
                    date: date.toISOString(),
                    time,
                    days,
                    categoryId,
                  },
                  password
                )
              );
              setSubmitRunModalVisible(false);
            }}
            onCancel={() => {
              setSubmitRunModalVisible(false);
            }}
            fields={[
              "Suorittajan nimi",
              "Todistusaineisto",
              "Suorituspäivä",
              "Kesto (millisekunnit)",
              "Kesto (päivät)",
            ]}
          />
        )}
        <Box>
          <Title>{category?.name}</Title>
        </Box>
        <Divider />
        <RunsContainer>
          {runs.length === 0 ? (
            <Box>
              <RunWrapper>
                Kukaan ei ole vielä lisännyt suoritusta tähän kategoriaan.
              </RunWrapper>
            </Box>
          ) : (
            runs.map((run) => (
              <Box width="100%" key={run.runId}>
                <RunWrapper>{run.runnerName}</RunWrapper>
              </Box>
            ))
          )}
        </RunsContainer>
        <FooterContainer>
          <BoxButton
            text="Lisää uusi suoritus"
            onClick={() => setSubmitRunModalVisible(true)}
          />
        </FooterContainer>
      </CategoryViewWrapper>
    </ViewWrapper>
  );
};

export default CategoryView;
