import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 flex items-center justify-between px-8 md:px-12 lg:px-20 py-6 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent text-white"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <a href="#home" className={`font-serif text-2xl tracking-wide ${isScrolled ? "text-foreground" : "text-white"}`}>
        Golden Lather & Light Co.
      </a>

      <ul className={`hidden md:flex gap-10 text-sm tracking-widest uppercase ${isScrolled ? "text-foreground" : "text-white/90"}`}>
        <li><a href="#products" className="hover:text-primary transition-colors">Shop</a></li>
        <li><a href="#experience" className="hover:text-primary transition-colors">Experiences</a></li>
        <li><a href="#gifts" className="hover:text-primary transition-colors">Gift Sets</a></li>
        <li><a href="#story" className="hover:text-primary transition-colors">Our Story</a></li>
        <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
      </ul>

      <a 
        href="#products" 
        className={`hidden md:inline-block text-xs font-medium tracking-[0.2em] uppercase px-8 py-3 border transition-all duration-300 ${
          isScrolled 
            ? "border-foreground text-foreground hover:bg-foreground hover:text-background" 
            : "border-white text-white hover:bg-white hover:text-black"
        }`}
      >
        Shop Now
      </a>
    </motion.nav>
  );
}
