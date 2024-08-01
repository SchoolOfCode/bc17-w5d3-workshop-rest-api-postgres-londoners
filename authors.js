// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "./db/index.js";

export async function getAuthors() {
  // Query the databasae and return all authors
  try {
    const authors = await pool.query(`
    SELECT * FROM authors;
    `);
    console.log("Data load successful!");
    return authors;
  } catch(error) {
    console.error("Database load failed!", error);
  }
  
};

export async function getAuthorById(id) {
  // Query the database and return the author with a matching id or null
  try {
  const queryText = `SELECT * FROM authors WHERE id = $1`
  const result = await pool.query(queryText, [id]);
  console.log("Data load successful!");
    return result;
  } catch(error) {
    console.error("Database load failed!", error);
  }

}

export async function createAuthor(author) {
  // Query the database to create an author and return the newly created author
}

export async function updateAuthorById(id, updates) {
  // Query the database to update an author and return the newly updated author or null
}

export async function deleteAuthorById(id) {
  // Query the database to delete an author and return the deleted author or null
}
