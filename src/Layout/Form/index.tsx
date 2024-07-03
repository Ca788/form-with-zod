import {
  Asterisk,
  Container,
  FormContainer,
  FormInputs,
  FormLabels,
  Input,
  InputGroup,
  ContainerButtons,
  SaveButton,
  CancelButton
} from "./style";
import { useForm } from 'react-hook-form';
import { cpfMask } from "../../utils/masks";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'

const CreateUserFormSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório').transform(name => {
    return name.trim().split(' ').map(word => {
      return word[0].toLocaleUpperCase().concat(word.substring(1))
    }).join(' ')
  }),
  email: z.string().min(1, 'Email é obrigatório').email('Formato de e-mail inválido'),
  cpf: z.string().min(1, 'CPF é obrigatório'),
  birthDate: z.string().min(1, 'Data de nascimento é obrigatório'),
  state: z.string(),
  city: z.string(),
  neighborhood: z.string(),
  street: z.string(),
  number: z.string(),
  complement: z.string(),
});

type CreateUserFormData = z.infer<typeof CreateUserFormSchema>

export const Form = () => {
  const [cpf, setCpf] = useState("");
  const [output, setOutput] = useState("");

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors }
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(CreateUserFormSchema),
  });

  const formatCpf = (e: any) => {
    const value = e.target.value;
    setCpf(cpfMask(value));
  };

  const createUser = (data: any) => {
    setOutput(JSON.stringify(data, null, 2));
  }


  const clearInput = () => {
    reset({
      name: '',
      email: '',
      cpf: '',
      birthDate: '',
      state: '',
      city: '',
      neighborhood: '',
      street: '',
      number: '',
      complement: '',
    });
    setCpf("");
  }

  return (
    <>
      <FormContainer>
        <FormInputs>
          <h1>Formulário de cadastro</h1>
          <Container>
            <InputGroup>
              <FormLabels htmlFor="name">Nome <Asterisk>*</Asterisk></FormLabels>
              <Input
                type="text"
                {...register("name")}
              />
              {errors.name && <span>{errors.name.message}</span>}
            </InputGroup>
            <InputGroup>
              <FormLabels htmlFor="email">Email <Asterisk>*</Asterisk></FormLabels>
              <Input
                type="email"
                {...register("email")}
              />
              {errors.email && <span>{errors.email.message}</span>}
            </InputGroup>
          </Container>
          <Container>
            <InputGroup>
              <FormLabels htmlFor="cpf">CPF <Asterisk>*</Asterisk></FormLabels>
              <Input
                type="text"
                value={cpf}
                {...register("cpf")}
                onChange={formatCpf}
              />
              {errors.cpf && <span>{errors.cpf.message}</span>}
            </InputGroup>
            <InputGroup>
              <FormLabels htmlFor="birthDate">Data de nascimento <Asterisk>*</Asterisk></FormLabels>
              <Input
                type="date"
                {...register("birthDate")}
              />
              {errors.birthDate && <span>{errors.birthDate.message}</span>}
            </InputGroup>
          </Container>
          <Container>
            <InputGroup>
              <FormLabels htmlFor="zipcode">UF</FormLabels>
              <Input
                type="text"
                {...register("state")}
              />
            </InputGroup>
            <InputGroup>
              <FormLabels htmlFor="city">Cidade</FormLabels>
              <Input
                type="text"
                {...register("city")}
              />
            </InputGroup>
          </Container>
          <Container>
            <InputGroup>
              <FormLabels htmlFor="neighborhood">Bairro</FormLabels>
              <Input
                type="text"
                {...register("neighborhood")}
              />
            </InputGroup>
            <InputGroup>
              <FormLabels htmlFor="street">Rua</FormLabels>
              <Input
                type="text"
                {...register("street")}
              />
            </InputGroup>
          </Container>
          <Container>
            <InputGroup>
              <FormLabels htmlFor="number">Número</FormLabels>
              <Input
                type="text"
                {...register("number")}
              />
            </InputGroup>
            <InputGroup>
              <FormLabels htmlFor="complement">Complemento</FormLabels>
              <Input
                type="text"
                {...register("complement")}
              />
            </InputGroup>
          </Container>
        </FormInputs>
      </FormContainer>
      <ContainerButtons>
        <SaveButton onClick={handleSubmit(createUser)}>Salvar</SaveButton>
        <CancelButton onClick={clearInput}>Cancelar</CancelButton>
      </ContainerButtons>
      <pre style={{ display: "flex", justifyContent: "center" }}>{output}</pre>
    </>
  );
};
