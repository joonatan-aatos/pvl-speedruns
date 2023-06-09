import { useState } from "react";
import styled from "styled-components";
import Modal from "../util/Modal";

interface GeneralModalProps {
  fields: Array<string>;
  onSubmit: (data: any, password: string) => void;
  onCancel: () => void;
}

const NewCategoryModalContentContainer = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextField = styled.input`
  margin: 10px;
`;

const ControlButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
`;

const ControlButton = styled.button<{ red?: boolean }>`
  border: none;
  outline: none;
  cursor: pointer;
  overflow: hidden;
  border-radius: 5px;
  background-color: ${({ red }) => (red ? "red" : "green")};
  padding: 5px;
  width: fit-content;
  font-size: var(--very-small-text);

  transition: opacity 0.2s ease-in-out;
  :hover {
    opacity: 80%;
  }
`;

const GeneralModal = (props: GeneralModalProps) => {
  const fields = props.fields;
  const [fieldsContent, setFieldsContent] = useState<any>({});
  const [password, setPassword] = useState<string>("");

  return (
    <Modal onClose={props.onCancel}>
      <NewCategoryModalContentContainer>
        {fields.map((field) => (
          <TextField
            key={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={fieldsContent[field] || ""}
            onChange={(e) =>
              setFieldsContent({ ...fieldsContent, [field]: e.target.value })
            }
          />
        ))}
        <TextField
          type="password"
          placeholder="Salasana"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ControlButtonsContainer>
          <ControlButton red onClick={props.onCancel}>
            Kumoa
          </ControlButton>
          <ControlButton
            onClick={() => props.onSubmit(fieldsContent, password)}
          >
            Valmis
          </ControlButton>
        </ControlButtonsContainer>
      </NewCategoryModalContentContainer>
    </Modal>
  );
};

export default GeneralModal;
