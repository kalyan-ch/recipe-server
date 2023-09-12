import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();
const SUCCESS = 200;
const NOT_FOUND = 404;

router.get("/", async (req, res) => {
  let collection = await db.collection("recipe");
  let recipes = await collection.find({}).toArray();

  if(!result) {
    res.send("Not Found").status(NOT_FOUND);
  } else {
    res.send(recipes).status(SUCCESS);
  }
});

export default router;