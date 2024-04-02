/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('bikes').del()
  await knex('bikes').insert([
    {
      id: 1,
      make: 'Honda',
      model: 'CRF450R',
      engine_size: '450cc',
      location: 12345,
      owner_authid: 'johndoe123',
      price: 8000,
      image: 'honda_crf450r.jpg',
    },
    {
      id: 2,
      make: 'Yamaha',
      model: 'YZ250F',
      engine_size: '250cc',
      location: 54321,
      owner_authid: 'janesmith456',
      price: 7500,
      image: 'yamaha_yz250f.jpg',
    },
    {
      id: 3,
      make: 'Kawasaki',
      model: 'KX450',
      engine_size: '450cc',
      location: 98765,
      owner_authid: 'michaeljohnson789',
      price: 8200,
      image: 'kawasaki_kx450.jpg',
    },
    {
      id: 4,
      make: 'Suzuki',
      model: 'RM-Z250',
      engine_size: '250cc',
      location: 24680,
      owner_authid: 'emilybrown321',
      price: 7200,
      image: 'suzuki_rmz250.jpg',
    },
  ])
}
