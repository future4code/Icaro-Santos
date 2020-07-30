import { UserBusiness } from "../../src/business/UserBusiness";
import { User, UserRole, stringToUserRole } from "../../src/model/User";

describe("testing getUserById from UserBusiness", () => {
    let userDatabase = {};
    let hashGenerator = {};
    let tokenGenerator = {};
    let idGenerator = {};
    test("Erro de usuário não existente", async () => {
        expect.assertions(2)
        try {
            const getUserById = jest.fn()
            userDatabase = { getUserById }

            const userBusiness = new UserBusiness(
                userDatabase as any,
                hashGenerator as any,
                tokenGenerator as any,
                idGenerator as any
            )

            await userBusiness.getUserById("123")
        }
        catch (err) {
            expect(err.errorCode).toBe(404)
            expect(err.message).toBe("User not found")
        }
    })

    test("Resposta de sucesso", async () => {
        expect.assertions(2)
        const getUserById = jest.fn(
            (id: string) => new User(
                "id",
                "Icaro",
                "icaro@gmail.com",
                "123456",
                stringToUserRole("ADMIN")
            )
        )

        userDatabase = { getUserById }

        const userBusiness = new UserBusiness(
            userDatabase as any,
            hashGenerator as any,
            tokenGenerator as any,
            idGenerator as any
        )

        const user = await userBusiness.getUserById("id")

        expect(getUserById).toHaveBeenCalledWith("id")
        expect(user).toEqual({
            id: "id",
            name: "Icaro",
            email: "icaro@gmail.com",
            role: UserRole.ADMIN
        })
    })
})