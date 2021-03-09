import { NextFunction } from "express";
import { Request, Response } from 'express'

import * as jwt from 'jsonwebtoken'

export default function authMiddleWare(req: Request, res: Response, next: NextFunction) {

    const { authorization } = req.headers;


    if (!authorization) {
        return res.sendStatus(401)
    }

    const token = authorization.replace('Bearer', '').trim();

    try {
        jwt.verify(token, 'segredo');
        return next();

    } catch {
        return res.sendStatus(401);
    }

}