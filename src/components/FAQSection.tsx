
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Is InfluencerConnect Pro compliant with Instagram's terms of service?",
      answer: "Yes, absolutely. We use only public data and approved Instagram APIs. We don't scrape private information or violate any platform guidelines. Our methods are completely safe and compliant."
    },
    {
      question: "What kind of email deliverability rates can I expect?",
      answer: "Our users typically see 85-95% email deliverability rates. We use advanced email verification and warming techniques to ensure your messages reach the inbox, not spam folders."
    },
    {
      question: "How is this different from expensive competitors like AspireIQ?",
      answer: "While tools like AspireIQ cost $200-500/month and focus on macro-influencers, we specialize in micro-influencers (1K-100K followers) at a fraction of the cost. Our automation saves time while our micro-influencer focus delivers better ROI for small businesses."
    },
    {
      question: "Why focus on micro-influencers instead of bigger ones?",
      answer: "Micro-influencers have 3-7x higher engagement rates, more authentic relationships with followers, and cost 90% less than macro-influencers. For small businesses, they deliver much better ROI and conversion rates."
    },
    {
      question: "Can I export my data and contacts?",
      answer: "Yes! You can export all your contacts, campaign data, and analytics in CSV format. We believe in data portability and never lock you in."
    },
    {
      question: "Do you offer integrations with other tools?",
      answer: "We integrate with popular email platforms, CRM systems, and analytics tools. Our API allows custom integrations, and we're constantly adding new partnerships based on user requests."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about InfluencerConnect Pro
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Collapsible key={index} open={openItems.includes(index)}>
              <CollapsibleTrigger
                onClick={() => toggleItem(index)}
                className="w-full text-left p-6 bg-white rounded-lg border hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <span className="text-2xl text-gray-400">
                    {openItems.includes(index) ? "−" : "+"}
                  </span>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 pb-6 bg-white rounded-b-lg border-t-0 border-l border-r border-b">
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a href="mailto:support@influencerconnectpro.com" className="text-blue-600 hover:text-blue-700 font-medium">
            Contact our support team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
