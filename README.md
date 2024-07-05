# Formulário Simples com Validações usando Zod e React Hook Form

![image](https://github.com/Ca788/form-with-zod/assets/104643507/5a4fc4f7-91b4-49aa-96c2-1228ba8bfe75)

![image](https://github.com/Ca788/form-with-zod/assets/104643507/a48c7ce3-cb69-4fde-adec-e3bb5809bbaf)

![image](https://github.com/Ca788/form-with-zod/assets/104643507/c2f79fe5-49b6-440c-baaf-2cbee4861560)

![image](https://github.com/Ca788/form-with-zod/assets/104643507/58be64d9-728e-4e93-9e94-eb4aaec3b3f2)


## Pré-requisitos

- Node.js versão 18.19.1 ou superior.

## Instalação

Para testar ou utilizar este projeto, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone <URL_DO_SEU_REPOSITORIO>

2- Instale as dependências utilizando Yarn:
  ```bash
yarn install

```
3- Para iniciar o projeto, utilize o seguinte comando:
  ```bash
yarn dev

```
Este projeto utiliza Supabase como exemplo de armazenamento. Para configurar:

Crie uma conta no Supabase e crie um banco de dados.

4- Execute a seguinte query para criar a tabela users:
  ```bash
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    cpf TEXT NOT NULL,
    birthDate DATE,
    state TEXT,
    city TEXT,
    neighborhood TEXT,
    street TEXT,
    number TEXT,
    complement TEXT
);

```

5- Crie um arquivo lib/supabase.ts com o seguinte conteúdo:

  ```bash
import { createClient } from '@supabase/supabase-js'

export const supabase =
  createClient('aqui url da supabase',
    'aqui sua secret key'
  );

```


