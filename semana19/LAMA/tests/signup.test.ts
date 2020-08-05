import { UserBusiness } from "../src/business/UserBusiness";
import { User, stringToUserRole } from "../src/model/User";

describe("Testing signup", () => {

    let userDatabase = {};
    let hashGenerator = {};
    let tokenGenerator = {};
    let idGenerator = {};

    test("signup success", async() => {
        const generateId = jest.fn(() => "id");
        idGenerator = { generate: generateId };

        const hash = jest.fn(() => "hash");
        hashGenerator = { hash };

        const generateToken = jest.fn(() => "token");
        tokenGenerator = { generate: generateToken };

        const createUser = jest.fn((user: User) => { });
        userDatabase = { createUser };

        const userBusiness = new UserBusiness(
            userDatabase as any,
            hashGenerator as any,
            tokenGenerator as any,
            idGenerator as any
        );

        const result = await userBusiness.signup(
            "Astrodev",
            "astrodev@gmail.com",
            "123456",
            "ADMIN"
        );

        expect(result.accessToken).toBe("token");
        expect(hash).toHaveBeenCalledWith("123456");
        expect(generateId).toHaveBeenCalledTimes(1);
        expect(generateToken).toHaveBeenCalledWith({ id: "id", role: "ADMIN" });
        expect(createUser).toHaveBeenCalledWith(
            new User(
                "id",
                "Astrodev",
                "astrodev@gmail.com",
                "hash",
                stringToUserRole("ADMIN")
            )
        )
    })
})