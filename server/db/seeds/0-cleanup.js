export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('bookings').del()
  await knex('bikes').del()
  await knex('users').del()
}
