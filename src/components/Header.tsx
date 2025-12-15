import { NavLink } from "react-router";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#F9F7E9]/70 dark:bg-[#3F170E]/70 border-b border-black/5 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <NavLink to="/" className="font-heading text-xl tracking-wide">
          Art&Fact
        </NavLink>

        <nav className="hidden md:flex gap-8 items-center">
          <NavLink to="/explore">Explore</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <button onClick={toggleTheme}>
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </nav>

        <button className="md:hidden" onClick={() => setOpen((prev) => !prev)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 backdrop-blur-md bg-[#F9F7E9]/90 dark:bg-[#3F170E]/90">
          <NavLink to="/explore" onClick={() => setOpen(false)}>
            Explore
          </NavLink>
          <NavLink to="/gallery" onClick={() => setOpen(false)}>
            Gallery
          </NavLink>
          <button onClick={toggleTheme} className="flex items-center gap-2">
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />} Toggle
            theme
          </button>
        </div>
      )}
    </header>
  );
};
