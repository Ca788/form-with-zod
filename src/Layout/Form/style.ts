import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormInputs = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Container = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap; 
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px; 
`;

export const Input = styled.input`
  height: 40px;
  width: 350px;
  border-radius: 10px;
  border: 1px solid gray;
  align-items: center;
`;

export const FormLabels = styled.label`
  font-size: 1rem;
  color: #333;
`;
