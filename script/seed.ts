import { db } from "../server/db";
import { products } from "../shared/schema";
import { count } from "drizzle-orm";

async function main() {
  const [{ value }] = await db.select({ value: count() }).from(products);
  if (value > 0) {
    console.log("Database already seeded");
    process.exit(0);
  }

  await db.insert(products).values([
    {
      name: "Signature Bar Soap",
      description: "Melt-and-pour glycerin base with custom scents and natural colorants. Gentle on all skin types.",
      price: "$8.00",
      category: "Natural Soap",
      imagePlaceholder: "🧼",
      type: "product",
    },
    {
      name: "Soy Wax Candle",
      description: "Clean-burning soy wax in custom fragrances. Sets the perfect mood for any space in your home.",
      price: "$12.00",
      category: "Soy Candle",
      imagePlaceholder: "🕯️",
      type: "product",
    },
    {
      name: "Specialty Soap Bar",
      description: "Elevated formulations with premium botanicals and unique scent blends. A treat for the senses.",
      price: "$10.00",
      category: "Premium Bar",
      imagePlaceholder: "✨",
      type: "product",
    },
    {
      name: "Soap Making Party",
      description: "A guided 2-hour experience where guests craft their own custom soap bars to take home. Minimum 6 guests.",
      price: "$40 – $50 per person",
      category: "Experience",
      imagePlaceholder: "🧼",
      type: "experience",
    },
    {
      name: "Candle Making Party",
      description: "Pour, scent, and personalize your own soy candles in a fun, fragrant 2-hour session perfect for any occasion.",
      price: "$40 – $50 per person",
      category: "Experience",
      imagePlaceholder: "🕯️",
      type: "experience",
    },
    {
      name: "Custom Event Favors",
      description: "Weddings, bridal showers, corporate events — fully customized soaps and candles as memorable favors.",
      price: "Custom Pricing",
      category: "Experience",
      imagePlaceholder: "🎉",
      type: "experience",
    },
    {
      name: "Sweet Start",
      description: "1 Signature Soap Bar + 1 Small Soy Candle (4–6 oz) + Gift Wrapping",
      price: "$22 – $25",
      category: "Gift Set",
      imagePlaceholder: "🌸",
      type: "gift",
    },
    {
      name: "Golden Set",
      description: "2 Soap Bars + 1 Medium Candle (8–10 oz) + Curated Gift Box",
      price: "$35 – $40",
      category: "Gift Set",
      imagePlaceholder: "✨",
      type: "gift",
      featured: true,
      giftIncludes: "2 Soap Bars + 1 Medium Candle (8–10 oz) + Curated Gift Box",
    },
    {
      name: "Luxury Bundle",
      description: "3 Soap Bars + 2 Soy Candles + Extras & Premium Box",
      price: "$55 – $65",
      category: "Gift Set",
      imagePlaceholder: "👑",
      type: "gift",
      giftIncludes: "3 Soap Bars + 2 Soy Candles + Extras & Premium Box",
    }
  ]);
  console.log("Seeded database");
  process.exit(0);
}
main().catch(console.error);
