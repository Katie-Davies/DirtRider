/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      first_name: 'John',
      last_name: 'Doe',
      email: 'john.doe@example.com',
      phone: 1234567890,
      authid: 'johndoe123',
      host: true,
    },
    {
      first_name: 'Jane',
      last_name: 'Smith',
      email: 'jane.smith@example.com',
      phone: 9876543210,
      authid: 'janesmith456',
      host: false,
    },
    {
      first_name: 'Michael',
      last_name: 'Johnson',
      email: 'michael.johnson@example.com',
      phone: 5556667777,
      authid: 'michaeljohnson789',
      host: true,
    },
    {
      first_name: 'Emily',
      last_name: 'Brown',
      email: 'emily.brown@example.com',
      phone: 4443332222,
      authid: 'emilybrown321',
      host: false,
    },
  ])
}
