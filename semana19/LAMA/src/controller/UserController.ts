import { Request, Response } from 'express'
import { UserRole, stringToUserRole } from '../model/User'
import { UserBusiness } from '../business/UserBusiness'
import { UserDatabase } from '../data/UserDatabase'
import { TokenManager } from '../services/tokenManager'
import { IdGenerator } from '../services/idGenerator'
import { HashManager } from '../services/hashManager'
import { UnauthorizedError } from '../errors/UnauthorizedError'

export class UserController {
    private static UserBusiness = new UserBusiness(
        new UserDatabase(),
        new HashManager(),
        new TokenManager(),
        new IdGenerator()
    )

    public async signup(req: Request, res: Response) {
        try{
            const result = await UserController.UserBusiness.signup(
                req.body.name,
                req.body.email,
                req.body.password,
                req.body.role
            )

            res.status(200).send(result)
        }
        catch(err){
            res.status(err.errorCode || 400).send({message: err.message})
        }
    }

    public async login(req: Request, res: Response) {
        try{
            const result = await UserController.UserBusiness.login(
                req.body.email,
                req.body.password
            )

            res.status(200).send(result)
        }
        catch(err){
            res.status(err.errorCode || 400).send({message: err.message})
        }
    }
}