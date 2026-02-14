import { Controller, Get, Post, Body } from '@nestjs/common'
import { CharacterService } from './character.service'

@Controller('character')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Get('info')
  async getCharacterInfo() {
    const character = await this.characterService.getCharacterInfo()
    return {
      code: 200,
      msg: 'success',
      data: character
    }
  }

  @Post('create')
  async createCharacter(@Body() body: any) {
    const character = await this.characterService.createCharacter(body)
    return {
      code: 200,
      msg: 'success',
      data: character
    }
  }
}
