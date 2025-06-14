
import { Card, CardContent } from "@/components/ui/card";

const SocialProof = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      company: "EcoStyle Boutique",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b047?w=150&h=150&fit=crop&crop=face",
      testimonial: "InfluencerConnect Pro helped us connect with 50+ micro-influencers in our first month. Our brand awareness increased by 300%!"
    },
    {
      name: "Mike Rodriguez", 
      company: "FitGear Pro",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      testimonial: "The time savings are incredible. What used to take us 20 hours per week now takes 2 hours. The ROI speaks for itself."
    },
    {
      name: "Emily Watson",
      company: "Local Coffee Co.",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face", 
      testimonial: "We went from 2% to 25% response rates with their personalized outreach templates. Game changer for our local business!"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Influencers contacted this month" },
    { number: "500+", label: "Active brands" },
    { number: "25%", label: "Average response rate" },
    { number: "10x", label: "More collaborations" }
  ];

  const brandLogos = [
    "Brand Logo 1", "Brand Logo 2", "Brand Logo 3", "Brand Logo 4", "Brand Logo 5"
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Trusted by Growing Brands Worldwide
          </h2>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.testimonial}"</p>
                </div>
                <div className="flex items-center">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Brand Logos */}
        <div className="text-center">
          <p className="text-gray-600 mb-8">Trusted by leading brands</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {brandLogos.map((logo, index) => (
              <div key={index} className="bg-gray-200 px-6 py-3 rounded-lg">
                <span className="text-gray-500 font-medium">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
