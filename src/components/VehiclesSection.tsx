import { Truck } from "lucide-react";

const vehicles = [
  { name: "709", capacity: "~4 Tons", desc: "Small loads, tight access" },
  { name: "6 Wheel", capacity: "~10 Tons", desc: "Medium construction loads" },
  { name: "10 Wheel", capacity: "~16 Tons", desc: "Heavy bulk supply" },
  { name: "12 Wheel", capacity: "~20 Tons", desc: "Maximum capacity loads" },
];

const VehiclesSection = () => {
  return (
    <section id="vehicles" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Fleet Options</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2">
            Vehicle Options
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Choose the right vehicle size for your project needs.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {vehicles.map((v) => (
            <div
              key={v.name}
              className="bg-card rounded-xl p-6 shadow-industrial hover:shadow-card-hover transition-all duration-300 border border-border hover:border-accent/40 text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-navy/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/15 transition-colors">
                <Truck className="w-8 h-8 text-navy group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground">{v.name}</h3>
              <p className="text-accent font-semibold text-sm mt-1">{v.capacity}</p>
              <p className="text-muted-foreground text-xs mt-2">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehiclesSection;
