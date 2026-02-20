import { Clock, ShieldCheck, BadgeDollarSign, PackageCheck, Users } from "lucide-react";

const reasons = [
  { icon: Clock, title: "On-Time Delivery", desc: "We deliver on schedule, every time. Your project timeline matters." },
  { icon: ShieldCheck, title: "Quality Tested", desc: "All materials undergo rigorous quality checks before dispatch." },
  { icon: BadgeDollarSign, title: "Competitive Pricing", desc: "Best rates in the market without compromising on quality." },
  { icon: PackageCheck, title: "Bulk Supply", desc: "Large-scale orders fulfilled with ease for big projects." },
  { icon: Users, title: "Trusted by Contractors", desc: "500+ contractors rely on SandHub for their material needs." },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 bg-navy-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Promise</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mt-2">
            Why Choose SandHub
          </h2>
          <p className="text-primary-foreground/60 mt-3 max-w-xl mx-auto">
            Built on trust, quality, and reliability — the foundations of every great project.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="rounded-xl p-6 bg-navy-light/40 border border-navy-light/40 hover:border-accent/40 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-4">
                <r.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display font-bold text-primary-foreground text-sm mb-2">{r.title}</h3>
              <p className="text-primary-foreground/55 text-xs leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
