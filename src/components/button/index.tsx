import { useForm } from "react-hook-form";
import { CancelButton, ContainerButtons, SaveButton } from "./style"
import { useState } from "react";

export const Button = () => {
  const [output, setOutput] = useState("");
  const { handleSubmit } = useForm();

  const createUser = (data: any) => {
    setOutput(JSON.stringify(data, null, 2));
  }

  return (
    <>
      <ContainerButtons>
        <SaveButton onClick={handleSubmit(createUser)}>Salvar</SaveButton>
        <CancelButton>Cancelar</CancelButton>
      </ContainerButtons>
    </>
  )
}