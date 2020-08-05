import * as jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export class TokenManager {
    private static expiresIn: number = 1200

    public generate = (input: AuthenticationData): string => {
        const newToken = jwt.sign(
            {
                id: input.id,
                role: input.role
            },
            process.env.JWT_KEY as string,
            {
                expiresIn: TokenManager.expiresIn
            }
        )
        return newToken
    }

    public verify(token: string) {
        const payload = jwt.verify(token, process.env.JWT_KEY as string) as any
        const result = {id: payload.id, role: payload.role}

        return result
    }

    public getData = (token: string): AuthenticationData => {
        const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
        return payload;
    };
}

export interface AuthenticationData {
    id: string;
    role: string;
}