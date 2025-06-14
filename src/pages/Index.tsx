
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSolution from "@/components/ProblemSolution";
import FeaturesShowcase from "@/components/FeaturesShowcase";
import PricingSection from "@/components/PricingSection";
import SocialProof from "@/components/SocialProof";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProblemSolution />
      <FeaturesShowcase />
      <PricingSection />
      <SocialProof />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
