import { BaseDatabase } from './BaseDatabase'
import { User } from '../model/User'

export class UserDatabase extends BaseDatabase {
    protected tableName: string = "LAMA_Users"

    private toModel(dbModel?: any): User | undefined {
        return (
            dbModel &&
            new User(
                dbModel.id,
                dbModel.name,
                dbModel.email,
                dbModel.password,
                dbModel.role
            )
        );
    }

    public async createUser(user: User): Promise<void> {
        await super.getConnection().raw(`
            INSERT INTO ${this.tableName} (id, name, email, password, role)
            VALUES (
                '${user.getId()}', 
                '${user.getName()}', 
                '${user.getEmail()}',
                '${user.getPassword()}', 
                '${user.getRole()}'
            )`
        );
    }

    public async getUserByEmail(email: string): Promise<User | undefined> {
        const result = await super.getConnection().raw(`
            select * from ${this.tableName} where email = '${email}'
        `)
        return this.toModel(result[0][0])
    }
}