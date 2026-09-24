import "server-only";
import mongoose from "mongoose";
import { mongoUri } from "./env";

type MongoCache = {
  connection: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

const globalForMongo = globalThis as typeof globalThis & {
  portfolioMongo?: MongoCache;
};

const cache = (globalForMongo.portfolioMongo ??= {
  connection: null,
  promise: null,
});

export async function connectDB() {
  if (cache.connection) return cache.connection;

  cache.promise ??= mongoose.connect(mongoUri(), {
    bufferCommands: false,
    serverSelectionTimeoutMS: 10_000,
  });

  try {
    cache.connection = await cache.promise;
    return cache.connection;
  } catch (error) {
    cache.connection = null;
    cache.promise = null;
    throw error;
  }
}
