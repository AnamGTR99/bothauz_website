import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Zap, Bot, Headphones, Users, BarChart3, Clock, Shield, ArrowRight } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import HolographicCard from '../components/HolographicCard';
import ParticleField from '../components/ParticleField';

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Starter",
      price: "$2,500",
      period: "one-time",
      description: "Perfect for small businesses starting their AI journey",
      features: [
        "Custom chatbot development",
        "Basic automation setup",
        "2-week implementation",
        "30 days support",
        "Basic analytics dashboard",
        "Single platform deployment"
      ],
      cta: "Get Started",
      popular: false,
      icon: Bot
    },
    {
      name: "Professional",
      price: "$5,000",
      period: "one-time",
      description: "Comprehensive AI solutions for growing businesses",
      features: [
        "Advanced chatbot with AI learning",
        "Multi-platform automation",
        "CRM integration",
        "4-week implementation",
        "90 days support",
        "Advanced analytics & reporting",
        "Custom workflow design",
        "Priority support"
      ],
      cta: "Most Popular",
      popular: true,
      icon: Zap
    },
    {
      name: "Enterprise",
      price: "$12,000",
      period: "one-time",
      description: "Full-scale AI transformation for established businesses",
      features: [
        "Complete AI ecosystem",
        "Custom LLM integration",
        "Multi-department automation",
        "6-week implementation",
        "6 months support",
        "Real-time analytics",
        "Custom API development",
        "Dedicated success manager",
        "24/7 priority support",
        "Quarterly optimization"
      ],
      cta: "Contact Sales",
      popular: false,
      icon: Headphones
    }
  ];

  const stats = [
    {
      number: "200%",
      label: "Average ROI",
      description: "within 6 months"
    },
    {
      number: "85%",
      label: "Time Saved",
      description: "on repetitive tasks"
    },
    {
      number: "3x",
      label: "Faster Response",
      description: "to customer inquiries"
    },
    {
      number: "24/7",
      label: "Availability",
      description: "automated support"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Rapid Implementation",
      description: "Get your AI solution up and running in 2-6 weeks, not months."
    },
    {
      icon: Shield,
      title: "Proven Results",
      description: "Our clients see measurable improvements within the first 30 days."
    },
    {
      icon: BarChart3,
      title: "Scalable Solutions",
      description: "Systems that grow with your business, not against it."
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Dedicated team ensures your success every step of the way."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
        <ParticleField />
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8 relative z-10">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Transparent Pricing
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Investment that scales with your business. No hidden fees, no surprises.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <HolographicCard key={index} className="p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white font-semibold text-sm md:text-base">
                    {stat.label}
                  </div>
                  <div className="text-gray-400 text-xs md:text-sm">
                    {stat.description}
                  </div>
                </HolographicCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your AI Journey
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Three tiers designed to match your business size and AI ambitions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => {
                const IconComponent = plan.icon;
                return (
                  <HolographicCard 
                    key={index} 
                    className={`p-8 relative ${plan.popular ? 'ring-2 ring-blue-400 scale-105' : ''}`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center space-y-6">
                      <div className="flex justify-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl flex items-center justify-center border border-blue-400/30">
                          <IconComponent className="w-8 h-8 text-blue-400" />
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                        <p className="text-gray-300 text-sm">{plan.description}</p>
                      </div>

                      <div className="space-y-2">
                        <div className="text-4xl font-bold text-white">{plan.price}</div>
                        <div className="text-gray-400 text-sm">{plan.period}</div>
                      </div>

                      <ul className="space-y-3 text-left">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <Check className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        to="/contact"
                        className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                          plan.popular
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                            : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900'
                        }`}
                      >
                        {plan.cta}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </HolographicCard>
                );
              })}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Benefits Section */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose BotHauz
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                We don't just build AI solutions — we build business transformations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <HolographicCard key={index} className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl mx-auto mb-4 flex items-center justify-center border border-blue-400/30">
                      <IconComponent className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                  </HolographicCard>
                );
              })}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* FAQ Section */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Common Questions
              </h2>
              <p className="text-lg text-gray-300">
                Everything you need to know about our pricing and process.
              </p>
            </div>

            <div className="space-y-6">
              <HolographicCard className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">What's included in the pricing?</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  All pricing includes custom development, testing, deployment, and initial support. We provide detailed proposals with exact deliverables before any work begins.
                </p>
              </HolographicCard>

              <HolographicCard className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">How long does implementation take?</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Implementation ranges from 2-6 weeks depending on complexity. We provide detailed timelines during the discovery phase and keep you updated throughout the process.
                </p>
              </HolographicCard>

              <HolographicCard className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">Do you offer ongoing support?</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Yes, all plans include support periods. We also offer ongoing maintenance and optimization packages to ensure your AI solutions continue to deliver value as your business grows.
                </p>
              </HolographicCard>

              <HolographicCard className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">Can we start with a smaller package and upgrade?</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Absolutely! Many clients start with our Starter package and upgrade as they see results. We design all solutions to be scalable and upgradeable.
                </p>
              </HolographicCard>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* CTA Section */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Book your free consultation today and discover how AI can accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl backdrop-blur-sm border border-blue-400/30"
              >
                Book Free Consultation
              </Link>
              <Link
                to="/faq"
                className="inline-flex items-center justify-center px-8 py-4 border border-blue-400 text-blue-400 rounded-xl text-lg font-medium hover:bg-blue-400 hover:text-gray-900 transition-all duration-200 backdrop-blur-sm"
              >
                View FAQ
              </Link>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default Pricing; 