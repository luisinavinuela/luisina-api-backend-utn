import { User } from "../models/user.model"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import { Request, Response } from "express"
import { IPayload } from "../interfaces/IPayload"

const register = async (req: Request, res: Response) => {
  try {
    const { email, password, username } = req.body

    const finalUsername = username || "Nuevo usuario"

    if (!email || !password) {
      return res.status(400).json({ success: false, error: "Email y password son requeridos" })
    }

    if (!email.includes("@") || !email.endsWith(".com")) {
      return res.status(400).json({ success: false, error: "El correo electrónico debe ser válido" })
    }

    if (password.length < 4) {
      return res.status(400).json({ success: false, error: "La contraseña debe tener al menos 4 caracteres" })
    }

    const foundUser = await User.findOne({ email })
    if (foundUser) {
      return res.status(400).json({ success: false, error: "Email ya existente" })
    }

    const hash = await bcryptjs.hash(password, 10)

    const newUser = await User.create({
      email,
      password: hash,
      username: finalUsername
    })

    res.status(201).json({
      success: true, 
      data: {
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email
      }
    })
  } catch (error) {
    const err = error as Error
    res.status(500).json({ success: false, error: err.message })
  }
}

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body
    const JWT_SECRET = process.env.JWT_SECRET 
    if (!JWT_SECRET) {
      return res.status(500).json({ success: false, error: "Error interno: JWT_SECRET no configurado" })
    }

    if (!email || !password) {
      return res.status(400).json({ success: false, error: "Datos incompletos" })
    }

    const foundUser = await User.findOne({ email })
    if (!foundUser) {
      return res.status(401).json({ success: false, error: "Credenciales inválidas" })
    }

    const validatePassword = await bcryptjs.compare(password, foundUser.password)
    if (!validatePassword) {
      return res.status(401).json({ success: false, error: "Credenciales inválidas" })
    }

const payload: IPayload = { 
        _id: foundUser._id as any, 
        username: foundUser.username, 
        email: foundUser.email 
    }
    

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" })

    res.json({ success: true, data: token })
  } catch (error) {
    const err = error as Error
    res.status(500).json({ success: false, error: err.message })
  }
}

export { register, login }