import { useEffect, useState } from "react";
import { ArtworksService } from "../api/artInstitute";
import { type Artwork } from "../schemas/artworkSchema";
import { SearchBar } from "../components/SearchBar";

export const Explore = () => {
  const [cardItems, setCardItems] = useState<Artwork[]>([]);
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
  return (
    <>
    {cardItems&&cardItems.map((item)=>{
      return (
        <div key={item.id}>{item.title}</div>
      )
    }) }
      <SearchBar onSearch={handleSearch} />
    </>
  );
};
