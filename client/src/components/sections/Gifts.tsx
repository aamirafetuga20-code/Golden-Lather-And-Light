import { FadeIn } from "../ui/fade-in";
import { useProducts } from "@/hooks/use-products";
import { useToast } from "@/hooks/use-toast";

export function Gifts() {
  const { data: products } = useProducts();
  const { toast } = useToast();
  
  const displayGifts = products?.filter(p => p.type === 'gift') || [];

  const handleOrder = () => {
    toast({
      title: "Gift Set Selected",
      description: "Proceeding to order configuration.",
    });
  };

  const fallbacks = [
    { name: "Sweet Start", includes: "1 Signature Soap Bar\n+ 1 Small Soy Candle (4–6 oz)\n+ Gift Wrapping", price: "$22 – $25", featured: false },
    { name: "Golden Set", includes: "2 Soap Bars\n+ 1 Medium Candle (8–10 oz)\n+ Curated Gift Box", price: "$35 – $40", featured: true },
    { name: "Luxury Bundle", includes: "3 Soap Bars\n+ 2 Soy Candles\n+ Extras & Premium Box", price: "$55 – $65", featured: false },
  ];

  const itemsToRender = displayGifts.length > 0 ? displayGifts : fallbacks;

  return (
    <section id="gifts" className="py-24 px-8 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 text-xs tracking-[0.35em] uppercase text-primary mb-6">
            <span className="w-8 h-[1px] bg-primary/50"></span>
            Curated Gift Sets
            <span className="w-8 h-[1px] bg-primary/50"></span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
            The gift they'll <em className="text-primary italic">actually</em><br />remember
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {itemsToRender.map((gift, i) => {
            const isFeatured = gift.featured;
            
            return (
              <FadeIn key={'id' in gift ? gift.id : i} delay={i * 0.15}>
                <div 
                  className={`relative h-full flex flex-col items-center text-center p-10 lg:p-12 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 border ${
                    isFeatured ? "bg-primary border-primary text-white" : "border-border hover:border-primary/50"
                  }`}
                >
                  {isFeatured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-primary text-[0.6rem] font-semibold tracking-widest uppercase px-6 py-2 shadow-sm whitespace-nowrap">
                      Most Popular
                    </div>
                  )}
                  
                  <h3 className={`font-serif text-3xl mb-4 mt-4 ${isFeatured ? "text-white" : "text-foreground"}`}>
                    {gift.name}
                  </h3>
                  
                  <div className={`text-sm leading-loose mb-10 whitespace-pre-line flex-grow ${isFeatured ? "text-white/90" : "text-muted-foreground"}`}>
                    {gift.giftIncludes || gift.includes}
                  </div>
                  
                  <div className={`font-serif text-4xl font-light mb-10 ${isFeatured ? "text-white" : "text-primary"}`}>
                    {gift.price}
                  </div>
                  
                  <button 
                    onClick={handleOrder}
                    className={`w-full py-4 text-xs font-medium tracking-widest uppercase transition-colors border ${
                      isFeatured 
                        ? "bg-white text-primary border-white hover:bg-background" 
                        : "border-primary text-primary hover:bg-primary hover:text-white"
                    }`}
                  >
                    Order Now
                  </button>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
