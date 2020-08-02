import { BandDatabase } from "../data/BandDatabase";
import { Band } from "../model/Band";
import { IdGenerator } from "../services/idGenerator";
import { HashManager } from "../services/hashManager";
import { TokenManager } from "../services/tokenManager";
import { NotFoundError } from "../errors/NotFoundError";
import { InvalidParameterError } from "../errors/InvalidParameterError";
import { UnauthorizedError } from '../errors/UnauthorizedError'

export class BandBusiness{
    constructor(
        private bandDatabase: BandDatabase,
        private hashManager: HashManager,
        private tokenManager: TokenManager,
        private idGenerator: IdGenerator
    ) {}

    public async registerBand(
        name: string,
        musicGenre: string,
        responsible: string
    ) {
        if(!name || !musicGenre || !responsible) {
            throw new InvalidParameterError("Missing input")
        }

        const id = this.idGenerator.generate()

        await this.bandDatabase.createBand(
            new Band(id, name, musicGenre, responsible)
        )
    }
}