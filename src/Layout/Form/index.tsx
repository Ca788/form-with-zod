import { Container, FormContainer, FormInputs, FormLabels, Input, InputGroup } from "./style";
import { useForm } from 'react-hook-form';
import { cpfMask } from "../../utils/masks";
import { useState } from "react";
import { Button } from "../../components/button";

export const Form = () => {
  const [cpf, setCpf] = useState("");

  const formatCpf = (e: any) => {
    const value = e.target.value;
    setCpf(cpfMask(value));
  };

  const { register } = useForm();

  return (
    <>
      <FormContainer>
        <FormInputs>
          <h1>Formulário de cadastro</h1>
          <Container>
            <InputGroup>
              <FormLabels>Nome</FormLabels>
              <Input
                type="text"
                placeholder="Nome"
                {...register("name")}
              />
            </InputGroup>
            <InputGroup>
              <FormLabels>Email</FormLabels>
              <Input
                type="email"
                placeholder="Email"
                {...register("email")}
              />
            </InputGroup>
          </Container>
          <Container>
            <InputGroup>
              <FormLabels>CPF</FormLabels>
              <Input
                type="text"
                placeholder="CPF"
                value={cpf}
                {...register("cpf")}
                onChange={formatCpf}
              />
            </InputGroup>
            <InputGroup>
              <FormLabels>Data de nascimento</FormLabels>
              <Input
                type="date"
                placeholder="Data de nascimento"
                {...register("birthDate")}
              />
            </InputGroup>
          </Container>
          <Container>
            <InputGroup>
              <FormLabels htmlFor="state">UF</FormLabels>
              <Input
                type="text"
                placeholder="UF"
                {...register("state")}
              />
            </InputGroup>
            <InputGroup>
              <FormLabels htmlFor="state">Cidade</FormLabels>
              <Input
                type="text"
                placeholder="Cidade"
                {...register("city")}
              />
            </InputGroup>
          </Container>
          <Container>
            <InputGroup>
              <FormLabels htmlFor="state">Bairro</FormLabels>
              <Input
                type="text"
                placeholder="Bairro"
                {...register("neighborhood")}
              />
            </InputGroup>
            <InputGroup>
              <FormLabels htmlFor="state">Rua</FormLabels>
              <Input
                type="text"
                placeholder="Rua"
                {...register("street")}
              />
            </InputGroup>
          </Container>
          <Container>
            <InputGroup>
              <FormLabels htmlFor="state">Número</FormLabels>
              <Input
                type="text"
                placeholder="Número"
                {...register("number")}
              />
            </InputGroup>
            <InputGroup>
              <FormLabels htmlFor="state">Complemento</FormLabels>
              <Input
                type="text"
                placeholder="Complemento"
                {...register("complement")}
              />
            </InputGroup>
          </Container>
        </FormInputs>
      </FormContainer>
      <Button />
    </>
  );
};
