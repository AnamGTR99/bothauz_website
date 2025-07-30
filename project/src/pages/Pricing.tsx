import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Zap, Bot, Headphones, Users, BarChart3, Clock, Shield, ArrowRight } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import HolographicCard from '../components/HolographicCard';
import ParticleField from '../components/ParticleField';

const Pricing = () => {
  const projectPhases = [
    {
      phase: "01",
      title: "Discovery Phase",
      priceRange: "$20K - $35K AUD",
      description: "We begin with comprehensive stakeholder workshops, data audits, and value mapping to create a detailed solution blueprint aligned with your business objectives.",
      features: [
        "Stakeholder Workshops",
        "Data Audit",
        "Value Mapping",
        "Solution Blueprint",
        "Risk Alignment",
        "ROI Forecast"
      ],
      icon: Bot,
      color: "from-blue-600/20 to-purple-600/20"
    },
    {
      phase: "02", 
      title: "Engineering & Implementation Phase",
      priceRange: "$60K - $120K AUD",
      description: "Our engineering team delivers your AI solution through agile sprints, ensuring seamless system integration, model refinement, and production-ready deployment.",
      features: [
        "Agile Sprints",
        "System Integration",
        "Model Refinement",
        "Security Hardening",
        "User Training",
        "Production Launch"
      ],
      icon: Zap,
      color: "from-purple-600/20 to-pink-600/20"
    },
    {
      phase: "03",
      title: "Ongoing Support & Optimisation Phase",
      priceRange: "$1K - $2K AUD",
      description: "Continuous monitoring, performance optimization, and feature rollouts ensure your AI solution evolves with your business and delivers sustained value.",
      features: [
        "Performance Monitoring",
        "Continuous Tuning",
        "Feature Rollouts",
        "Usage Analytics",
        "Cost Optimisation",
        "Regular Updates"
      ],
      icon: Headphones,
      color: "from-pink-600/20 to-red-600/20"
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
      description: "Get your AI solution up and running in 2-12 weeks, not months."
    },
    {
      icon: Shield,
      title: "Proven Results",
      description: "Our clients see measurable improvements within the first 30 days."
    },
    {
      icon: BarChart3,
      title: "Scalable Infrastructure",
      description: "Systems that grow with your business, not against it."
    },
    {
      icon: Users,
      title: "Engineering Excellence",
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
                Pricing varies based on business complexity and needs. Our clients can scale their engagement as we deliver critical results.
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
                Project Phases
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Our proven three-phase approach ensures successful AI implementation from discovery to ongoing optimization.
              </p>
            </div>

            <div className="space-y-8">
              {projectPhases.map((phase, index) => {
                const IconComponent = phase.icon;
                return (
                  <HolographicCard 
                    key={index} 
                    className="p-8 relative"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                      {/* Phase Number and Icon */}
                      <div className="text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start space-x-4 mb-4">
                          <div className={`w-16 h-16 bg-gradient-to-br ${phase.color} rounded-2xl flex items-center justify-center border border-blue-400/30`}>
                            <IconComponent className="w-8 h-8 text-blue-400" />
                          </div>
                          <div className="text-6xl font-bold text-blue-400">{phase.phase}</div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{phase.title}</h3>
                        <div className="text-3xl font-bold text-blue-400 mb-2">{phase.priceRange}</div>
                      </div>

                      {/* Description */}
                      <div className="lg:col-span-2">
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                          {phase.description}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {phase.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start space-x-3">
                              <Check className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6">
                          <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-6 py-3 border border-blue-400 text-blue-400 rounded-lg font-medium hover:bg-blue-400 hover:text-gray-900 transition-all duration-200"
                          >
                            Get Quote
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </div>
                      </div>
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
                Why Choose Our Process
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Our proven three-phase approach ensures successful AI implementation and sustained business value.
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
                <h3 className="text-xl font-bold text-white mb-3">How do you determine pricing for each phase?</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Pricing varies based on business complexity, data requirements, and integration needs. We provide detailed proposals with exact deliverables before any work begins.
                </p>
              </HolographicCard>

              <HolographicCard className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">Can we start with the Discovery Phase only?</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Absolutely! Many clients begin with the Discovery Phase to understand their AI opportunities and then decide on next steps based on the findings and ROI forecast.
                </p>
              </HolographicCard>

              <HolographicCard className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">What's included in the Ongoing Support phase?</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Ongoing support includes performance monitoring, continuous tuning, feature rollouts, usage analytics, and cost optimization to ensure sustained value delivery.
                </p>
              </HolographicCard>

              <HolographicCard className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">Do you offer enterprise plans?</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Yes, we offer custom enterprise plans for large-scale AI implementations. Contact our sales team for detailed enterprise pricing and solutions.
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