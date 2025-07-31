import { Controller, Get, Post, Query, Body, Param } from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { CreateEpisodeDto } from './episodes.dto';

@Controller('episodes')
export class EpisodesController {

  @Get()
  findAll(@Query('sort') sort: 'asc' | 'desc' = 'desc') {
    console.log(sort)  // this is just to make use of sort
    return 'all episodes'
  }

  @Get('featured')
  findFeatured() {
    return 'featured episodes'
  }

  @Get(':id')
  findOne(@Param() id: string) {
    console.log(id)  // this is just to make use of id
    return 'one episode'
  }

  @Post()
  create(@Body() input: any) {
    console.log(input)  // this is just to make use of input
    return 'new episode'
  }
}