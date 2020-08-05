import { UserDatabase } from "../data/UserDatabase";
import { User, stringToUserRole, UserRole } from "../model/User";
import { IdGenerator } from "../services/idGenerator";
import { HashManager } from "../services/hashManager";
import { TokenManager } from "../services/tokenManager";
import { NotFoundError } from "../errors/NotFoundError";
import { InvalidParameterError } from "../errors/InvalidParameterError";
import { UnauthorizedError } from '../errors/UnauthorizedError'

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private hashManager: HashManager,
        private tokenManager: TokenManager,
        private idGenerator: IdGenerator
    ) {}

    public async signup(
        name: string,
        email: string,
        password: string,
        role: string
    ) {
        if (!name || !email || !password || !role) {
            throw new InvalidParameterError("Missing input");
        }

        if (email.indexOf("@") === -1) {
            throw new InvalidParameterError("Invalid email");
        }

        if (password.length < 6) {
            throw new InvalidParameterError("Invalid password");
        }

        const id = this.idGenerator.generate()
        const hashPassword = await this.hashManager.hash(password)

        await this.userDatabase.createUser(
            new User(id, name, email, hashPassword, stringToUserRole(role))
        )

        const accessToken = this.tokenManager.generate({id, role})

        return {accessToken}
    }

    public async login(email: string, password: string) {
        if(!email || !password) {
            throw new InvalidParameterError("Missing input")
        }

        const user = await this.userDatabase.getUserByEmail(email)

        if(!user){
            throw new NotFoundError("User not found")
        }

        const isPasswordCorrect = await this.hashManager.compareHash(password, user.getPassword())

        if(!isPasswordCorrect) {
            throw new InvalidParameterError("Invalid Password")
        }

        const accessToken = this.tokenManager.generate({
            id: user.getId(),
            role: user.getRole()
        })

        return {accessToken}
    }
}