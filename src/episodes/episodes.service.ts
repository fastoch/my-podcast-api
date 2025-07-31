import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateEpisodeDto, Episode } from './episodes.dto';

@Injectable()
export class EpisodesService {
  private episodes: Episode[] = [];

  /**
   * method that retrieves all episodes & sort them based on their name
   */
  async findAll(order: 'asc' | 'desc' = 'asc'): Promise<Episode[]> {
    // create a copy to avoid mutating the original array
    const sorted = [...this.episodes];

    // use the built-in sort() and localeCompare() methods for proper sorting of a String[]
    sorted.sort((a: Episode, b: Episode) => 
      order === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    )
    return sorted
  }

  async findFeatured() {
    return this.episodes.find((episode) => episode.featured)
  }

  async findOne(id: string) {
    return this.episodes.find((episode) => episode.id === id)
  }

  async create(episodeData: CreateEpisodeDto): Promise<Episode> {
    const newEpisode: Episode = { ...episodeData, id: randomUUID() };
    this.episodes.push(newEpisode);
    return newEpisode;
  }
}
