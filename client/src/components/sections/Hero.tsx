import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image - warm glowing candle and handmade soap hero image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1608528577891-eb055944f2e7?auto=format&fit=crop&q=80&w=1920")' 
        }}
      />
      
      {/* Overlays for readability and mood */}
      <div className="absolute inset-0 z-10 bg-black/30" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto text-white mt-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-4 text-xs tracking-[0.35em] uppercase text-primary mb-8"
        >
          <span className="w-8 h-[1px] bg-primary"></span>
          Handcrafted in Nashville, Tennessee
          <span className="w-8 h-[1px] bg-primary"></span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] mb-8"
        >
          Small Batch.<br />
          <em className="text-primary italic">Big Heart.</em><br />
          Nashville Made.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Natural soaps and soy candles handcrafted by Aamira Fetuga — your local Nashville maker. Every product is made in small batches with clean, trusted ingredients.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a href="#products" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-10 py-4 text-xs font-medium tracking-[0.2em] uppercase transition-all hover:-translate-y-1 shadow-lg shadow-primary/20">
            Shop the Collection
          </a>
          <a href="#gifts" className="w-full sm:w-auto border border-white hover:bg-white hover:text-black text-white px-10 py-4 text-xs font-medium tracking-[0.2em] uppercase transition-all hover:-translate-y-1">
            Explore Gift Sets
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 text-white/70 text-[0.65rem] tracking-[0.2em] uppercase"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
        Scroll
      </motion.div>
    </section>
  );
}
