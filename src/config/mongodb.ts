import mongoose from "mongoose"

let isConnected = false

const connectDb = async () => {
  if (isConnected) return

  const uri = process.env.URI_DB
  if (!uri) {
    throw new Error("URI_DB no definida en las variables de entorno")
  }

  try {
    await mongoose.connect(uri)
    isConnected = true
    console.log("✅ Conectado con éxito a MongoDB")
  } catch (error) {
    console.error("❌ Error al conectar MongoDB:", error)
    throw error
  }
}

export { connectDb }