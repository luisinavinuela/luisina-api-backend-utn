import mongoose from "mongoose"

const connectDb = async () => {
  const uri = process.env.URI_DB

  if (!uri) {
    throw new Error("URI_DB no definida en las variables de entorno")
  }

  await mongoose.connect(uri)
  console.log("✅ Conectado con éxito a MongoDB")
}

export { connectDb }