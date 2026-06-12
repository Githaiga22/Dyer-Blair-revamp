import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InvestmentProducts from "@/components/InvestmentProducts";
import MarketIntelligence from "@/components/MarketIntelligence";
import WealthManagement from "@/components/WealthManagement";
import StatsSection from "@/components/StatsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import MobileAppSection from "@/components/MobileAppSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <InvestmentProducts />       {/* White */}
      <StatsSection />              {/* Dark navy — compact strip */}
      <MarketIntelligence />        {/* Dark navy */}
      <WealthManagement />          {/* Light gray/white */}
      <WhyChooseUs />               {/* White */}
      <MobileAppSection />          {/* Dark navy */}
      <TestimonialsSection />       {/* Light gray */}
      <CTASection />                {/* Split dark/warm */}
      <Footer />                    {/* Dark navy */}
    </main>
  );
}
