import { FadeIn } from "../ui/fade-in";
import { useProducts } from "@/hooks/use-products";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";

export function Products() {
  const { data: products, isLoading } = useProducts();
  const { toast } = useToast();
  
  const displayProducts = products?.filter(p => p.type === 'product') || [];

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart",
      description: "This item has been added to your bag.",
    });
  };

  return (
    <section id="products" className="py-24 px-8 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 text-xs tracking-[0.35em] uppercase text-primary mb-6">
            <span className="w-8 h-[1px] bg-primary/50"></span>
            Our Collection
            <span className="w-8 h-[1px] bg-primary/50"></span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
            Handcrafted with <em className="text-primary italic">love</em><br />in every batch
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {isLoading ? (
            // Loading Skeletons
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex flex-col">
                <Skeleton className="w-full aspect-[4/5] bg-muted mb-6" />
                <Skeleton className="h-4 w-24 mb-3" />
                <Skeleton className="h-8 w-48 mb-4" />
                <Skeleton className="h-16 w-full mb-6" />
                <Skeleton className="h-6 w-20" />
              </div>
            ))
          ) : displayProducts.length > 0 ? (
            displayProducts.map((product, i) => (
              <FadeIn key={product.id} delay={i * 0.15} className="group flex flex-col">
                <div className="relative overflow-hidden aspect-[4/5] bg-muted mb-6">
                  {/* artisanal product placeholder image */}
                  <img 
                    src={product.imagePlaceholder || "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&q=80&w=800"} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button 
                      onClick={handleAddToCart}
                      className="bg-white text-foreground px-8 py-3 text-xs font-medium tracking-widest uppercase hover:bg-primary hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">{product.category}</div>
                <h3 className="font-serif text-2xl text-foreground mb-3">{product.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">{product.description}</p>
                <div className="font-serif text-xl text-primary">{product.price}</div>
              </FadeIn>
            ))
          ) : (
            // Static Fallback if DB is empty
            <>
              {[
                { name: "Signature Bar Soap", cat: "Natural Soap", price: "From $8.00", desc: "Melt-and-pour glycerin base with custom scents and natural colorants. Gentle on all skin types.", img: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&q=80&w=800" },
                { name: "Soy Wax Candle", cat: "Soy Candle", price: "From $12.00", desc: "Clean-burning soy wax in custom fragrances. Sets the perfect mood for any space in your home.", img: "https://images.unsplash.com/photo-1596433809252-260c27459d1f?auto=format&fit=crop&q=80&w=800" },
                { name: "Specialty Soap Bar", cat: "Premium Bar", price: "From $10.00", desc: "Elevated formulations with premium botanicals and unique scent blends. A treat for the senses.", img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=800" }
              ].map((fallback, i) => (
                <FadeIn key={i} delay={i * 0.15} className="group flex flex-col">
                  <div className="relative overflow-hidden aspect-[4/5] bg-muted mb-6">
                    <img src={fallback.img} alt={fallback.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button onClick={handleAddToCart} className="bg-white text-foreground px-8 py-3 text-xs font-medium tracking-widest uppercase hover:bg-primary hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300">Add to Cart</button>
                    </div>
                  </div>
                  <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">{fallback.cat}</div>
                  <h3 className="font-serif text-2xl text-foreground mb-3">{fallback.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">{fallback.desc}</p>
                  <div className="font-serif text-xl text-primary">{fallback.price}</div>
                </FadeIn>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
