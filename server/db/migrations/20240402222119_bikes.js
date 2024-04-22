/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('bikes', function (table) {
    table.integer('id').primary()
    table.string('make').notNullable()
    table.string('model').notNullable()
    table.string('engine_size').notNullable()
    table.integer('location')
    table.string('user_authid').references('authid').inTable('users')
    table.integer('price')
    table.string('image')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('bikes')
}
