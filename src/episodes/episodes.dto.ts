/**
 * it's best practice to define data structures like this in a dedicated Data Transfer Object (DTO) file
 * (episodes.dto.ts)
 */
type Episode = {
  id: number, 
  name: string, 
  featured: boolean
}