import { ArtworkSchema } from "../schemas/artworkSchema";
import {type Artwork} from "../schemas/artworkSchema"

const BASE_URL = "https://api.artic.edu/api/v1/artworks";

async function searchArtworks(query?: string) {
  const res = await fetch(
    `${BASE_URL}/search?q=${query}&fields=id,title,artist_title,image_id,place_of_origin`
  );
  const json:{
    data: Artwork[];
  } = await res.json();

  return json.data
    .map((item: unknown) => ArtworkSchema.safeParse(item))
    .filter(result => result.success)
    .map(result => result.data);
}

export const ArtworksService ={
  searchArtworks
}