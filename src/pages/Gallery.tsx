import { useState } from "react";
import { Trash2 } from "lucide-react";
import { type Artwork } from "../schemas/artworkSchema";

type ArtworkWithNote = Artwork & {
  note?: string;
};

export const Gallery = () => {
  const [gallery, setGallery] = useState<ArtworkWithNote[]>(() => {
    return JSON.parse(localStorage.getItem("gallery") || "[]");
  });

  const removeArtwork = (id: number) => {
    const updated = gallery.filter((item) => item.id !== id);
    setGallery(updated);
    localStorage.setItem("gallery", JSON.stringify(updated));
  };

  if (!gallery.length) {
    return (
      <div className="text-center py-24 opacity-70">
        Your gallery is empty.
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl mb-12 text-center">
        Your Personal Gallery
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
        {gallery.map((artwork) => (
          <div
            key={artwork.id}
            className="group rounded-xl overflow-hidden"
          >
            {artwork.image_id && (
              <img
                src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/400,/0/default.jpg`}
                alt={artwork.title}
                className="h-80 w-full object-cover"
              />
            )}

            <div className="p-4">
              <h3 className="text-lg">{artwork.title}</h3>
              <p className="text-sm opacity-70">
                {artwork.artist_title}
              </p>

             

              <button
                onClick={() => removeArtwork(artwork.id)}
                className="mt-4 flex items-center gap-2 text-sm opacity-70 hover:opacity-100"
              >
                <Trash2 size={16} />
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};