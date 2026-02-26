import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { useProducts } from "@/hooks/use-products";
import { useSubscribe } from "@/hooks/use-subscribers";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Leaf, Sparkles, Gift, Star, CheckCircle } from "lucide-react";
import { insertSubscriberSchema } from "@shared/routes";

// ==========================================
// FALLBACK DATA (If DB is empty)
// ==========================================
const fallbackProducts = [
  {
    id: 1, type: 'product', category: 'Natural Soap', name: 'Signature Bar Soap',
    description: 'Melt-and-pour glycerin base with custom scents and natural colorants. Gentle on all skin types.',
    price: '$8.00', imagePlaceholder: '🧼', featured: false, giftIncludes: null
  },
  {
    id: 2, type: 'product', category: 'Soy Candle', name: 'Soy Wax Candle',
    description: 'Clean-burning soy wax in custom fragrances. Sets the perfect mood for any space in your home.',
    price: '$12.00', imagePlaceholder: '🕯️', featured: false, giftIncludes: null
  },
  {
    id: 3, type: 'product', category: 'Premium Bar', name: 'Specialty Soap Bar',
    description: 'Elevated formulations with premium botanicals and unique scent blends. A treat for the senses.',
    price: '$10.00', imagePlaceholder: '✨', featured: false, giftIncludes: null
  }
];

const fallbackExperiences = [
  { id: 4, type: 'experience', name: '🧼 Soap Making Party', description: 'A guided 2-hour experience where guests craft their own custom soap bars to take home. Minimum 6 guests.', price: '$40 – $50 per person' },
  { id: 5, type: 'experience', name: '🕯️ Candle Making Party', description: 'Pour, scent, and personalize your own soy candles in a fun, fragrant 2-hour session perfect for any occasion.', price: '$40 – $50 per person' },
  { id: 6, type: 'experience', name: '🎉 Custom Event Favors', description: 'Weddings, bridal showers, corporate events — fully customized soaps and candles as memorable favors.', price: 'Custom Pricing' }
];

const fallbackGifts = [
  { id: 7, type: 'gift', name: 'Sweet Start', imagePlaceholder: '🌸', giftIncludes: '1 Signature Soap Bar\n+ 1 Small Soy Candle (4–6 oz)\n+ Gift Wrapping', price: '$22 – $25', featured: false },
  { id: 8, type: 'gift', name: 'Golden Set', imagePlaceholder: '✨', giftIncludes: '2 Soap Bars\n+ 1 Medium Candle (8–10 oz)\n+ Curated Gift Box', price: '$35 – $40', featured: true },
  { id: 9, type: 'gift', name: 'Luxury Bundle', imagePlaceholder: '👑', giftIncludes: '3 Soap Bars\n+ 2 Soy Candles\n+ Extras & Premium Box', price: '$55 – $65', featured: false }
];

// ==========================================
// SECTIONS
// ==========================================

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="home">
      {/* Background with Unsplash Image */}
      {/* artisanal handmade soap and candles rustic */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://pixabay.com/get/g55b438a1fdfceb4912609add0105c0ef87b5abca6bb62a9dec0f47c503b8a9bc05e9d33dbc79fb640c1272c7af1ef0d7afab27f2ee279ac1bd13f7f2a8e4d6c7_1280.jpg" 
          alt="Handcrafted soaps and candles" 
          className="w-full h-full object-cover object-center"
        />
        {/* Overlays for readability and mood */}
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
        <FadeIn delay={0.1}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-px bg-primary"></span>
            <span className="text-white uppercase tracking-[0.25em] text-xs font-semibold">Handcrafted in Nashville, Tennessee</span>
            <span className="w-12 h-px bg-primary"></span>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight">
            Small Batch.<br />
            <em className="text-primary italic font-light">Big Heart.</em><br />
            Nashville Made.
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Natural soaps and soy candles handcrafted by Aamira Fetuga — your local Nashville maker. Every product is made in small batches with clean, trusted ingredients.
          </p>
        </FadeIn>

        <FadeIn delay={0.4} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#products" className="bg-primary text-primary-foreground px-10 py-4 text-sm font-medium tracking-[0.2em] uppercase hover:bg-primary/90 transition-all hover:-translate-y-1 shadow-xl w-full sm:w-auto">
            Shop the Collection
          </a>
          <a href="#gifts" className="bg-white/10 backdrop-blur-md border border-white text-white px-10 py-4 text-sm font-medium tracking-[0.2em] uppercase hover:bg-white hover:text-foreground transition-all hover:-translate-y-1 w-full sm:w-auto">
            Explore Gift Sets
          </a>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/70 z-10 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
      </div>
    </section>
  );
}

