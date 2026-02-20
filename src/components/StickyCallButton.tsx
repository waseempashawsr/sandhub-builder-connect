import { Phone } from "lucide-react";

const StickyCallButton = () => {
  return (
    <a
      href="tel:+919999999999"
      className="fixed bottom-6 right-6 z-50 md:hidden w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-card-hover hover:bg-construction-yellow-dark transition-colors"
      aria-label="Call SandHub"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
};

export default StickyCallButton;
