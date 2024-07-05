import { z } from "zod";

export const CreateUserFormSchema = z.object({
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

export type CreateUserFormData = z.infer<typeof CreateUserFormSchema>;