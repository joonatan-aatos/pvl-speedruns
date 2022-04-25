import { ReactChild } from "react";
import styled from "styled-components";

interface ModalProps {
  children: ReactChild;
}

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #55555599;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background-color: var(--highlight);
  border-top: 10px solid var(--highlight-dark);
`;

const Modal = (props: ModalProps) => {
  return (
    <Background>
      <ModalContainer>{props.children}</ModalContainer>
    </Background>
  );
};

export default Modal;
