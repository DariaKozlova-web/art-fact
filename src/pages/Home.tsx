import { Link } from "react-router";
import heroBg from "../assets/images/bg-img2.jpg";

export const Home = () => {
  return (
    <div className="fade-in">
      {/* HERO */}
      <section
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-cover bg-center bg-no-repeat -mt-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-white/50 dark:bg-black/80" />
        {/* CONTENT */}
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-6xl mb-6">Discover timeless art.</h1>
          <p className="max-w-xl opacity-80">
            Curate your personal gallery. Add your own reflections.
          </p>
          <Link to="/explore" className="btn-primary mt-10 inline-block">
            Explore the Collection
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6 py-24">
        <Feature
          title="Explore Art"
          text="Search the Art Institute of Chicago collection."
        />
        <Feature
          title="Personal Gallery"
          text="Save artworks that inspire you."
        />
        <Feature
          title="Your Notes"
          text="Add reflections and personal meaning."
        />
      </section>

      {/* QUOTE */}
      <section className="text-center px-6 py-24 opacity-80">
        <blockquote className="text-xl md:text-2xl font-heading">
          “Art enables us to find ourselves and lose ourselves at the same
          time.”
        </blockquote>
        <p className="mt-4">— Thomas Merton</p>
      </section>
    </div>
  );
};

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div className="p-8 rounded-xl hover:-translate-y-1 transition">
      <h3 className="text-xl mb-3">{title}</h3>
      <p className="opacity-70">{text}</p>
    </div>
  );
}
