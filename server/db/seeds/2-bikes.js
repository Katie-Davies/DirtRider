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
      user_authid: 'johndoe123',
      price: 200,
      image: 'honda_crf450r.jpg',
    },
    {
      id: 2,
      make: 'Yamaha',
      model: 'YZ250F',
      engine_size: '250cc',
      location: 54321,
      user_authid: 'janesmith456',
      price: 150,
      image: 'yamaha_yz250f.jpg',
    },
    {
      id: 3,
      make: 'Kawasaki',
      model: 'KX450',
      engine_size: '450cc',
      location: 98765,
      user_authid: 'michaeljohnson789',
      price: 250,
      image: 'kawasaki_kx450.jpg',
    },
    {
      id: 4,
      make: 'Suzuki',
      model: 'RM-Z250',
      engine_size: '250cc',
      location: 24680,
      user_authid: 'emilybrown321',
      price: 200,
      image: 'suzuki_rmz250.jpg',
    },
  ])
}
