export function Marquee() {
  const items = [
    "Handmade Natural Soaps",
    "Small Batch Soy Candles",
    "Custom Gift Boxes",
    "Wedding & Event Favors",
    "Candle Making Parties",
    "Nashville Local",
    "Clean Ingredients"
  ];

  // Double the items to ensure seamless infinite scroll
  const marqueeItems = [...items, ...items];

  return (
    <div className="bg-foreground text-primary py-4 overflow-hidden border-y border-primary/20">
      <div className="marquee-track flex gap-12 whitespace-nowrap">
        {marqueeItems.map((item, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="text-xs font-medium tracking-[0.2em] uppercase">{item}</span>
            <span className="text-primary/50 text-sm">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
