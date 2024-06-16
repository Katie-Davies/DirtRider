/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  // await knex('bookings').del()
  await knex('bookings').insert([
    {
      id: 1,
      bike_id: 1,
      user_id: 'michaeljohnson789',
      start_date: '2024-06-09',
      end_date: '2024-06-10',
    },
    {
      id: 2,
      bike_id: 2,
      user_id: 'janesmith456',
      start_date: '2024-06-03',
      end_date: '2024-06-04',
    },
    {
      id: 3,
      bike_id: 3,
      user_id: 'janesmith456',
      start_date: '2024-06-01',
      end_date: '2024-06-02',
    },
  ])
}
