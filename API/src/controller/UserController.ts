import { getRepository } from 'typeorm';
import { User } from '../entity/User'
import { request, Request, Response } from 'express'
import * as bcrypt from 'bcrypt'

export const getUsers = async (request: Request, response: Response) => {
    const users = await getRepository(User).find()
    return response.json(users)
}

export const saveUser = async (request: Request, response: Response) => {


    const passwordEncrypt = await bcrypt.hashSync(request.body.password, 8)

    const userEncrypt = {
        name: request.body.name,
        email: request.body.email,
        password: passwordEncrypt,
        role: request.body.role
    }

    const user = await getRepository(User).save(userEncrypt)
    response.json(user)
}

export const getUser = async (request: Request, response: Response) => {
    const { id } = request.params
    const user = await getRepository(User).findOne(id)
    return response.json(user)
}

export const updateUser = async (request: Request, response: Response) => {
    const { id } = request.params
    const user = await getRepository(User).update(id, request.body)

    if (user.affected === 1) {
        return response.json(user)
    }
    return response.status(401).json({ message: "User not found!" })
}
