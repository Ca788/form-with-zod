import { useForm } from "react-hook-form";
import { CancelButton, ContainerButtons, SaveButton } from "./style"

export const Button = () => {
  const { handleSubmit } = useForm();

  const createUser = (data: any) => {
    console.log(data);
  }

  return <ContainerButtons>
    <SaveButton onClick={handleSubmit(createUser)}>Salvar</SaveButton>
    <CancelButton>Cancelar</CancelButton>
  </ContainerButtons>
}