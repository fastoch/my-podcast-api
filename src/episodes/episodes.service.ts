import { Injectable } from '@nestjs/common';

@Injectable()
export class EpisodesService {
  private episodes: Episode[] = []
  
  /**
   * method that retrieves all episodes & sort them based on their name
   */
  async findAll(sort: 'asc' | 'desc' = 'asc') {
    const sortAsc = (a: Episode, b: Episode) => (a.name > b.name ? 1 : -1)
    const sortDesc = (a: Episode, b: Episode) => (a.name < b.name ? 1 : -1)

    return sort === 'asc'
      ? this.episodes.sort(sortAsc)
      : this.episodes.sort(sortDesc)
  }
}
