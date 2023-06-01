import { MongoClient, MongoClientOptions } from 'mongodb'

if (!process.env.DB_URL) {
  throw new Error('Please add your Mongo URI to .env')
}

const url: string = process.env.DB_URL

const options = {
  useNewUrlParser: true,
} as MongoClientOptions
let connectDB: Promise<MongoClient>

if (process.env.NODE_ENV === 'development') {
  let globalWithConnect = global as typeof globalThis & {
    _mongo: Promise<MongoClient>
  }
  if (!globalWithConnect._mongo) {
    globalWithConnect._mongo = new MongoClient(url, options).connect()
  }
  connectDB = globalWithConnect._mongo
} else {
  connectDB = new MongoClient(url, options).connect()
}
export { connectDB }
