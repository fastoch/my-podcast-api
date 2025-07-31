/**
 * it's best practice to define data structures in a dedicated Data Transfer Object (DTO) file
 * (episodes.dto.ts)
 */
export type Episode = {
  id: string, 
  name: string, 
  featured: boolean
}

export type CreateEpisodeDto = {
  name: string,
  featured: boolean
}
