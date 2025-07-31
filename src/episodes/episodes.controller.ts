import { Controller, Get, Post, Query, Body, Param } from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { ConfigService } from '../config/config.service';
import { CreateEpisodeDto } from './episodes.dto';

@Controller('episodes')
export class EpisodesController {
  constructor(
    private episodesService: EpisodesService,
    private configService: ConfigService  // this won't be used, it's just for the example
  ) {}

  @Get()
  findAll(@Query('sort') sort: 'asc' | 'desc' = 'desc') {
    return this.episodesService.findAll(sort)
  }

  @Get('featured')
  findFeatured() {
    return this.episodesService.findFeatured()
  }

  @Get(':id')
  findOne(@Param() id: string) {
    return this.episodesService.findOne(id)
  }

  @Post()
  create(@Body() input: CreateEpisodeDto) {
    return this.episodesService.create(input)
  }
}