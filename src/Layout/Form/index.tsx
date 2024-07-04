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
  CancelButton,
  SpanRequired
} from "./style";
import { useForm } from 'react-hook-form';
import { cpfMask, formatBirthDate } from "../../utils/masks";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { supabase } from "../../lib/supabase";
import { v4 as uuidv4 } from 'uuid';

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

type CreateUserFormData = z.infer<typeof CreateUserFormSchema>;

export const Form = () => {
  const [cpf, setCpf] = useState("");


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

  const formatBirthDateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = formatBirthDate(e.target.value);
  };


  const submit = async (data: CreateUserFormData) => {
    try {

      const userId = uuidv4();

      const { error } = await supabase
        .from('users')
        .insert([
          {
            id: userId,
            name: data.name,
            email: data.email,
            cpf: data.cpf,
            birthDate: data.birthDate,
            state: data.state,
            city: data.city,
            neighborhood: data.neighborhood,
            street: data.street,
            number: data.number,
            complement: data.complement,
          }
        ]);

      if (error) {
        throw new Error('Error inserting user data into database');
      }

    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

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
  };

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
              {errors.name && <SpanRequired>{errors.name.message}</SpanRequired>}
            </InputGroup>
            <InputGroup>
              <FormLabels htmlFor="email">Email <Asterisk>*</Asterisk></FormLabels>
              <Input
                type="email"
                {...register("email")}
              />
              {errors.email && <SpanRequired>{errors.email.message}</SpanRequired>}
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
              {errors.cpf && <SpanRequired>{errors.cpf.message}</SpanRequired>}
            </InputGroup>
            <InputGroup>
              <FormLabels htmlFor="birthDate">Data de nascimento <Asterisk>*</Asterisk></FormLabels>
              <Input
                type="text"
                {...register("birthDate")}
                onChange={formatBirthDateInput}
              />
              {errors.birthDate && <SpanRequired>{errors.birthDate.message}</SpanRequired>}
            </InputGroup>
          </Container>
          <Container>
            <InputGroup>
              <FormLabels htmlFor="state">UF</FormLabels>
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
        <SaveButton onClick={handleSubmit(submit)}>Salvar</SaveButton>
        <CancelButton onClick={clearInput}>Cancelar</CancelButton>
      </ContainerButtons>
    </>
  );
};
