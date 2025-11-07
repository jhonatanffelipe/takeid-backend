const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "TakeID API",
      version: "1.0.0",
      description: "API para gerenciamento de colaboradores e assinaturas",
    },
    servers: [
      {
        url: "http://localhost:3007",
      },
    ],
  },
  apis: ["./src/routes/swaggerDocs.js"], // Documentação separada
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = { swaggerUi, swaggerSpec };
