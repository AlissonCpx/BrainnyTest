import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

import { User } from '../entity/User'


export const authenticate = async (req: Request, res: Response) => {
    const repository = getRepository(User);
    const { email, password } = req.body;

    const user = await repository.findOne({ where: { email } });

    if (!user) {
        return res.sendStatus(401).json({ message: "invalid" })
    }


    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
        return res.sendStatus(401).json({ message: "invalid" });
    }

    const token = jwt.sign({ id: user.id }, 'segredo', { expiresIn: '1d' });

    delete user.password;

    return res.json({
        user,
        token
    })


}
