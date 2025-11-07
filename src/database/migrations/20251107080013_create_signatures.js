exports.up = function (knex) {
  return knex.schema.createTable("signatures", (table) => {
    table.increments("id").primary();
    table
      .integer("employee_id")
      .unsigned()
      .references("id")
      .inTable("employees")
      .onDelete("CASCADE");
    table.datetime("signed_at").notNullable();
    table.string("image"); // URL ou base64
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("signatures");
};
