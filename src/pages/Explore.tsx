import { useEffect, useState } from "react";
import { ArtworksService } from "../api/artInstitute";
import { type Artwork } from "../schemas/artworkSchema";
import { SearchBar } from "../components/SearchBar";
import { ArtworkCard } from "../components/ArtworkCard";

export const Explore = () => {
  const [cardItems, setCardItems] = useState<Artwork[]>([]);
  const [gallery, setGallery] = useState<Artwork[]>(()=>{
    return JSON.parse(localStorage.getItem("gallery")||"[]")
  });
  useEffect(() => {
    const fetchData = async () => {
      const items = await ArtworksService.searchArtworks();
      setCardItems(items);
    };
    fetchData();
  }, []);

  const handleSearch = async (text: string) => {
    console.log(text);
    const items = await ArtworksService.searchArtworks(text);
    setCardItems(items);
  };

  const toggleGallery =

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {cardItems &&
        cardItems.map((item) => {
          return (
            // <div key={item.id}>{item.title}</div>
            <ArtworkCard artwork={item} />
          );
        })}
    </>
  );
};
