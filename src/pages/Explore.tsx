import { useEffect } from "react";
import { ArtworksService } from "../api/artInstitute";

export const Explore = () => {
  useEffect(() => {
    const fetchData = async () => {
      await ArtworksService.searchArtworks();
    };
    fetchData();
  }, []);
  return <div>Explore</div>;
};
