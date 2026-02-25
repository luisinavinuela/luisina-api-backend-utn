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

// 🔑 middleware para asegurar DB conectada
serverHttp.use(async (_req, _res, next) => {
  try {
    await connectDb()
    next()
  } catch (error) {
    console.error("DB connection error:", error)
    next(error)
  }
})

serverHttp.use("/products", authMiddleware, productRouter)
serverHttp.use("/auth", authRouter)

serverHttp.use((_req, res) => {
  res.status(404).json({ success: false, error: "el recurso no se encuentra" })
})

export default serverHttp