import { Heart } from "lucide-react";
import { type Artwork } from "../schemas/artworkSchema";
import { useState } from "react";

type Props = {
  artwork: Artwork;
  isSaved?: boolean;
  onToggle?: (artwork: Artwork) => void;
};

export const ArtworkCard = ({ artwork, isSaved, onToggle }: Props) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="group relative overflow-hidden rounded-xl">
      {artwork.image_id && (
        <img
          src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/400,/0/default.jpg`}
          alt={artwork.title}
          onLoad={() => setLoaded(true)}
          className={`
            h-80 w-full object-cover transition
            ${loaded ? "opacity-100" : "opacity-0"}
            group-hover:scale-105
          `}
        />
      )}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />

      {/* HEART */}
      {onToggle && (
        <button
          onClick={() => onToggle(artwork)}
          className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/35 backdrop-blur-md transition hover:bg-black/50">
          <Heart
            size={18}
            className={
              isSaved ? "fill-(--accent) text-(--accent)" : "text-white"
            }
          />
        </button>
      )}

      {/* INFO */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition">
        <h3 className="text-lg leading-snug">{artwork.title}</h3>
        <p className="text-sm opacity-80">{artwork.artist_title}</p>
      </div>
    </div>
  );
};
