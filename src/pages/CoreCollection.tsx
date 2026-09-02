import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import coreCollectionImg from "@/assets/collections/core-collection.jpg";

const coreProducts = products.filter(p => 
  ["spring-blade", "classic-set", "harvest-moon-cup", "golden-blush-cup"].includes(p.slug)
);

export default function CoreCollection() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-[60vh]">
        <img src={coreCollectionImg} alt="Baskollektionen" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-sm uppercase tracking-widest mb-3">Utforska</p>
            <h1 className="text-4xl md:text-5xl font-light">Baskollektionen</h1>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
          Rotad i hantverk, gjord för att hålla.
        </h2>
        <p className="text-base leading-relaxed text-gray-700 mb-6">
          Baskollektionen är grunden i select me. — vardagsstickat format för stilla rutiner. Varje plagg är handstickat av ansvarsfullt framtagna naturgarner och avslutat i vår karakteristiska jordnära palett som enkelt låter sig lagras året om.
        </p>
        <p className="text-base leading-relaxed text-gray-700">
          Inspirerade av naturens texturer hyllar dessa plagg det ofullkomligas skönhet. Inga två plagg är identiska — de små variationerna i spänning, maska och färg är det som gör varje plagg omisskännligt handgjort.
        </p>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreProducts.map(product => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Processen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-lg font-light text-gray-900 mb-2">01 — Spinna</p>
              <p className="text-sm text-gray-600">Rå ull tvättas, kardas och spinns till garn för hand med traditionella sländor och spinnrockar.</p>
            </div>
            <div>
              <p className="text-lg font-light text-gray-900 mb-2">02 — Sticka</p>
              <p className="text-sm text-gray-600">Varje plagg stickas för hand, maska för maska, efter mönster som tagits fram internt för passform, fall och hållbarhet.</p>
            </div>
            <div>
              <p className="text-lg font-light text-gray-900 mb-2">03 — Färdigställa</p>
              <p className="text-sm text-gray-600">Färdiga plagg spänns varsamt, sys ihop och granskas — så att varje detalj håller vår standard innan de lämnar ateljén.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
