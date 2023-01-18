import styled from "styled-components";

export const FormCont = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  border: 2px solid #07a884;
  padding: 2rem;
  width: 50vw;
  max-width: 20rem;
`;
export const InputStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;

  input,
  textarea,
  select {
    padding: 0.5rem 1rem;
    border: 1px solid #07a884;
    font-family: inherit;
  }
`;

export const ErrorStyle = styled.div`
  color: red;
  font-size: 0.8rem;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  width: auto;
  border-radius: 5px;
  background-color: #07a884;
  /* background-color: rgb(25, 166, 100); */
  border: none;
  padding: 1rem 1.2rem;
  color: #ffff;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;

  :active {
    opacity: 0.5;
  }
`;
