import express from "express"
import cors from "cors"
import { connectDb } from "./config/mongodb"
import { productRouter } from "./routes/productsRouter"
import { authRouter } from "./routes/authRouter"
import { authMiddleware } from "./middleware/authMiddleware"
import { IPayload } from "./interfaces/IPayload"
import dotenv from "dotenv"

dotenv.config()

const serverHttp = express()

declare global {
  namespace Express {
    interface Request {
      user?: IPayload
    }
  }
}

serverHttp.use(cors())
serverHttp.use(express.json())

serverHttp.use("/products", authMiddleware, productRouter)
serverHttp.use("/auth", authRouter)

serverHttp.use((req, res) => {
  res.status(404).json({ success: false, error: "el recurso no se encuentra" })
})

const PORT = process.env.PORT || 5000

connectDb()
  .then(() => {
    serverHttp.listen(PORT, () => {
      console.log(`✅ Servidor corriendo en http://localhost:${PORT}`)
    })
  })
  .catch((err) => {
    console.log("❌ Error de conexión a la base de datos:", err.message)
  })

export default serverHttp