import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-gradient backdrop-blur-sm border-b border-navy-light/30">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-accent flex items-center justify-center">
            <span className="font-display font-bold text-accent-foreground text-sm">S</span>
          </div>
          <span className="font-display font-bold text-lg text-primary-foreground">
            Sand<span className="text-accent">Hub</span>.in
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            ["Materials", "materials"],
            ["Vehicles", "vehicles"],
            ["Why Us", "why-us"],
            ["Book Now", "booking"],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors"
            >
              {label}
            </button>
          ))}
          <a href="tel:+919483078687">
            <Button size="sm" className="bg-accent text-accent-foreground hover:bg-construction-yellow-dark font-semibold gap-2">
              <Phone className="w-4 h-4" />
              Call Now
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-primary-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-navy-dark border-t border-navy-light/20 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {[
              ["Materials", "materials"],
              ["Vehicles", "vehicles"],
              ["Why Us", "why-us"],
              ["Book Now", "booking"],
            ].map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-left text-sm font-medium text-primary-foreground/80 hover:text-accent py-2 transition-colors"
              >
                {label}
              </button>
            ))}
            <a href="tel:+919483078687">
              <Button className="w-full bg-accent text-accent-foreground hover:bg-construction-yellow-dark font-semibold gap-2 mt-2">
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
