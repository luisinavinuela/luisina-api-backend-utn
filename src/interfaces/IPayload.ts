import { Types } from "mongoose"

interface IPayload {
  _id: string
  email: string
  username: string
}

export { IPayload }