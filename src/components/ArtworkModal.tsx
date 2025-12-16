import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { X, Trash2, Save } from "lucide-react";
import { type Artwork } from "../schemas/artworkSchema";

type Props = {
  artwork: Artwork & { note?: string };
  onClose: () => void;
  onSaveNote: (note: string) => void;
  onRemove: () => void;
};

export const ArtworkModal = ({
  artwork,
  onClose,
  onSaveNote,
  onRemove,
}: Props) => {
  const [note, setNote] = useState(artwork.note || "");

  // block page scrolling
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return createPortal(
    <div className="fixed inset-0 z-9999">
      {/* OVERLAY */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="relative flex items-center justify-center min-h-screen px-4">
        <div
          className="
            relative
            bg-(--bg) text-(--text)
            w-full max-w-3xl
            rounded-xl overflow-hidden
            shadow-2xl
          "
        >
          {/* MODAL HEADER */}
          <div className="flex justify-between items-center p-4 border-b
            border-[color-mix(in srgb, var(--text) 15%, transparent)]">
            <h2 className="text-lg font-heading">
              {artwork.title}
            </h2>

            <button onClick={onClose}>
              <X />
            </button>
          </div>

          {/* CONTENT */}
          <div className="grid md:grid-cols-2 gap-6 p-6 max-h-[80vh] overflow-y-auto">
            {artwork.image_id && (
              <img
                src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/600,/0/default.jpg`}
                alt={artwork.title}
                className="rounded-lg object-cover"
              />
            )}

            <div>
              <div className="space-y-2 mb-4 text-sm">
                {artwork.artist_title && (
                  <p>
                    <span className="opacity-60">Artist:</span>{" "}
                    {artwork.artist_title}
                  </p>
                )}

                {artwork.place_of_origin && (
                  <p>
                    <span className="opacity-60">Origin:</span>{" "}
                    {artwork.place_of_origin}
                  </p>
                )}
              </div>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Add your reflection..."
                className="
                  w-full h-32 p-3 rounded-lg
                  bg-transparent border
                  border-[color-mix(in srgb, var(--text) 20%, transparent)]
                "
              />

              <div className="flex justify-between mt-6">
                <button
                  onClick={() => onSaveNote(note)}
                  className="btn-primary flex items-center gap-2"
                >
                  <Save size={16} /> Save
                </button>

                <button
                  onClick={onRemove}
                  className="flex items-center gap-2 opacity-70 hover:opacity-100"
                >
                  <Trash2 size={16} /> Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
