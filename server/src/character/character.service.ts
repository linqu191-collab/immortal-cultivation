import { Injectable } from '@nestjs/common'

@Injectable()
export class CharacterService {
  async getCharacterInfo() {
    return {
      id: 1,
      name: '修仙者',
      level: 1,
      realm: '练气期一层',
      exp: 0,
      maxExp: 100,
      gold: 1000,
      spirit: 500,
      maxSpirit: 500,
      health: 100,
      maxHealth: 100,
      attack: 50,
      defense: 30,
      spiritRoot: '金灵根'
    }
  }

  async createCharacter(data: any) {
    return {
      id: Date.now(),
      ...data,
      level: 1,
      realm: '练气期一层',
      exp: 0,
      maxExp: 100,
      gold: 1000
    }
  }
}
