import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

async function addColumn() {
  // Open the SQLite database using the sqlite3 driver
  const db = await open({
    filename: 'dev.sqlite3',
    driver: sqlite3.Database,
  })

  try {
    // Add a column to the table
    const addColumnQuery = `ALTER TABLE bookings ADD COLUMN price INT;`
    await db.exec(addColumnQuery)
    console.log('Column added successfully.')
  } catch (err) {
    console.error('Error adding column:', err)
  } finally {
    await db.close()
  }
}

// Call the function to add the column
addColumn()
