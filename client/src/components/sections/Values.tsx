import { FadeIn } from "../ui/fade-in";

export function Values() {
  const values = [
    {
      icon: "🌿",
      title: "Clean Ingredients",
      desc: "Every product is crafted with natural ingredients you can actually read. No harsh chemicals — just pure, intentional formulations your skin will love."
    },
    {
      icon: "✦",
      title: "Truly Small Batch",
      desc: "Unlike big brands, every bar and candle is made by hand right here in Nashville. You're getting something crafted with real care — not pulled off a factory line."
    },
    {
      icon: "🎁",
      title: "The Perfect Gift",
      desc: "From birthdays to bridal showers to wedding favors, Golden Lather & Light solves the thoughtful gift problem — beautifully wrapped and locally made."
    }
  ];

  return (
    <section className="bg-background py-24 px-8 md:px-12 lg:px-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-20">
        {values.map((val, i) => (
          <FadeIn key={i} delay={i * 0.2} className="flex flex-col items-center text-center">
            <div className="text-4xl mb-6">{val.icon}</div>
            <h3 className="font-serif text-2xl text-foreground mb-4">{val.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">{val.desc}</p>
            <div className="w-12 h-[1px] bg-primary/40 mt-auto"></div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
