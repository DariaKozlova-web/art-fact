import { useEffect, useState } from "react";
import { ArtworksService } from "../api/artInstitute";
import { type Artwork } from "../schemas/artworkSchema";

export const Explore = () => {
  useEffect(() => {
    const fetchData = async () => {
      await ArtworksService.searchArtworks();
    };
    fetchData();
  }, []);
  const [cardItems, setCardItems]=useState<Artwork[]>([]);

  return <div>Explore</div>;
};
