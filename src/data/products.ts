import goldenMistPair from "@/assets/products/golden-mist-pair.jpg";
import milkDipCup from "@/assets/products/milk-dip-cup.jpg";
import harvestMoonCup from "@/assets/products/harvest-moon-cup.jpg";
import springBlade from "@/assets/products/spring-blade.jpg";
import classicSet from "@/assets/products/classic-set.jpg";
import countryFeastSet from "@/assets/products/country-feast-set.jpg";
import earthSkyPlanter from "@/assets/products/earth-sky-planter.jpg";
import goldenBlushCup from "@/assets/products/golden-blush-cup.jpg";
import saltSpout from "@/assets/products/salt-spout.jpg";

export interface Product {
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  badge?: "sale" | "sold-out";
  availability?: string;
}

export const products: Product[] = [
  {
    slug: "spring-blade",
    name: "Kofta i mossstickning",
    price: 50,
    image: springBlade,
    description: "Handstickad av lokalt producerad ull i ett texturrikt mossstickningsmönster. Den avslappnade silhuetten faller naturligt, med handsnidade träknappar och ribbade muddar för en förfinad finish.",
  },
  {
    slug: "classic-set",
    name: "Kabelstickad tröja",
    price: 50,
    image: classicSet,
    description: "En tidlös kabelstickad pullover av ofärgad ull från lantraser. Varje vridning och fläta arbetas för hand och skapar en rik yttextur som mjuknar vackert med tiden.",
  },
  {
    slug: "country-feast-set",
    name: "Halsdukset i merinoull",
    price: 50,
    image: countryFeastSet,
    description: "Ett samstämt set med två generöst tilltagna halsdukar i kompletterande jordtoner. Stickade i extrafin merino för mjuk känsla, med handtvinnade fransar.",
  },
  {
    slug: "earth-sky-planter",
    name: "Mössa i alpackamix",
    price: 40,
    originalPrice: 50,
    image: earthSkyPlanter,
    badge: "sale",
    description: "En skön ribbstickad mössa i en blandning av babyalpacka och ull. Lätt men varm, med mjukt fallande kulle och vikt kant som passar alla huvudstorlekar.",
  },
  {
    slug: "golden-blush-cup",
    name: "Ribbstickad ullväst",
    price: 50,
    image: goldenBlushCup,
    description: "Ett mångsidigt lagerplagg i djup ribbstickning av lammull i mellanvikt. V-ringningen och de rena ärmhålen gör den perfekt över en skjorta eller ensam under varmare månader.",
  },
  {
    slug: "harvest-moon-cup",
    name: "Grovstickad pullover",
    price: 50,
    image: harvestMoonCup,
    availability: "Endast 4 kvar",
    description: "Vårt kraftigaste plagg — en grovstickad pullover i ett tydligt fiskbensmönster. Gjord av handfärgad ull i vår signaturfärg rost, med sänkta axlar och avslappnad passform.",
  },
  {
    slug: "milk-dip-cup",
    name: "Kashmirsjal",
    price: 50,
    image: milkDipCup,
    description: "En oversize sjal stickad i ren mongolisk kashmir i fin slätstickning. Avslutad med en diskret franskant — lika mjuk som den är elegant.",
  },
  {
    slug: "salt-spout",
    name: "Traditionella vantar",
    price: 50,
    image: saltSpout,
    badge: "sold-out",
    description: "Traditionella tvåändsmönstrade vantar inspirerade av nordisk stickningstradition. Stickade i tålig shetlandsull i naturliga, ofärgade nyanser — ett plagg som berättar en historia.",
  },
  {
    slug: "golden-mist-pair",
    name: "Strumpor i lammull, par",
    price: 50,
    image: goldenMistPair,
    description: "Ett par vadhöga strumpor stickade i borstad lammull med förstärkta hälar och tår. Det ribbade skaftet ger en följsam passform och den mjuka fibern håller fötterna varma hela dagen.",
  },
];

export const featuredProducts = [
  products.find(p => p.slug === "golden-mist-pair")!,
  products.find(p => p.slug === "milk-dip-cup")!,
  products.find(p => p.slug === "harvest-moon-cup")!,
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getRelatedProducts(slug: string, count = 3): Product[] {
  return products.filter(p => p.slug !== slug && p.badge !== "sold-out").slice(0, count);
}
