/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('bookings', function (table) {
    table.increments('id').primary()
    table.integer('bike_id').references('id').inTable('bikes')
    table.integer('user_id').references('authid').inTable('users')
    table.date('start_date').notNullable()
    table.date('end_date').notNullable()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  knex.schema.dropTable('bookings')
}
