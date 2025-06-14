
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mb-12 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Find & Connect with <span className="text-blue-600">Micro-Influencers</span> in Minutes, Not Hours
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Automate your influencer outreach and get 10x more collaborations for your brand
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 h-auto">
                Start Free Trial
              </Button>
              <Button variant="outline" className="text-lg px-8 py-4 h-auto">
                Watch Demo
              </Button>
            </div>
            <p className="text-sm text-gray-500">
              Join 500+ brands already growing with micro-influencers
            </p>
          </div>
          <div className="relative">
            <div className="bg-white rounded-lg shadow-2xl p-8 border">
              <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                <p className="text-blue-600 font-semibold">Platform Demo Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
