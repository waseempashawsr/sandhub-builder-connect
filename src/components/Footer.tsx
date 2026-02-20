import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-gradient pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-accent flex items-center justify-center">
                <span className="font-display font-bold text-accent-foreground text-sm">S</span>
              </div>
              <span className="font-display font-bold text-lg text-primary-foreground">
                Sand<span className="text-accent">Hub</span>.in
              </span>
            </div>
            <p className="text-primary-foreground/55 text-sm leading-relaxed">
              Your trusted partner for quality construction materials. Serving builders, contractors, and construction companies across the region.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["Materials", "Vehicles", "Why Choose Us", "Book Now"].map((l) => (
                <li key={l}>
                  <button
                    onClick={() => {
                      const id = l === "Why Choose Us" ? "why-us" : l === "Book Now" ? "booking" : l.toLowerCase();
                      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-primary-foreground/55 hover:text-accent transition-colors"
                  >
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/55">
              <li>Chennai & Suburbs</li>
              <li>Kanchipuram</li>
              <li>Tiruvallur</li>
              <li>Chengalpattu</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-primary-foreground/55">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="tel:+919999999999" className="hover:text-accent transition-colors">+91 99999 99999</a>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/55">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="mailto:info@sandhub.in" className="hover:text-accent transition-colors">info@sandhub.in</a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/55">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>Chennai, Tamil Nadu, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-light/30 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/40 text-xs">© 2026 SandHub.in. All rights reserved.</p>
          <p className="text-primary-foreground/40 text-xs">Built for builders, by builders.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
