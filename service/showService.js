import { getDB } from "../db.js";
import { ObjectId } from "mongodb";

export const getAllShows = async (filters) => {
  const db = getDB();

  return await db
    .collection("shows")
    .find(filters)
    .toArray();
};

export const getShowByIdService = async (id) => {
  const db = getDB();

  return await db.collection("shows").findOne({
    _id: new ObjectId(id)
  });
};

export const createShowService = async (data) => {
  const db = getDB();

  const existing = await db.collection("shows").findOne({
    name: data.name
  });

  if (existing) {
    throw new Error("DUPLICATE");
  }

  const result = await db.collection("shows").insertOne(data);

  return await db.collection("shows").findOne({
    _id: result.insertedId
  });
};

export const updateShowService = async (id, data) => {
  const db = getDB();

  if (data.name) {
    const existing = await db.collection("shows").findOne({
      name: data.name,
      _id: { $ne: new ObjectId(id) }
    });

    if (existing) {
      throw new Error("DUPLICATE");
    }
  }

  const result = await db.collection("shows").updateOne(
    { _id: new ObjectId(id) },
    { $set: data }
  );

  if (result.matchedCount === 0) {
    return null;
  }

  return await db.collection("shows").findOne({
    _id: new ObjectId(id)
  });
};

export const deleteShowService = async (id) => {
  const db = getDB();

  const result = await db.collection("shows").deleteOne({
    _id: new ObjectId(id)
  });

  return result.deletedCount > 0;
};