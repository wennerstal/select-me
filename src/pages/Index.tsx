import { Link } from "react-router-dom";
import heroBgAsset from "@/assets/hero-image.jpg.asset.json";
const heroBg = heroBgAsset.url;
import coreCollection from "@/assets/collections/core-collection.jpg";
import setsAndPairs from "@/assets/collections/sets-and-pairs.jpg";
import NewsletterSignup from "@/components/NewsletterSignup";
import { featuredProducts } from "@/data/products";

export default function Index() {
  return (
    <>
      {/* Hero — full bleed, header overlays this */}
      <section className="w-full h-[70vh] relative -mt-[72px]">
        <img src={heroBg} alt="Handstickat hantverk" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[hsl(30_30%_22%/0.3)]" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-16 md:pb-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-wide max-w-7xl mx-auto leading-none">
            Autumn Y26
          </h1>
          <p className="mt-4 text-sm md:text-base text-white/70 tracking-wide max-w-7xl mx-auto">
            Höstens kollektion av utvalda plagg.
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-6 pt-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {featuredProducts.map(product => (
            <Link
              key={product.slug}
              to={`/product/${product.slug}`}
              className="group block"
            >
              <div className="bg-[hsl(var(--warm-bg))] aspect-square overflow-hidden mb-4 rounded-[15px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <h3 className="text-base font-light text-foreground mb-1">{product.name}</h3>
              <p className="text-sm text-muted-foreground">${product.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Collections — tight gap, polished overlays */}
      <section className="max-w-7xl mx-auto px-6 py-12 hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <Link to="/collections/core" className="relative overflow-hidden group block">
            <img
              src={coreCollection}
              alt="Baskollektionen"
              className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500 flex flex-col justify-between p-8">
              <span className="text-sm uppercase tracking-widest text-white/80">Utforska</span>
              <h3 className="text-2xl md:text-3xl font-light text-white">Baskollektionen</h3>
            </div>
          </Link>
          <Link to="/collections/sets-and-pairs" className="relative overflow-hidden group block">
            <img
              src={setsAndPairs}
              alt="Set och par"
              className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500 flex flex-col justify-between p-8">
              <span className="text-sm uppercase tracking-widest text-white/80">Börja om</span>
              <h3 className="text-2xl md:text-3xl font-light text-white">Set och par</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <div className="mt-12 hidden">
        <NewsletterSignup />
      </div>

    </>
  );
}
