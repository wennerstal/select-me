import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import footerImageAsset from "@/assets/footer-image.jpg.asset.json";
const footerImage = footerImageAsset.url;

export default function Footer() {
  return (
    <footer className="bg-background py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12">
          <div>
            <h3 className="text-2xl font-light tracking-wide text-foreground mb-3">Select Me</h3>
            <p className="text-sm text-muted-foreground">Handstickat med omsorg.</p>
            <div className="flex gap-4 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="w-[18px] h-[18px] text-muted-foreground hover:text-foreground transition-colors" />
              </a>
            </div>
            <img
              src={footerImage}
              alt=""
              className="w-full max-w-[280px] aspect-[3/4] object-cover mt-8"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/shop" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Butik</Link>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Om oss</Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Kontakt</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
