import { Mountain, Layers, Circle, Hexagon, Triangle, Box, Diamond, Gem, Pentagon } from "lucide-react";

const materials = [
  { name: "M Sand", desc: "Manufactured sand for construction", icon: Mountain },
  { name: "P Sand", desc: "Plastering grade sand", icon: Layers },
  { name: "Dust", desc: "Fine stone dust", icon: Circle },
  { name: "20mm Jelly", desc: "Coarse aggregate", icon: Hexagon },
  { name: "12mm Jelly", desc: "Medium aggregate", icon: Triangle },
  { name: "6mm Jelly", desc: "Fine aggregate", icon: Diamond },
  { name: "WMM", desc: "Wet Mix Macadam", icon: Box },
  { name: "GSB", desc: "Granular Sub Base", icon: Pentagon },
  { name: "C Sand", desc: "River / Natural sand", icon: Gem },
  { name: "VSI 20mm", desc: "VSI crushed aggregate", icon: Hexagon },
];

const MaterialsSection = () => {
  return (
    <section id="materials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Products</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2">
            Materials We Supply
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Premium quality construction materials sourced from trusted quarries and manufacturers.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {materials.map((m) => (
            <div
              key={m.name}
              className="group bg-card rounded-xl p-5 shadow-industrial hover:shadow-card-hover transition-all duration-300 border border-border hover:border-accent/40 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                <m.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display font-bold text-foreground text-sm">{m.name}</h3>
              <p className="text-muted-foreground text-xs mt-1">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;
