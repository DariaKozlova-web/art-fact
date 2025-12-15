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

  const toggleGallery = (artwork: Artwork)=>{
    const exists = gallery.some((item)=>item.id === artwork.id);
    const updated = exists?gallery.filter((item)=>item.id !==artwork.id):[...gallery, artwork];
    setGallery(updated);
    localStorage.setItem("gallery", JSON.stringify(updated));
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <SearchBar onSearch={handleSearch} />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12">
        {cardItems.map((item) => {
          return (
            // <div key={item.id}>{item.title}</div>
            <ArtworkCard key={item.id} artwork={item} isSaved={gallery.some((g)=>g.id===item.id)} onToggle={toggleGallery}/>
          );
        })}
      </div>
    </section>
  );
};
