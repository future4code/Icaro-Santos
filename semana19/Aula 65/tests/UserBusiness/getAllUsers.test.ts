import { UserBusiness } from "../../src/business/UserBusiness";
import { User, UserRole, stringToUserRole } from "../../src/model/User";
import { hash } from "bcryptjs";

describe("testing getAllUsers from UserBusiness", () => {
    let userDatabase = {}
    let hashGenerator = {}
    let tokenGenerator = {}
    let idGenerator = {}

    test("Erro de  não autorizado", async() => {
        expect.assertions(2)
        try{
            const getAllUsers = new UserBusiness(
                userDatabase as any,
                hashGenerator as any,
                tokenGenerator as any,
                idGenerator as any
            )

            await getAllUsers.getAllUsers(UserRole.NORMAL)
        }
        catch(err){
            expect(err.errorCode).toBe(403)
            expect(err.message).toEqual("You must be an admin to access this endpoint")
        }
    })

    test("Resposta de sucesso", async() => {
        expect.assertions(2)

        const getAllUsers = jest.fn(() => [
            new User(
                "id",
                "Icaro",
                "icaro@gmail.com",
                "123456",
                UserRole.ADMIN
            )
        ])

        userDatabase = {getAllUsers}

        const userBusiness = new UserBusiness(
            userDatabase as any,
            hashGenerator as any,
            tokenGenerator as any,
            idGenerator as any
        )

        const result = await userBusiness.getAllUsers(UserRole.ADMIN)

        expect(getAllUsers).toHaveBeenCalledTimes(1)
        expect(result).toContainEqual({
            id: "id",
            name: "Icaro",
            email: "icaro@gmail.com",
            role: UserRole.ADMIN
        })
    })
})