exports.up = function (knex) {
  return knex.schema.createTable("employees", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("position");
    table.string("email").unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("employees");
};
