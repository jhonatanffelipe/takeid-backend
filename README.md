# TakeID Backend

API para gerenciamento de colaboradores e assinaturas digitais.

## Funcionalidades
- Cadastro, listagem, atualização e remoção de colaboradores
- Cadastro, listagem, atualização e remoção de assinaturas
- Upload de imagens de assinaturas
- Documentação interativa via Swagger

## Tecnologias
- Node.js
- Express
- SQLite (Knex.js)
- Swagger (swagger-jsdoc, swagger-ui-express)

## Estrutura
```
src/
  app.js                # Arquivo principal da aplicação
  controllers/          # Lógica dos endpoints
  database/             # Configuração do banco e migrations
  routes/               # Rotas da API
  erros/                # Tratamento de erros
  swagger.js            # Configuração do Swagger
  uploads/              # Imagens de assinaturas
```

## Como iniciar o projeto

1. **Instale as dependências:**
    ```bash
    npm install
    ```

2. **Execute as migrations:**
    ```bash
    npx knex migrate:latest
    ```

3. **Inicie o servidor:**
    ```bash
    npm start
    ```
    O servidor estará disponível em `http://localhost:3007`

4. **Acesse a documentação Swagger:**
    [http://localhost:3007/api-docs](http://localhost:3007/api-docs)

# Instalação do ngrok para Tunelamento de Rede

Para que o aplicativo mobile (Expo) consiga acessar o backend local, é necessário instalar o [ngrok](https://ngrok.com/) para realizar o tunelamento da rede.

## Instalação do ngrok via snap

Execute o comando abaixo para instalar o ngrok usando o snap:

```bash
sudo snap install ngrok
```

## Como usar o ngrok


Após instalar, siga os passos abaixo para configurar e iniciar o tunelamento para a porta do backend (por exemplo, 3007):

1. **Crie uma conta no [ngrok](https://ngrok.com/)** e faça login para obter seu **authtoken**.
2. **Configure o authtoken no terminal** (substitua `$YOUR_AUTHTOKEN` pelo token gerado na sua conta):
    ```bash
    ngrok config add-authtoken $YOUR_AUTHTOKEN
    ```
3. **Inicie o tunelamento para a porta do backend:**
    ```bash
    ngrok http 3007
    ```

O ngrok irá gerar uma URL pública. Utilize essa URL no app mobile para acessar o backend local.

## Observações
- O banco de dados utilizado é SQLite, por padrão salvo em `src/database`.
- As imagens enviadas via upload ficam na pasta `uploads/`.
- Para rodar em ambiente diferente, ajuste as configurações em `src/database/knexfile.js`.

## Scripts úteis
- `npx knex migrate:latest` — Executa as migrations
- `npm start` — Inicia o servidor

---

Desenvolvido por Jhonatan Felipe
