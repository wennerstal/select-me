import { Link, useLocation } from "react-router-dom";
import { Instagram } from "lucide-react";

export default function Footer() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <footer className="bg-background py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12">
          <div>
            <h3 className="text-2xl font-normal tracking-wide text-foreground mb-3">select me.</h3>
            <div className="flex gap-4 mt-6">

              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="w-[18px] h-[18px] text-muted-foreground hover:text-foreground transition-colors" />
              </a>
            </div>
          </div>
          {!isHome && (
            <>
              <div className="flex flex-col gap-3">
                <Link to="/shop" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Butik</Link>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Om oss</Link>
              </div>
              <div className="flex flex-col gap-3">
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Kontakt</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}
