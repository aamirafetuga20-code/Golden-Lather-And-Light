import { Facebook, Instagram, PinIcon, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-secondary py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-secondary/10 mb-10">
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl text-primary mb-4">Golden Lather & Light Co.</h3>
            <p className="text-sm text-secondary/60 leading-relaxed mb-6 max-w-xs">
              Handmade natural soaps and soy candles crafted with care in Nashville, Tennessee. Small batch. Big heart.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/10 hover:border-primary transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/10 hover:border-primary transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/10 hover:border-primary transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/10 hover:border-primary transition-all">
                <PinIcon size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold tracking-[0.25em] uppercase text-primary mb-6">Shop</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#products" className="text-sm text-secondary/60 hover:text-primary transition-colors">Soaps</a></li>
              <li><a href="#products" className="text-sm text-secondary/60 hover:text-primary transition-colors">Candles</a></li>
              <li><a href="#gifts" className="text-sm text-secondary/60 hover:text-primary transition-colors">Gift Sets</a></li>
              <li><a href="#experience" className="text-sm text-secondary/60 hover:text-primary transition-colors">Event Favors</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold tracking-[0.25em] uppercase text-primary mb-6">Experiences</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#experience" className="text-sm text-secondary/60 hover:text-primary transition-colors">Soap Making Party</a></li>
              <li><a href="#experience" className="text-sm text-secondary/60 hover:text-primary transition-colors">Candle Making Party</a></li>
              <li><a href="#experience" className="text-sm text-secondary/60 hover:text-primary transition-colors">Corporate Events</a></li>
              <li><a href="#experience" className="text-sm text-secondary/60 hover:text-primary transition-colors">Wedding Favors</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold tracking-[0.25em] uppercase text-primary mb-6">Connect</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#story" className="text-sm text-secondary/60 hover:text-primary transition-colors">Our Story</a></li>
              <li><a href="#contact" className="text-sm text-secondary/60 hover:text-primary transition-colors">Newsletter</a></li>
              <li><a href="#" className="text-sm text-secondary/60 hover:text-primary transition-colors">Nashville Markets</a></li>
              <li><a href="#" className="text-sm text-secondary/60 hover:text-primary transition-colors">Wholesale Inquiries</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-secondary/40 tracking-wider">
            © {new Date().getFullYear()} Golden Lather & Light Co. · Nashville, TN · All rights reserved.
          </p>
          <p className="font-serif italic text-primary/80">
            Handcrafted in Nashville, Made with Care
          </p>
        </div>
      </div>
    </footer>
  );
}
