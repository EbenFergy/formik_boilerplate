import styled from "styled-components";

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  input {
    padding: 0.5rem 1rem;
    border: 1px solid #07a884;
  }

  .error {
    color: red;
    font-size: 0.8rem;
  }
`;

export default FormStyle;
