import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MaterialsSection from "@/components/MaterialsSection";
import VehiclesSection from "@/components/VehiclesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MaterialsSection />
      <VehiclesSection />
      <WhyChooseUs />
      <BookingForm />
      <Footer />
      <StickyCallButton />
    </div>
  );
};

export default Index;
