import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { FilterCharacter } from '../dtos/character.dto';
import { CharactersService } from '../services/characters.service';

@ApiTags('character')
@Controller('characters')
export class CharactersController {
  constructor(private characterService: CharactersService) {}

  @Get()
  @ApiOperation({ summary: 'Get character' })
  async getCharacter(@Query() params: FilterCharacter) {
    return await this.characterService.getCharacter(params);
  }
}
