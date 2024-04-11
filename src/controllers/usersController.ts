import { Request, Response } from "express";
import { database } from '../config/database';

export class UsersController{
  createUser(req:Request, res:Response): Response{
    const { name, email } = req.body

    database.push({name, email})
    return res.status(201).json({'mensagem': `User ${name} created!`})
  }

  getAllUsers(req:Request, res:Response){
    return res.status(200).json(database)
  }
}