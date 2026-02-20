import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, Truck, Package, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const materials = [
  "M Sand", "P Sand", "Dust", "20mm Jelly", "12mm Jelly",
  "WMM", "GSB", "C Sand", "6mm Jelly", "VSI 20mm",
];

const vehicles = [
  { name: "709", capacity: "~4 Tons" },
  { name: "6 Wheel", capacity: "~10 Tons" },
  { name: "10 Wheel", capacity: "~16 Tons" },
  { name: "12 Wheel", capacity: "~20 Tons" },
];

const steps = [
  { label: "Material", icon: Package },
  { label: "Vehicle", icon: Truck },
  { label: "Quantity", icon: Package },
  { label: "Delivery", icon: MapPin },
];

const BookingForm = () => {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  const [form, setForm] = useState({
    material: "",
    vehicle: "",
    quantity: "",
    name: "",
    phone: "",
    address: "",
    date: "",
    instructions: "",
  });

  const update = (key: string, value: string) => setForm((p) => ({ ...p, [key]: value }));

  const canNext = () => {
    if (step === 0) return !!form.material;
    if (step === 1) return !!form.vehicle;
    if (step === 2) return !!form.quantity;
    if (step === 3) return form.name && form.phone && form.address && form.date;
    return false;
  };

  const handleSubmit = () => {
    // Build WhatsApp message
    const msg = `New Booking from SandHub.in%0A%0AMaterial: ${form.material}%0AVehicle: ${form.vehicle}%0AQuantity: ${form.quantity} Tons%0AName: ${form.name}%0APhone: ${form.phone}%0AAddress: ${form.address}%0ADate: ${form.date}%0AInstructions: ${form.instructions || "None"}`;
    window.open(`https://wa.me/919483078687?text=${msg}`, "_blank");
    setSubmitted(true);
    toast({
      title: "Booking Submitted!",
      description: "We'll confirm your order shortly via WhatsApp.",
    });
  };

  if (submitted) {
    return (
      <section id="booking" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto text-center bg-card rounded-2xl p-12 shadow-industrial border border-border">
            <div className="w-20 h-20 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-accent" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-3">Booking Confirmed!</h2>
            <p className="text-muted-foreground mb-6">Your order has been sent via WhatsApp. Our team will reach out shortly.</p>
            <Button
              onClick={() => { setSubmitted(false); setStep(0); setForm({ material: "", vehicle: "", quantity: "", name: "", phone: "", address: "", date: "", instructions: "" }); }}
              className="bg-accent text-accent-foreground hover:bg-construction-yellow-dark font-semibold"
            >
              Place Another Order
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Quick Booking</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2">
            Book Materials in 60 Seconds
          </h2>
        </div>

        <div className="max-w-2xl mx-auto bg-card rounded-2xl shadow-industrial border border-border overflow-hidden">
          {/* Step indicator */}
          <div className="flex border-b border-border">
            {steps.map((s, i) => (
              <button
                key={s.label}
                onClick={() => i < step && setStep(i)}
                className={`flex-1 flex items-center justify-center gap-2 py-4 text-xs sm:text-sm font-semibold transition-colors ${
                  i === step
                    ? "bg-accent/10 text-accent border-b-2 border-accent"
                    : i < step
                    ? "text-accent/70 cursor-pointer hover:bg-accent/5"
                    : "text-muted-foreground"
                }`}
              >
                <s.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{s.label}</span>
              </button>
            ))}
          </div>

          <div className="p-6 sm:p-8 min-h-[300px] flex flex-col">
            {/* Step 0: Material */}
            {step === 0 && (
              <div className="flex-1">
                <Label className="text-foreground font-semibold mb-3 block">Select Material</Label>
                <Select value={form.material} onValueChange={(v) => update("material", v)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose material..." />
                  </SelectTrigger>
                  <SelectContent>
                    {materials.map((m) => (
                      <SelectItem key={m} value={m}>{m}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Step 1: Vehicle */}
            {step === 1 && (
              <div className="flex-1">
                <Label className="text-foreground font-semibold mb-3 block">Select Vehicle Type</Label>
                <div className="grid grid-cols-2 gap-3">
                  {vehicles.map((v) => (
                    <button
                      key={v.name}
                      onClick={() => update("vehicle", v.name)}
                      className={`rounded-xl p-4 border-2 transition-all text-center ${
                        form.vehicle === v.name
                          ? "border-accent bg-accent/10 border-accent-glow"
                          : "border-border hover:border-accent/30"
                      }`}
                    >
                      <Truck className={`w-8 h-8 mx-auto mb-2 ${form.vehicle === v.name ? "text-accent" : "text-muted-foreground"}`} />
                      <p className="font-display font-bold text-foreground">{v.name}</p>
                      <p className="text-xs text-muted-foreground">{v.capacity}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Quantity */}
            {step === 2 && (
              <div className="flex-1">
                <Label className="text-foreground font-semibold mb-3 block">Quantity (in Tons)</Label>
                <Input
                  type="number"
                  min="1"
                  placeholder="Enter quantity in tons"
                  value={form.quantity}
                  onChange={(e) => update("quantity", e.target.value)}
                  className="text-lg"
                />
                {form.quantity && (
                  <p className="text-muted-foreground text-sm mt-3">
                    Estimated: <span className="font-semibold text-foreground">{form.quantity} Tons</span> of{" "}
                    <span className="text-accent font-semibold">{form.material}</span> via{" "}
                    <span className="font-semibold text-foreground">{form.vehicle}</span>
                  </p>
                )}
              </div>
            )}

            {/* Step 3: Delivery */}
            {step === 3 && (
              <div className="flex-1 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-foreground font-semibold mb-1.5 block">Your Name</Label>
                    <Input
                      placeholder="Full name"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label className="text-foreground font-semibold mb-1.5 block">Phone Number</Label>
                    <Input
                      type="tel"
                      placeholder="10-digit mobile"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <Label className="text-foreground font-semibold mb-1.5 block">Delivery Address</Label>
                  <Textarea
                    placeholder="Full delivery address"
                    value={form.address}
                    onChange={(e) => update("address", e.target.value)}
                    rows={2}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-foreground font-semibold mb-1.5 block">Delivery Date</Label>
                    <Input
                      type="date"
                      value={form.date}
                      onChange={(e) => update("date", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label className="text-foreground font-semibold mb-1.5 block">Special Instructions</Label>
                    <Input
                      placeholder="Optional notes"
                      value={form.instructions}
                      onChange={(e) => update("instructions", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8 pt-4 border-t border-border">
              <Button
                variant="outline"
                onClick={() => setStep((s) => s - 1)}
                disabled={step === 0}
              >
                Back
              </Button>
              {step < 3 ? (
                <Button
                  onClick={() => setStep((s) => s + 1)}
                  disabled={!canNext()}
                  className="bg-accent text-accent-foreground hover:bg-construction-yellow-dark font-semibold"
                >
                  Next
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!canNext()}
                  className="bg-accent text-accent-foreground hover:bg-construction-yellow-dark font-semibold gap-2"
                >
                  <Send className="w-4 h-4" />
                  Confirm Booking
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
