import { useState } from "react";
import { GalleryCard } from "../components/GalleryCard";
import { ArtworkModal } from "../components/ArtworkModal";
import { type Artwork } from "../schemas/artworkSchema";

type ArtworkWithNote = Artwork & { note?: string };

export const Gallery = () => {
  const [gallery, setGallery] = useState<ArtworkWithNote[]>(() =>
    JSON.parse(localStorage.getItem("gallery") || "[]")
  );
  const [active, setActive] = useState<ArtworkWithNote | null>(null);

  const saveNote = (note: string) => {
    if (!active) return;
    const updated = gallery.map((a) =>
      a.id === active.id ? { ...a, note } : a
    );
    setGallery(updated);
    localStorage.setItem("gallery", JSON.stringify(updated));
    setActive(null);
  };

  const removeArtwork = (id: number) => {
    const updated = gallery.filter((a) => a.id !== id);
    setGallery(updated);
    localStorage.setItem("gallery", JSON.stringify(updated));
    setActive(null);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl mb-12 text-center">Your Gallery</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {gallery.map((artwork) => (
          <GalleryCard
            key={artwork.id}
            artwork={artwork}
            onView={() => setActive(artwork)}
            onRemove={() => removeArtwork(artwork.id)}
          />
        ))}
      </div>

      {active && (
        <ArtworkModal
          artwork={active}
          onClose={() => setActive(null)}
          onSaveNote={saveNote}
          onRemove={() => removeArtwork(active.id)}
        />
      )}
    </section>
  );
};