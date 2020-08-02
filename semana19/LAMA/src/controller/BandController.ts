import {Request, Response} from 'express'
import {UserRole} from '../model/User'
import {BandBusiness} from '../business/BandBusiness'
import {BandDatabase} from '../data/BandDatabase'
import {TokenManager} from '../services/tokenManager'
import {IdGenerator} from '../services/idGenerator'
import {HashManager} from '../services/hashManager'
import { UnauthorizedError} from '../errors/UnauthorizedError'

export class BandController {
    private static BandBusiness = new BandBusiness(
        new BandDatabase(),
        new HashManager(),
        new TokenManager(),
        new IdGenerator()
    )

    public async registerBand(req: Request, res: Response) {
        try{
            const authenticator = new TokenManager()
            const tokenData = authenticator.getData(req.headers.authorization!)

            if(tokenData.role !== UserRole.ADMIN) {
                throw new UnauthorizedError("Admins only can use this endpoint")
            }

            await BandController.BandBusiness.registerBand(req.body.name, req.body.musicGenre, req.body.responsible)

            res.status(200).send({
                message: "Band registered"
            })
            
        }
        catch(err){
            res.status(err.errorCode || 400).send({message: err.message})
        }
    }
}