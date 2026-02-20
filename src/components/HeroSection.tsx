import heroImage from "@/assets/hero-construction.jpg";

const HeroSection = () => {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroImage}
        alt="Construction site with cranes and workers"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="relative z-10 container mx-auto px-4 text-center py-32">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent text-sm font-semibold mb-6 animate-fade-in">
            Trusted by 500+ Contractors
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up">
            Reliable Construction Materials{" "}
            <span className="text-accent">Delivered to Your Site</span>
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/75 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Order M-Sand, Jelly, WMM, GSB and more in just a few clicks. Quality-tested materials at competitive prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <button
              onClick={scrollToBooking}
              className="px-8 py-4 rounded-lg bg-accent text-accent-foreground font-display font-bold text-lg hover:bg-construction-yellow-dark transition-colors shadow-industrial"
            >
              Book Materials Now
            </button>
            <a
              href="https://wa.me/919999999999?text=Hi%20SandHub%2C%20I%20need%20construction%20materials"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-display font-semibold text-lg hover:border-accent hover:text-accent transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
