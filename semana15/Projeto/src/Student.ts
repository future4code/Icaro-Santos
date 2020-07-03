import {User} from './User'
import moment from 'moment'

export class Student implements User {
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public birthDate: moment.Moment,
        public hobbies: string[]
    ) {}

    public getAge(): number{
        return moment().diff(this.birthDate, "years")
    }
}