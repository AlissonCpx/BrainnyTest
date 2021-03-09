import { getRepository } from 'typeorm';
import { Registered_time } from '../entity/Redistered_time'
import { request, Request, Response } from 'express'

export const getRegistered_times = async (request: Request, response: Response) => {
    const resgistered = await getRepository(Registered_time).find()
    return response.json(resgistered)
}

export const saveRegistered_time = async (request: Request, response: Response) => {
    const resgistered = await getRepository(Registered_time).save(request.body)
    response.json(resgistered)
}

export const getRegistered_time = async (request: Request, response: Response) => {
    const { id } = request.params
    const resgistered = await getRepository(Registered_time).findOne(id)
    return response.json(resgistered)
}

export const updateRegistered_time = async (request: Request, response: Response) => {
    const { id } = request.params
    const resgistered = await getRepository(Registered_time).update(id, request.body)

    if (resgistered.affected === 1) {
        return response.json(resgistered)
    }
    return response.status(401).json({ message: "Resgistered not found!" })
}
