import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import setsImg from "@/assets/collections/sets-and-pairs.jpg";

const setsProducts = products.filter(p =>
  ["golden-mist-pair", "classic-set", "country-feast-set", "salt-spout"].includes(p.slug)
);

export default function SetsAndPairs() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-[60vh]">
        <img src={setsImg} alt="Set och par" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-sm uppercase tracking-widest mb-3">Börja om</p>
            <h1 className="text-4xl md:text-5xl font-light">Set och par</h1>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
          Bättre tillsammans.
        </h2>
        <p className="text-base leading-relaxed text-gray-700 mb-6">
          Våra utvalda set och par är formgivna för att samspela — matchade garner, kompletterande texturer och samstämda toner som skapar helhet i garderoben. Oavsett om du lagrar plagg för din egen del eller ger bort dem i present tar dessa kombinationer bort gissandet ur stylingen.
        </p>
        <p className="text-base leading-relaxed text-gray-700">
          Varje set är omsorgsfullt sammansatt för att balansera värme och form. Blanda inom ett set eller kombinera över kollektionerna — den jordnära paletten gör att allt fungerar vackert ihop.
        </p>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {setsProducts.map(product => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* Gift note */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-light text-gray-900 mb-4">Den perfekta presenten</h2>
          <p className="text-base text-gray-700 leading-relaxed mb-6">
            Varje set skickas i vår egen presentförpackning — inslaget i silkespapper och nedbäddat i en låda av återvunnet kraftpapper. Lägg till en handskriven hälsning i kassan för en personlig touch.
          </p>
          <p className="text-sm text-gray-500 uppercase tracking-wider">Fri frakt på alla set</p>
        </div>
      </section>
    </>
  );
}
