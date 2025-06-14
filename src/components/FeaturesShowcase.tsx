
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Mail, TrendingUp } from "lucide-react";

const FeaturesShowcase = () => {
  const features = [
    {
      icon: Search,
      title: "Smart Discovery",
      description: "Find micro-influencers by hashtag, location & niche with our advanced filtering system",
      mockup: "Discovery Interface Mockup"
    },
    {
      icon: Mail,
      title: "Auto Contact Extraction",
      description: "Get verified emails and contact info instantly from bio links and patterns",
      mockup: "Contact Extraction Mockup"
    },
    {
      icon: TrendingUp,
      title: "Personalized Outreach",
      description: "Send automated, personalized email campaigns that get 10x better response rates",
      mockup: "Campaign Builder Mockup"
    },
    {
      icon: TrendingUp,
      title: "Campaign Analytics",
      description: "Track responses, ROI, and collaboration success with detailed performance metrics",
      mockup: "Analytics Dashboard Mockup"
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Everything You Need to Scale Your Influencer Marketing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform handles the entire process from discovery to campaign analytics
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                  <p className="text-gray-500 font-medium">{feature.mockup}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;
