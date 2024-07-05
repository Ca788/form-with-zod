import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 30px;
  margin-top: 40px;
`;

export const FormInputs = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
   margin-top: 20px;
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
  height: 45px;
  width: 350px;
  border-radius: 10px;
  border: 1px solid gray;
  align-items: center;
  padding: 10px;
`;

export const InputState = styled.select`
  height: 45px;
  width: 350px;
  border-radius: 10px;
  border: 1px solid gray;
  align-items: center;
`;

export const FormLabels = styled.label`
  font-size: 1rem;
  color: #fff;
`;

export const Asterisk = styled.span`
  color: red;
`

export const ContainerButtons = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 20px;
    gap: 20px;
    margin: 0 auto;
    margin-bottom: 20px;
    margin-top: 10px;
`

export const SaveButton = styled.button`
    width: 120px;
    height: 45px;
    padding: 12px;
    align-items: center;
    border-radius: 50px;
    border-style: none;
    background-color: #0e7490;
    color: #fff;
    font-weight: bold;
    cursor: pointer;

    &:hover {
       background-color: #06b6d4;
       color: #000
    }
`

export const CancelButton = styled.button`
    width: 120px;
    height: 45px;
    padding: 12px;
    align-items: center;
    border-radius: 50px;
    border-style: none;
    background-color:#0e7490;
    color: #fff;
    font-weight: bold;
    cursor: pointer;

    &:hover {
       background-color: #06b6d4;
       color: #000
    }
`

export const SpanRequired = styled.span`
 color: #ff0000;
`