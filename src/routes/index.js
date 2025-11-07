const express = require("express");
const routes = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const EmployeeController = require("../controllers/EmployeeController");
const SignatureController = require("../controllers/SignatureController");

// Employees
routes.get("/employees", EmployeeController.index);
routes.post("/employees", EmployeeController.create);
routes.get("/employees/:id", EmployeeController.show);
routes.put("/employees/:id", EmployeeController.update);
routes.delete("/employees/:id", EmployeeController.delete);

// Signatures
routes.get("/signatures", SignatureController.index);
routes.post("/signatures", SignatureController.create);
routes.get("/signatures/all/:employee_id", SignatureController.findAll);
routes.get("/signatures/:id", SignatureController.show);
routes.put(
  "/signatures/:id",
  upload.single("image"),
  SignatureController.update
);
routes.delete("/signatures/:id", SignatureController.delete);

module.exports = routes;
