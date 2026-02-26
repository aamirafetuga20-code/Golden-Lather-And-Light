import { FadeIn } from "../ui/fade-in";
import { useProducts } from "@/hooks/use-products";
import { useToast } from "@/hooks/use-toast";

export function Experience() {
  const { data: products } = useProducts();
  const { toast } = useToast();
  
  const displayExperiences = products?.filter(p => p.type === 'experience') || [];

  const handleBooking = () => {
    toast({
      title: "Booking Request Initiated",
      description: "We'll be in touch shortly to finalize details.",
    });
  };

  const fallbacks = [
    { title: "Soap Making Party", desc: "A guided 2-hour experience where guests craft their own custom soap bars to take home. Minimum 6 guests.", price: "$40 – $50 per person" },
    { title: "Candle Making Party", desc: "Pour, scent, and personalize your own soy candles in a fun, fragrant 2-hour session perfect for any occasion.", price: "$40 – $50 per person" },
    { title: "Custom Event Favors", desc: "Weddings, bridal showers, corporate events — fully customized soaps and candles as memorable favors.", price: "Custom Pricing" }
  ];

  return (
    <section id="experience" className="py-24 px-8 md:px-12 lg:px-20 bg-muted">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <FadeIn direction="right">
          <div className="flex items-center gap-4 text-xs tracking-[0.35em] uppercase text-primary mb-6">
            <span className="w-8 h-[1px] bg-primary"></span>
            More Than Products
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
            Book a <em className="text-primary italic">Making</em><br />Party Experience
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed mb-10 max-w-md">
            Gather your friends, family, or colleagues for a hands-on soap and candle making experience. Hosted at your location or ours — everyone takes home what they make.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-white text-primary px-10 py-4 text-xs font-medium tracking-[0.2em] uppercase shadow-sm hover:shadow-xl hover:bg-background transition-all duration-300 hover:-translate-y-1"
          >
            Book Your Party
          </a>
        </FadeIn>

        <FadeIn direction="left" className="flex flex-col gap-4">
          {(displayExperiences.length > 0 ? displayExperiences : fallbacks).map((exp, i) => (
            <div 
              key={'id' in exp ? exp.id : i} 
              className="bg-white p-8 md:p-10 border-l-4 border-primary hover:translate-x-2 transition-transform duration-300 shadow-sm"
            >
              <h3 className="font-serif text-2xl text-foreground mb-3">{exp.name || exp.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {exp.description || exp.desc}
              </p>
              <div className="text-xs font-semibold tracking-wide text-primary">
                {exp.price}
              </div>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
