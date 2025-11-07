# takeid-backend
# takeid-backend
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

## Observações
- O banco de dados utilizado é SQLite, por padrão salvo em `src/database`.
- As imagens enviadas via upload ficam na pasta `uploads/`.
- Para rodar em ambiente diferente, ajuste as configurações em `src/database/knexfile.js`.

## Scripts úteis
- `npx knex migrate:latest` — Executa as migrations
- `npm start` — Inicia o servidor

---

Desenvolvido por Jhonatan Felipe
