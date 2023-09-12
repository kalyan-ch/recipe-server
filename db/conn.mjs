import { MongoClient } from "mongodb";

const connectionStr = process.env.MONGO_URI || "";
const dbName = process.env.DB_NAME || ""
const client = new MongoClient(connectionStr);

let conn;

try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db(dbName)

export default db;