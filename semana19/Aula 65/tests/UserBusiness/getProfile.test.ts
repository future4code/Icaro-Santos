import { UserBusiness } from "../../src/business/UserBusiness";
import { User, UserRole, stringToUserRole } from "../../src/model/User";

describe("testing getProfile from UserBusiness", () => {
    let userDatabase = {};
    let hashGenerator = {};
    let tokenGenerator = {};
    let idGenerator = {};
    test("erro de perfil não existente", async() => {
        expect.assertions(2)
        try{
            const getUserById = jest.fn()

            userDatabase = { getUserById }

            const userBusiness = new UserBusiness(
                userDatabase as any,
                hashGenerator as any,
                tokenGenerator as any,
                idGenerator as any
            )

            await userBusiness.getProfile("123")
        }
        catch(err){
            expect(err.errorCode).toBe(404)
            expect(err.message).toEqual("User not found")
        }
    })

    test("sucesso em pegar profile", async() => {
        expect.assertions(2)

        const getUserById = jest.fn(
            (id: string) => new User(
                "id",
                "Icaro",
                "icaro@gmail.com",
                "123456",
                UserRole.NORMAL
            )
        )

        userDatabase = {getUserById}

        const userBusiness = new UserBusiness(
            userDatabase as any,
            hashGenerator as any,
            tokenGenerator as any,
            idGenerator as any
        )

        const result = await userBusiness.getProfile("id")

        expect(getUserById).toHaveBeenCalledWith("id")
        expect(result).toEqual({
            id: "id",
            name: "Icaro",
            email: "icaro@gmail.com",
            role: UserRole.NORMAL
        })
    })
})