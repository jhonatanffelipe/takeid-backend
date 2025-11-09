const express = require("express");
const app = express();
const routes = require("./routes");
const { errorHandler } = require("./erros/AppError");
const { swaggerUi, swaggerSpec } = require("./swagger");

app.use(express.json({ limit: "1024mb" }));
app.use("/uploads", express.static("uploads"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(routes);

// Middleware de tratamento de erros
app.use(errorHandler);

app.listen(3007, () => {
  console.log("Server is running in port 3007");
  console.log("Swagger docs: http://localhost:3007/api-docs");
});

module.exports = app;
