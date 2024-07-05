import { useForm } from 'react-hook-form';
import { useState } from "react";
import { zodResolver } from '@hookform/resolvers/zod';
import { supabase } from "../../lib/supabase";
import { v4 as uuidv4 } from 'uuid';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

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
  SpanRequired,
  Title,
  InputState
} from "./style";

import { CreateUserFormData, CreateUserFormSchema } from "../../schemas/schemas";
import { formatBirthDateInput, formatCpf } from "../../helpers/helpers";
import { STATES_BRAZIL } from '../../utils/constants';

export const Form = () => {
  const [cpf, setCpf] = useState("");
  const [userExist, setUserExist] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors }
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(CreateUserFormSchema),
  });

  const submit = async (data: CreateUserFormData) => {
    try {
      const { data: existingUser, error: fetchError } = await supabase
        .from('users')
        .select('id')
        .eq('email', data.email)
        .single();

      if (fetchError) {
        throw new Error('Error fetching user data from database');
      }

      if (existingUser) {
        setUserExist(true);
        return;
      }

      const userId = uuidv4();

      const { data: insertedUser, error: insertError } = await supabase
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

      if (insertError) {
        throw new Error(`Error inserting user data into database: ${insertError.message}`);
      }

      if (!insertedUser) {
        throw new Error('Inserted user data not returned from database');
      }

      resetForm();

    } catch (error: any) {
      console.error('Error creating user:', error.message);
    }
  };


  const resetForm = () => {
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
          <Title>Realize seu cadastro</Title>
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
                onChange={formatCpf(setCpf)}
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
              <InputState {...register('state')}>
                <option value=""></option>
                {STATES_BRAZIL.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </InputState>
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
        <CancelButton onClick={resetForm}>Cancelar</CancelButton>
      </ContainerButtons>
      <Dialog
        header="User Exists"
        visible={userExist}
        style={{ backgroundColor: '#fff' }}
        modal
        onHide={() => setUserExist(false)}
      >
        <p>Usuário já cadastrado</p>
        <Button label="Ok" onClick={() => { setUserExist(false); resetForm(); }} />
      </Dialog>
    </>
  );
};
