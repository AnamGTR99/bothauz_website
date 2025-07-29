import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Zap, Users, Phone, Settings, Rocket, BarChart3, Headphones } from 'lucide-react';
import AnimatedLogo from '../components/AnimatedLogo';
import ConveyorText from '../components/ConveyorText';
import ScrollAnimation from '../components/ScrollAnimation';
import ServiceCard from '../components/ServiceCard';
import ProcessStep from '../components/ProcessStep';
import TrustBadges from '../components/TrustBadges';
import ParticleField from '../components/ParticleField';
import HolographicCard from '../components/HolographicCard';
import TeamSection from '../components/TeamSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
        <ParticleField />
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8 relative z-10">
            <AnimatedLogo />
            <ConveyorText />
            
            <div className="space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight max-w-4xl mx-auto">
                Custom AI systems built from scratch to automate your business and scale your operations.
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                We develop proprietary AI solutions tailored specifically for your unique business needs.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl backdrop-blur-sm border border-blue-400/30"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* About Us Section */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              About BotHauz
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              BotHauz is a specialized AI solutions agency built for startups, agencies, and businesses that want to offload repetitive tasks and engage customers intelligently. We combine expert custom development with proprietary technology to deliver dedicated systems built for your operations that save you time and grow your revenue.
            </p>
            <div className="w-32 h-32 rounded-lg mx-auto mb-4 overflow-hidden border-4 border-blue-400/30 bg-gray-800/50 flex items-center justify-center">
              <img
                src="/favicon.png"
                alt="BotHauz Logo"
                className="w-24 h-24 object-contain"
                onError={(e) => {
                  console.error('Failed to load favicon image');
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <p className="text-sm text-gray-400 italic">
              We develop proprietary AI solutions custom-built from the ground up for your unique business needs.
            </p>
          </div>
        </section>
      </ScrollAnimation>

      {/* Services Section */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-800 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What We Offer
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Three core service packages designed to transform how your business operates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard
                icon={Bot}
                title="Bot Pack"
                shortDescription="Transform your customer interactions with intelligent chatbots custom-built from the ground up. Perfect for customer support, lead capture, and appointment booking."
                fullDescription="Transform your customer interactions with intelligent chatbots developed using proprietary technology. Our Bot Pack includes custom conversation flows built specifically for your business, multi-platform deployment (web, WhatsApp, Facebook), CRM integrations, and advanced features like appointment booking, lead qualification, FAQ automation, and 24/7 customer support. Each bot is a dedicated system built for your operations, tailored to your brand voice and business processes, with comprehensive testing and optimization to ensure seamless user experiences that convert visitors into customers. Most of our automation and chatbot solutions include a retainer component — because tools evolve and clients' needs change over time. We ensure the systems scale as your business grows."
              />
              <ServiceCard
                icon={Zap}
                title="Automation Pack"
                shortDescription="Eliminate repetitive tasks and streamline operations with powerful custom automations tailored to your business from day one."
                fullDescription="Eliminate repetitive tasks and streamline operations with powerful custom automations custom-built from the ground up. Our Automation Pack connects your existing tools through bespoke integration solutions to create intelligent workflows that handle data entry, email sequences, invoice processing, inventory management, and cross-platform synchronization. We design custom triggers, conditions, and actions that work seamlessly with your current tech stack, saving hours of manual work while reducing errors and improving consistency across your business operations. Most of our automation and chatbot solutions include a retainer component — because tools evolve and clients' needs change over time. We ensure the systems scale as your business grows."
              />
              <ServiceCard
                icon={Headphones}
                title="Concierge Plus"
                shortDescription="Maximize your AI investment with dedicated ongoing support, monthly strategy sessions, and continuous optimization of your dedicated systems."
                fullDescription="Maximize your AI investment with dedicated ongoing support and continuous optimization of your custom-built solutions. Concierge Plus includes monthly strategy sessions, performance analytics and reporting, proactive system improvements, new feature development, integration updates, priority technical support, and quarterly business reviews. We monitor your systems 24/7, provide detailed insights on user interactions and conversion metrics, and continuously refine your automations to adapt to changing business needs and market conditions, ensuring your AI solutions evolve with your growth. Most of our automation and chatbot solutions include a retainer component — because tools evolve and clients' needs change over time. We ensure the systems scale as your business grows."
              />
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Real Examples Section */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                ⚡️ Real Examples
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                See the kind of custom solutions we've built for businesses like yours.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <HolographicCard className="p-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl mx-auto flex items-center justify-center border border-blue-400/30">
                    <span className="text-2xl">🏨</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Hotel Hot Lead Finder</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We built a custom web scraping and filtering tool to help a hospitality client find upcoming events and automatically identify high-value guests to target.
                  </p>
                </div>
              </HolographicCard>

              <HolographicCard className="p-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl mx-auto flex items-center justify-center border border-blue-400/30">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Lead Qualification Bot (Real Estate)</h3>
                  <p className="text-gray-300 leading-relaxed">
                    A voiceflow-powered chatbot that screens website visitors, captures preferences, and schedules viewings — all synced to a custom dashboard.
                  </p>
                </div>
              </HolographicCard>

              <HolographicCard className="p-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl mx-auto flex items-center justify-center border border-blue-400/30">
                    <span className="text-2xl">⚓</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Process Automation for Marine Services</h3>
                  <p className="text-gray-300 leading-relaxed">
                    A Make-powered system that handles job scheduling, status updates, and client reminders across email and WhatsApp.
                  </p>
                </div>
              </HolographicCard>
            </div>

            <div className="text-center">
              <HolographicCard className="p-8 max-w-4xl mx-auto">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">Custom Solutions, Built From Scratch</h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    At BotHauz, no two businesses are alike — and neither are our solutions. We scope and price based on the service, automation depth, and your goals. Everything is custom-built.
                  </p>
                  <p className="text-blue-300 font-medium">
                    💬 "These tools are custom, integrated, and deeply tailored to each industry. We build what you need — from the ground up."
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl backdrop-blur-sm border border-blue-400/30"
                  >
                    Let's explore your needs together and provide a custom quote
                  </Link>
                </div>
              </HolographicCard>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* How It Works Section */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                How It Works
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Our proven 5-step process ensures your AI solution is perfectly tailored to your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <ProcessStep
                step={1}
                icon={Phone}
                title="Discovery Call"
                description="We understand your business needs and identify automation opportunities."
              />
              <ProcessStep
                step={2}
                icon={Settings}
                title="Custom Design"
                description="Architect a bespoke solution designed specifically for your requirements."
              />
              <ProcessStep
                step={3}
                icon={Bot}
                title="Build & Test"
                description="Full custom development with rigorous testing to ensure reliability."
              />
              <ProcessStep
                step={4}
                icon={Rocket}
                title="Launch"
                description="Seamless deployment and integration with your existing systems."
              />
              <ProcessStep
                step={5}
                icon={BarChart3}
                title="Ongoing Support"
                description="Continuous monitoring, optimization, and detailed reporting."
              />
            </div>

            <div className="text-center mt-12">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl backdrop-blur-sm border border-blue-400/30"
              >
                Ready to automate? Book your free consultation.
              </Link>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Results Preview */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Real Results for Real Businesses
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                See how our AI solutions deliver measurable impact across key business metrics.
              </p>
            </div>

            <HolographicCard className="p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">85%</div>
                  <div className="text-gray-300">Time Saved on Support</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">92%</div>
                  <div className="text-gray-300">Customer Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">3x</div>
                  <div className="text-gray-300">Lead Conversion Rate</div>
                </div>
              </div>
            </HolographicCard>

            <div className="text-center">
              <Link
                to="/testimonials"
                className="inline-flex items-center justify-center px-6 py-3 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-gray-900 transition-colors duration-200 font-medium backdrop-blur-sm"
              >
                View All Testimonials
              </Link>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Testimonials Preview */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-gray-300">
                Real testimonials from businesses that have transformed their operations with BotHauz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <HolographicCard className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-2xl">⚓</div>
                  <div>
                    <h3 className="font-semibold text-white">JJ Marine</h3>
                    <p className="text-blue-400 text-sm">Marine Services</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  "BotHauz transformed our customer service operations completely. Our AI assistant handles 85% of inquiries automatically, providing instant responses 24/7."
                </p>
              </HolographicCard>
              <HolographicCard className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-2xl">🏨</div>
                  <div>
                    <h3 className="font-semibold text-white">The Anam Hotel</h3>
                    <p className="text-blue-400 text-sm">Luxury Hospitality</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  "Their AI solution seamlessly integrates with our website, allowing guests to check real-time availability and make instant reservations. Guest satisfaction has increased dramatically."
                </p>
              </HolographicCard>
            </div>

            <div className="text-center">
              <Link
                to="/testimonials"
                className="inline-flex items-center justify-center px-6 py-3 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-gray-900 transition-colors duration-200 font-medium backdrop-blur-sm"
              >
                Read All Testimonials
              </Link>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Final CTA */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still wondering if BotHauz is right for you?
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Book your free discovery call today — no pressure, just possibilities.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl backdrop-blur-sm border border-blue-400/30"
            >
              Book a Free Consultation
            </Link>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default Home;