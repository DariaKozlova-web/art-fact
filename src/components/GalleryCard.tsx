import { Eye, Trash2 } from "lucide-react";
import { type Artwork } from "../schemas/artworkSchema";

type Props = {
  artwork: Artwork & { note?: string };
  onView: () => void;
  onRemove: () => void;
};

export const GalleryCard = ({ artwork, onView, onRemove }: Props) => {
  return (
    <div
      className="rounded-xl overflow-hidden flex flex-col h-105 border
      border-[color-mix(in srgb, var(--text) 15%, transparent)]"
    >
      {artwork.image_id && (
        <img
          src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/400,/0/default.jpg`}
          alt={artwork.title}
          className="h-60 w-full object-cover"
        />
      )}

      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-sm leading-snug line-clamp-2">{artwork.title}</h3>
        {/* ARTIST */}
        {artwork.artist_title && (
          <p className="text-xs opacity-70 mt-1 line-clamp-1">
            {artwork.artist_title}
          </p>
        )}

        {/* PLACE */}
        {artwork.place_of_origin && (
          <p className="text-[11px] opacity-50 mt-1">
            {artwork.place_of_origin}
          </p>
        )}

        {artwork.note && (
          <p className="text-xs italic opacity-60 mt-3 line-clamp-2">
            “{artwork.note}”
          </p>
        )}

        <div className="mt-auto flex justify-between pt-4">
          <button
            onClick={onView}
            className="flex items-center gap-1 text-xs opacity-70 hover:opacity-100"
          >
            <Eye size={14} /> View
          </button>

          <button
            onClick={onRemove}
            className="flex items-center gap-1 text-xs opacity-70 hover:opacity-100"
          >
            <Trash2 size={14} /> Remove
          </button>
        </div>
      </div>
    </div>
  );
};
