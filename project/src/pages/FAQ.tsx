import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs: FAQItem[] = [
    {
      category: "General",
      question: "What makes BotHauz different from other AI agencies?",
      answer: "BotHauz focuses exclusively on practical, revenue-generating AI solutions custom-built from the ground up. We're not about flashy demos or theoretical possibilities – we develop proprietary systems that solve real business problems. Our approach means transparent communication, ongoing support, and dedicated systems built for your operations designed specifically for your unique needs, not templated solutions."
    },
    {
      category: "General",
      question: "Do you work with businesses of all sizes?",
      answer: "Yes! We work with startups looking to automate from day one, growing businesses hitting scaling challenges, and established companies ready to modernize their operations. Our flexible service packages (Bot Pack, Automation Pack, and Concierge Plus) are designed to meet different business needs and budgets."
    },
    {
      category: "Technical",
      question: "How long does it take to build a custom chatbot?",
      answer: "Typically 2-4 weeks from discovery call to launch, depending on complexity and custom integrations required. Simple customer support systems can be ready in 1-2 weeks, while complex multi-system integrations may take 4-6 weeks. We'll give you a clear timeline during our discovery call."
    },
    {
      category: "Technical",
      question: "What technologies do you use?",
      answer: "We build custom AI solutions from the ground up using proprietary technology stacks tailored to your specific requirements. Our approach means we develop bespoke systems rather than relying on templated platforms. We integrate seamlessly with popular CRM systems, help desks, calendaring tools, and custom APIs as needed, ensuring your solution is tailored to your business from day one."
    },
    {
      category: "Technical",
      question: "Can you integrate with our existing systems?",
      answer: "Absolutely! Integration with your existing tools is often the key to success. We commonly integrate with CRM systems (HubSpot, Salesforce, Pipedrive), help desks (Zendesk, Intercom), calendaring tools (Calendly, Acuity), e-commerce platforms (Shopify, WooCommerce), and many others. If you have a custom system, we can likely integrate via API."
    },
    {
      category: "Technical",
      question: "What if our business processes change after the bot is built?",
      answer: "That's exactly why we offer ongoing support! Businesses evolve, and your custom AI systems should too. Our Concierge Plus retainer includes monthly optimization, updates to handle new scenarios, and strategic guidance as your needs change. Since we build everything custom-built from the ground up, modifications and enhancements are straightforward. Even without a retainer, we're always available for updates and improvements. Most of our automation and chatbot solutions include a retainer component — because tools evolve and clients' needs change over time. We ensure the systems scale as your business grows."
    },
    {
      category: "Pricing",
      question: "How much do your services cost?",
      answer: "At BotHauz, no two businesses are alike — and neither are our solutions. We scope and price based on the service, automation depth, and your goals. Everything is custom-built. Pricing varies based on complexity, integrations, and ongoing support needs. We always provide detailed quotes after understanding your specific requirements in our free discovery call. Let's explore your needs together and provide a custom quote."
    },
    {
      category: "Pricing",
      question: "Do you offer payment plans?",
      answer: "Yes! We understand cash flow is important for growing businesses. We work with you to create flexible payment structures that align with your budget and project milestones. During our discovery call, we'll discuss payment options that make sense for your specific situation and business needs."
    },
    {
      category: "Support",
      question: "Do you provide ongoing support after launch?",
      answer: "Yes! Our Concierge Plus package includes ongoing optimization, monthly strategy calls, performance reporting, and new feature builds. Even without a retainer, we provide 30 days of launch support and are always available for questions or updates. We're invested in your long-term success."
    },
    {
      category: "Support",
      question: "How do you measure success?",
      answer: "We track metrics that matter to your business: time saved, cost reduction, conversion rate improvements, customer satisfaction scores, and ROI. We provide detailed monthly reports showing exactly how your AI systems are performing and contributing to your bottom line. Success is measured in real business impact, not technical metrics."
    },
    {
      category: "Support",
      question: "What if the bot doesn't work as expected?",
      answer: "We stand behind our work. If your bot isn't performing as promised, we'll work with you to fix any issues at no additional cost. Our iterative development process includes extensive testing and feedback loops to catch issues before launch. Plus, we provide detailed documentation and training so your team knows exactly how everything works."
    },
    {
      category: "Getting Started",
      question: "What information do I need for the discovery call?",
      answer: "Just come prepared to discuss your biggest operational pain points and goals. It's helpful to know what tools you currently use, your typical workflow processes, and any specific automation ideas you've considered. But don't worry – we'll guide you through everything during the call."
    },
    {
      category: "Getting Started",
      question: "Can I see examples of your work?",
      answer: "Absolutely! While we respect client confidentiality, we have several case studies and demo bots we can show you during our discovery call. We'll also provide references from similar businesses in your industry if that would be helpful."
    },
    {
      category: "Getting Started",
      question: "How involved do I need to be in the development process?",
      answer: "We handle all the technical development, but your input is crucial for success. Expect 2-3 feedback sessions during development, plus initial requirements gathering and final training. Most clients spend 2-4 hours total on their project – we make it as hands-off as possible while ensuring the result perfectly fits your needs."
    }
  ];

  const categories = ["General", "Technical", "Pricing", "Support", "Getting Started"];

  return (
    <div className="min-h-screen pt-24 bg-gray-900">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Everything you need to know about working with BotHauz. Can't find what you're looking for? 
            <Link to="/contact" className="text-blue-400 hover:text-blue-300 ml-1">Book a free call</Link> and we'll answer any questions.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <ScrollAnimation>
        <section className="py-16 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {categories.map((category) => (
              <div key={category} className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
                  {category}
                </h2>
                <div className="space-y-4">
                  {faqs
                    .filter(faq => faq.category === category)
                    .map((faq, index) => {
                      const globalIndex = faqs.indexOf(faq);
                      const isOpen = openItems.includes(globalIndex);
                      return (
                        <div
                          key={globalIndex}
                          className="bg-gray-800/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors duration-200"
                        >
                          <button
                            onClick={() => toggleItem(globalIndex)}
                            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-700/30 rounded-lg transition-colors duration-200"
                          >
                            <span className="font-medium text-white pr-4">
                              {faq.question}
                            </span>
                            {isOpen ? (
                              <ChevronUp className="h-5 w-5 text-blue-400 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-blue-400 flex-shrink-0" />
                            )}
                          </button>
                          {isOpen && (
                            <div className="px-6 pb-4">
                              <p className="text-gray-300 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollAnimation>

      {/* Still Have Questions CTA */}
      <ScrollAnimation>
        <section className="py-16 bg-gray-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              <Link to="/contact" className="text-blue-400 hover:text-blue-300 ml-1">Book a free call</Link> and we'll answer any questions.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-colors duration-200 shadow-lg hover:shadow-xl border border-blue-400/30"
            >
              Book a Free Discovery Call
            </Link>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default FAQ;