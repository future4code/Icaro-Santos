import {Character} from '../Interfaces/Character'
import { validateCharacter } from './validateCharacter'

// const performAttack = (attacker: Character, defender: Character) => {
//     if(!validateCharacter(attacker) || !validateCharacter(defender)) {
//         throw new Error("Invalid character")
//     }

//     if(attacker.strength > defender.strength) {
//         defender.life -= attacker.strength - defender.strength
//     }
// }

export const performAttack = (
    attacker: Character,
    defender: Character,
    validator: (input: Character) => boolean
) => {
    if(!validator(attacker) || !validator(defender)){
        throw new Error(("Invalid character"))
    }

    if(attacker.strength > defender.defense) {
        defender.life -= attacker.strength - defender.defense
    }
}