function Marquee() {
  const words = [
    "Handmade Natural Soaps", "Small Batch Soy Candles", "Custom Gift Boxes", 
    "Wedding & Event Favors", "Candle Making Parties", "Nashville Local", "Clean Ingredients"
  ];
  
  return (
    <div className="bg-primary text-primary-foreground py-4 overflow-hidden flex border-y border-primary/20">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {[...words, ...words, ...words].map((word, i) => (
          <span key={i} className="mx-6 text-sm font-medium tracking-[0.15em] uppercase flex items-center gap-6">
            {word}
            <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/50 inline-block" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Values() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        <FadeIn delay={0.1} className="text-center px-4">
          <div className="w-16 h-16 mx-auto bg-secondary rounded-full flex items-center justify-center mb-6 text-primary border border-border">
            <Leaf size={28} strokeWidth={1.5} />
          </div>
          <h3 className="font-serif text-2xl mb-4 text-foreground">Clean Ingredients</h3>
          <p className="text-muted-foreground leading-relaxed text-sm">Every product is crafted with natural ingredients you can actually read. No harsh chemicals — just pure, intentional formulations your skin will love.</p>
        </FadeIn>
        
        <FadeIn delay={0.2} className="text-center px-4">
          <div className="w-16 h-16 mx-auto bg-secondary rounded-full flex items-center justify-center mb-6 text-primary border border-border">
            <Sparkles size={28} strokeWidth={1.5} />
          </div>
          <h3 className="font-serif text-2xl mb-4 text-foreground">Truly Small Batch</h3>
          <p className="text-muted-foreground leading-relaxed text-sm">Unlike big brands, every bar and candle is made by hand right here in Nashville. You're getting something crafted with real care — not pulled off a factory line.</p>
        </FadeIn>

        <FadeIn delay={0.3} className="text-center px-4">
          <div className="w-16 h-16 mx-auto bg-secondary rounded-full flex items-center justify-center mb-6 text-primary border border-border">
            <Gift size={28} strokeWidth={1.5} />
          </div>
          <h3 className="font-serif text-2xl mb-4 text-foreground">The Perfect Gift</h3>
          <p className="text-muted-foreground leading-relaxed text-sm">From birthdays to bridal showers to wedding favors, Golden Lather & Light solves the thoughtful gift problem — beautifully wrapped and locally made.</p>
        </FadeIn>
      </div>
    </section>
  );
}

function Products({ products }: { products: any[] }) {
  const { toast } = useToast();
  const displayProducts = products.length > 0 ? products : fallbackProducts;

  return (
    <section className="py-24 px-6 bg-secondary/50" id="products">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <div className="text-[10px] font-semibold tracking-[0.25em] uppercase text-primary mb-4">Our Collection</div>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">Handcrafted with <em className="text-primary font-light italic">love</em><br/>in every batch</h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayProducts.map((product, i) => (
            <FadeIn key={product.id} delay={i * 0.1} className="group hover-trigger">
              <div className="bg-card border border-border overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
                <div className="aspect-[4/5] bg-secondary flex items-center justify-center text-6xl relative overflow-hidden">
                  <span className="opacity-80 transition-transform duration-700 group-hover:scale-110">{product.imagePlaceholder}</span>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button 
                      onClick={() => toast({ title: "Added to cart", description: `${product.name} has been added.` })}
                      className="hover-target bg-white text-foreground px-8 py-3 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-primary hover:text-white transition-colors"
                    >
                      Quick Add
                    </button>
                  </div>
                </div>
                <div className="p-8 text-center bg-card relative z-10">
                  <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-3">{product.category}</div>
                  <h3 className="font-serif text-2xl text-foreground mb-3">{product.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-2">{product.description}</p>
                  <div className="text-primary font-medium tracking-wider">From {product.price}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience({ experiences }: { experiences: any[] }) {
  const displayExperiences = experiences.length > 0 ? experiences : fallbackExperiences;

  return (
    <section className="py-24 px-6 bg-background" id="experience">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <FadeIn direction="right">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-px bg-primary"></span>
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-primary">More Than Products</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
            Book a <em className="text-primary italic font-light">Making</em><br/>Party Experience
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
            Gather your friends, family, or colleagues for a hands-on soap and candle making experience. Hosted at your location or ours — everyone takes home what they make.
          </p>
          <a href="#contact" className="inline-block border-2 border-primary text-primary px-10 py-4 text-sm font-medium tracking-[0.2em] uppercase hover:bg-primary hover:text-white transition-all">
            Book Your Party
          </a>
        </FadeIn>

        <div className="flex flex-col gap-4">
          {displayExperiences.map((exp, i) => (
            <FadeIn key={exp.id} delay={i * 0.15} direction="left">
              <div className="bg-card p-8 border-l-4 border-primary hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                <h3 className="font-serif text-2xl text-foreground mb-3">{exp.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                <div className="text-sm font-semibold text-primary tracking-wide">{exp.price}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gifts({ gifts }: { gifts: any[] }) {
  const displayGifts = gifts.length > 0 ? gifts : fallbackGifts;

  return (
    <section className="py-24 px-6 bg-secondary/30" id="gifts">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <div className="text-[10px] font-semibold tracking-[0.25em] uppercase text-primary mb-4">Curated Gift Sets</div>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">The gift they'll <em className="text-primary font-light italic">actually</em><br/>remember</h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayGifts.map((gift, i) => (
            <FadeIn key={gift.id} delay={i * 0.1}>
              <div className={`relative h-full border ${gift.featured ? 'bg-primary border-primary text-white shadow-2xl shadow-primary/20 -translate-y-2' : 'bg-card border-border hover:border-primary hover:-translate-y-1'} p-10 text-center transition-all duration-300 flex flex-col items-center justify-between`}>
                {gift.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-primary px-4 py-1 text-[10px] font-bold tracking-[0.2em] uppercase shadow-sm">
                    Most Popular
                  </div>
                )}
                
                <div>
                  <div className="text-4xl mb-6">{gift.imagePlaceholder}</div>
                  <h3 className={`font-serif text-3xl mb-4 ${gift.featured ? 'text-white' : 'text-foreground'}`}>{gift.name}</h3>
                  <div className={`text-sm leading-loose whitespace-pre-line mb-8 ${gift.featured ? 'text-white/90' : 'text-muted-foreground'}`}>
                    {gift.giftIncludes}
                  </div>
                </div>

                <div className="w-full">
                  <div className={`font-serif text-3xl font-light mb-8 ${gift.featured ? 'text-white' : 'text-primary'}`}>{gift.price}</div>
                  <a href="#contact" className={`block w-full border ${gift.featured ? 'border-white text-white hover:bg-white hover:text-primary' : 'border-primary text-primary hover:bg-primary hover:text-white'} px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase transition-all`}>
                    Order Now
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="py-24 px-6 bg-background" id="story">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <FadeIn direction="right" className="relative hidden lg:block">
          {/* pouring wax artisanal candle making */}
          <div className="w-4/5 aspect-[4/5] bg-secondary border border-border relative z-10">
            <img src="https://images.unsplash.com/photo-1602928321679-560bb453f190?q=80&w=800&auto=format&fit=crop" alt="Pouring candles" className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply" />
          </div>
          <div className="absolute -bottom-10 right-0 w-3/5 aspect-square bg-white border-2 border-primary/20 z-20 flex flex-col items-center justify-center p-8 text-center shadow-2xl">
            <div className="font-serif text-6xl text-primary font-light mb-2">100%</div>
            <div className="text-[10px] tracking-[0.25em] uppercase font-semibold text-foreground leading-relaxed">Nashville<br/>Made</div>
          </div>
        </FadeIn>

        <FadeIn direction="left">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-px bg-primary"></span>
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-primary">Our Story</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8 leading-tight">
            Born from passion,<br/><em className="text-primary italic font-light">built with purpose</em>
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed text-sm md:text-base">
            <p>Hi, I'm Aamira Fetuga — a Nashville local, maker, and the heart behind Golden Lather & Light Co. I started making soaps and candles because everyday products should feel special, smell incredible, and be made with ingredients you can trust.</p>
            <p>My background in customer service, cooking, and organization means every single order gets the same care and attention. When friends and family started requesting my products by name, I knew this was more than a hobby.</p>
          </div>
          
          <div className="w-16 h-px bg-primary/40 my-10"></div>
          
          <div className="grid grid-cols-3 gap-6">
            <div>
              <div className="font-serif text-4xl text-primary font-light mb-2">100%</div>
              <div className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground font-semibold">Natural<br/>Ingredients</div>
            </div>
            <div>
              <div className="font-serif text-4xl text-primary font-light mb-2">Small</div>
              <div className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground font-semibold">Batch<br/>Production</div>
            </div>
            <div>
              <div className="font-serif text-4xl text-primary font-light mb-2">Local</div>
              <div className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground font-semibold">Nashville<br/>Proud</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    { quote: "I ordered a gift set for my friend's birthday and she absolutely loved it. The candle smelled amazing and the soap felt so luxurious. Will definitely be ordering again!", author: "Jessica M.", location: "East Nashville" },
    { quote: "We used Golden Lather & Light for our wedding favors and every single guest raved about them. Aamira was so easy to work with and the products were just beautiful.", author: "Brianna & Marcus T.", location: "12 South, Nashville" },
    { quote: "We booked a candle making party for our team and it was the best work event we've ever done. So fun, so creative — and we all went home with candles we made ourselves!", author: "Tamara W.", location: "Germantown, Nashville" }
  ];

  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <div className="text-[10px] font-semibold tracking-[0.25em] uppercase text-primary mb-4">What People Are Saying</div>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">Loved by Nashville<br/><em className="text-primary font-light italic">gift-givers</em></h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-card p-10 border-t-4 border-primary hover:-translate-y-2 transition-all duration-300 shadow-lg shadow-black/5 h-full flex flex-col">
                <div className="flex text-primary mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="font-serif text-xl italic text-foreground leading-relaxed mb-8 flex-1">"{t.quote}"</p>
                <div>
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-1">{t.author}</div>
                  <div className="text-sm text-muted-foreground">{t.location}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  const { mutate, isPending } = useSubscribe();
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof insertSubscriberSchema>>({
    resolver: zodResolver(insertSubscriberSchema),
    defaultValues: { email: "" }
  });

  function onSubmit(data: z.infer<typeof insertSubscriberSchema>) {
    mutate(data, {
      onSuccess: () => {
        toast({
          title: "Welcome to the family!",
          description: "You've successfully subscribed to our newsletter.",
          action: <CheckCircle className="text-green-500" />
        });
        form.reset();
      },
      onError: (err) => {
        toast({
          title: "Subscription failed",
          description: err.message || "Please try again later.",
          variant: "destructive"
        });
      }
    });
  }

  return (
    <section className="py-32 px-6 bg-card relative overflow-hidden" id="contact">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-border rounded-full pointer-events-none opacity-50" />
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <FadeIn>
          <div className="text-[10px] font-semibold tracking-[0.25em] uppercase text-primary mb-6">Stay in the Loop</div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
            Get <em className="text-primary italic font-light">first access</em> to new<br/>scents & seasonal collections
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-12 max-w-lg mx-auto">
            Join the Golden Lather & Light community for new arrivals, exclusive offers, farmers market dates, and Nashville maker news.
          </p>

          <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md mx-auto relative shadow-xl shadow-black/5 flex flex-col sm:flex-row">
            <input 
              {...form.register("email")}
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-6 py-4 border border-border sm:border-r-0 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm font-light bg-white"
              disabled={isPending}
            />
            <button 
              type="submit" 
              disabled={isPending}
              className="bg-primary text-white px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-primary/90 transition-colors disabled:opacity-70 flex items-center justify-center whitespace-nowrap"
            >
              {isPending ? "Joining..." : "Subscribe"}
            </button>
          </form>
          {form.formState.errors.email && (
            <p className="text-destructive text-xs mt-3">{form.formState.errors.email.message}</p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}

export default function Home() {
  const { data: products = [], isLoading } = useProducts();
  
  // Filter data (if DB is populated, else empty arrays trigger fallback usage inside components)
  const soapCandleProducts = products.filter((p: any) => p.type === 'product');
  const experiences = products.filter((p: any) => p.type === 'experience');
  const gifts = products.filter((p: any) => p.type === 'gift');

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <Hero />
      <Marquee />
      <Values />
      <Products products={soapCandleProducts} />
      <Experience experiences={experiences} />
      <Gifts gifts={gifts} />
      <Story />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}
