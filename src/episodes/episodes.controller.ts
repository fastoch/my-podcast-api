import { Controller, Get, Post, Query } from '@nestjs/common';

@Controller('episodes')
export class EpisodesController {
  @Get()
  findAll(@Query('sort') sort: 'asc' | 'desc' = 'desc') {
    console.log(sort)
    return 'all episodes'
  }

  @Get('featured')
  findFeatured() {
    return 'featured episodes'
  }

  @Post()
  create() {
    return 'new episode'
  }
}
