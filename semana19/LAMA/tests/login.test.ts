import { UserBusiness } from "../src/business/UserBusiness";
import { User, stringToUserRole, UserRole } from "../src/model/User";

describe("testing login from UserBusiness", () => {
    let userDatabase = {}
    let hashManager = {}
    let tokenManager = {}
    let idGenerator = {}

    test("login success", async() => {
        const getUserByEmail = jest.fn((user: User) => {
            return new User(
                "id",
                "Icaro",
                "email@gmail.com",
                "hash",
                UserRole.ADMIN
            )
        })

        userDatabase = {getUserByEmail}

        const compareHash = jest.fn(() => true)
        hashManager = {compareHash}

        const generateToken = jest.fn(() => "token")
        tokenManager = {generate: generateToken}

        const userBusiness = new UserBusiness(
            userDatabase as any,
            hashManager as any,
            tokenManager as any,
            idGenerator as any
        )
        
        const result = await userBusiness.login("email@gmail.com", "123456")

        expect(getUserByEmail).toHaveBeenCalledWith("email@gmail.com")
        expect(compareHash).toHaveBeenCalledWith("123456", "hash")
        expect(generateToken).toHaveBeenCalled()
        expect(result.accessToken).toBe("token")
    })

    test("password incorrect", async() => {
        const getUserByEmail = jest.fn((user: User) => {
            return new User(
                "id",
                "Icaro",
                "email@gmail.com",
                "hash",
                UserRole.ADMIN
            )
        })

        userDatabase = {getUserByEmail}

        const compareHash = jest.fn(() => false)
        hashManager = {compareHash}

        try{
            const userBusiness = new UserBusiness(
                userDatabase as any,
                hashManager as any,
                tokenManager as any,
                idGenerator as any
            )

            const result = await userBusiness.login("email@gmail.com", "123456")
        }
        catch(err) {
            expect(getUserByEmail).toHaveBeenCalledWith("email@gmail.com")
            expect(err.message).toBe("Invalid Password")
            expect(err.errorCode).toBe(422)
            expect(compareHash).toHaveBeenCalledWith("123456", "hash")
        }
    })
})