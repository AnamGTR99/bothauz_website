import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote, Calendar, MessageCircle, Clock, Users, TrendingUp, DollarSign, Target, CheckCircle } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import HolographicCard from '../components/HolographicCard';
import ParticleField from '../components/ParticleField';

interface TestimonialData {
  company: string;
  industry: string;
  logo: string;
  testimonial: string;
  author: string;
  position: string;
  solution: string;
  results: string[];
  icon: React.ComponentType<any>;
  gradient: string;
}

const Testimonials = () => {
  const testimonials: TestimonialData[] = [
    {
      company: "JJ Marine",
      industry: "Marine Services",
      logo: "⚓",
      testimonial: "BotHauz transformed our customer service operations completely. Before implementing their chatbot solution, our team was overwhelmed with repetitive inquiries about services, pricing, and availability - especially outside business hours. Now our AI assistant handles 85% of customer inquiries automatically, providing instant responses 24/7. Our customers love getting immediate answers, and our team can focus on complex projects instead of answering the same questions repeatedly. The ROI was evident within the first month.",
      author: "Captain James Johnson",
      position: "Operations Manager",
      solution: "Custom 24/7 Customer Service AI System with Service Inquiry Management",
      results: [
        "85% reduction in manual customer service workload",
        "24/7 availability for customer inquiries",
        "3x faster response times for common questions",
        "40% increase in after-hours lead capture",
        "Significant improvement in customer satisfaction scores"
      ],
      icon: MessageCircle,
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      company: "The Anam Hotel",
      industry: "Luxury Hospitality",
      logo: "🏨",
      testimonial: "Working with BotHauz has revolutionized our guest booking experience. Their AI solution seamlessly integrates with our website and connects directly to our property management system, allowing guests to check real-time availability and make instant reservations without human intervention. The system handles complex booking scenarios, room preferences, and even special requests with remarkable accuracy. Our front desk team now focuses on creating memorable guest experiences rather than processing routine bookings. Guest satisfaction has increased dramatically since implementation.",
      author: "Maria Nguyen",
      position: "Guest Services Director",
      solution: "Custom Intelligent Booking System with Real-Time Availability & AI Agent Integration",
      results: [
        "78% of bookings now processed automatically",
        "Real-time availability checking and instant confirmations",
        "60% reduction in booking-related phone calls",
        "45% increase in direct bookings through website",
        "Seamless integration with existing property management system"
      ],
      icon: Calendar,
      gradient: "from-purple-600 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen pt-24 bg-gray-900">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
        <ParticleField />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Client Success Stories
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            See how businesses like yours are transforming their operations with BotHauz AI solutions.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimation key={testimonial.company} delay={index * 0.2}>
                <HolographicCard className="p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Company Info & Testimonial */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${testimonial.gradient} rounded-2xl flex items-center justify-center text-2xl border border-white/20`}>
                          {testimonial.logo}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{testimonial.company}</h3>
                          <p className="text-blue-400 font-medium">{testimonial.industry}</p>
                        </div>
                      </div>

                      <div className="relative">
                        <Quote className="absolute -top-2 -left-2 h-8 w-8 text-blue-400/30" />
                        <blockquote className="text-gray-300 text-lg leading-relaxed pl-6">
                          "{testimonial.testimonial}"
                        </blockquote>
                      </div>

                      <div className="flex items-center space-x-4 pt-4 border-t border-gray-700">
                        <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center">
                          <Users className="h-6 w-6 text-gray-300" />
                        </div>
                        <div>
                          <div className="font-semibold text-white">{testimonial.author}</div>
                          <div className="text-gray-400 text-sm">{testimonial.position}</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                        <span className="text-gray-400 ml-2">5.0/5.0</span>
                      </div>
                    </div>

                    {/* Solution Details */}
                    <div className="space-y-6">
                      <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`w-10 h-10 bg-gradient-to-br ${testimonial.gradient} rounded-lg flex items-center justify-center`}>
                            <testimonial.icon className="h-5 w-5 text-white" />
                          </div>
                          <h4 className="font-semibold text-white">Solution Implemented</h4>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{testimonial.solution}</p>
                      </div>

                      <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                            <Clock className="h-5 w-5 text-white" />
                          </div>
                          <h4 className="font-semibold text-white">Key Results</h4>
                        </div>
                        <ul className="space-y-3">
                          {testimonial.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-300">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </HolographicCard>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <ScrollAnimation>
        <section className="py-16 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Proven Track Record
              </h2>
              <p className="text-lg text-gray-300">
                Our clients consistently see measurable improvements across key business metrics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <HolographicCard className="p-6 text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">25+</div>
                <div className="text-gray-300">Projects Delivered</div>
              </HolographicCard>
              <HolographicCard className="p-6 text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">95%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </HolographicCard>
              <HolographicCard className="p-6 text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">40%</div>
                <div className="text-gray-300">Average Time Saved</div>
              </HolographicCard>
              <HolographicCard className="p-6 text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Coverage</div>
              </HolographicCard>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Results Section */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Proven Results That Matter
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                See how BotHauz AI solutions deliver measurable impact across industries, helping businesses save time, reduce costs, and scale efficiently.
              </p>
            </div>

            {/* Key Metrics Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <HolographicCard className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-400/30">
                  <Clock className="h-8 w-8 text-blue-400" />
                </div>
                <div className="text-4xl font-bold text-blue-400 mb-2">847</div>
                <div className="text-gray-300 font-medium">Hours Saved Monthly</div>
                <div className="text-sm text-gray-400 mt-2">Across all clients</div>
              </HolographicCard>

              <HolographicCard className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-400/30">
                  <TrendingUp className="h-8 w-8 text-blue-400" />
                </div>
                <div className="text-4xl font-bold text-blue-400 mb-2">94%</div>
                <div className="text-gray-300 font-medium">Average Bot Accuracy</div>
                <div className="text-sm text-gray-400 mt-2">Customer query resolution</div>
              </HolographicCard>

              <HolographicCard className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-400/30">
                  <Users className="h-8 w-8 text-blue-400" />
                </div>
                <div className="text-4xl font-bold text-blue-400 mb-2">92%</div>
                <div className="text-gray-300 font-medium">Customer Satisfaction</div>
                <div className="text-sm text-gray-400 mt-2">Post-automation surveys</div>
              </HolographicCard>

              <HolographicCard className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-400/30">
                  <DollarSign className="h-8 w-8 text-blue-400" />
                </div>
                <div className="text-4xl font-bold text-blue-400 mb-2">$2.4M</div>
                <div className="text-gray-300 font-medium">Total Cost Savings</div>
                <div className="text-sm text-gray-400 mt-2">Operational efficiency gains</div>
              </HolographicCard>
            </div>

            {/* Case Studies */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Case Study 1 */}
              <HolographicCard className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mr-4 border border-blue-400/30">
                    <Target className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">E-commerce Platform</h3>
                    <p className="text-gray-400">Customer Support Automation</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Developed a comprehensive custom AI system handling order inquiries, returns, and product recommendations. Custom-built from the ground up and integrated with existing help desk and inventory management systems.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300">85% reduction in support ticket volume</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300">24/7 customer support coverage</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300">3x faster resolution times</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300">$25K annual savings in support costs</span>
                  </div>
                </div>
              </HolographicCard>

              {/* Case Study 2 */}
              <HolographicCard className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mr-4 border border-blue-400/30">
                    <Users className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Healthcare Clinic</h3>
                    <p className="text-gray-400">Appointment & Lead Management</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Built a dedicated intelligent appointment booking system with automated follow-ups, insurance verification, and patient onboarding workflows. Tailored to your business from day one to integrate seamlessly with practice management software.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300">78% increase in appointment bookings</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300">90% reduction in no-shows</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300">60% faster patient intake process</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300">$18K monthly revenue increase</span>
                  </div>
                </div>
              </HolographicCard>

              {/* Case Study 3 */}
              <HolographicCard className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mr-4 border border-blue-400/30">
                    <TrendingUp className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Marketing Agency</h3>
                    <p className="text-gray-400">Lead Qualification & Nurturing</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Architected a sophisticated lead qualification system with automated nurturing sequences, proposal generation, and CRM integration. Custom-built from the ground up for streamlined sales processes.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300">4x increase in qualified leads</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300">67% improvement in conversion rate</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Automated 80% of initial consultations</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300">$85K additional annual revenue</span>
                  </div>
                </div>
              </HolographicCard>

              {/* Case Study 4 */}
              <HolographicCard className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mr-4 border border-blue-400/30">
                    <DollarSign className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">SaaS Startup</h3>
                    <p className="text-gray-400">Onboarding & User Support</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Engineered a custom intelligent onboarding assistant with progressive user guidance, feature discovery, and automated support ticket routing. Dedicated systems built for your operations and tailored to their user journey and business logic.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300">55% increase in user activation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300">40% reduction in churn rate</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300">70% faster time-to-value</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300">$22K monthly MRR increase</span>
                  </div>
                </div>
              </HolographicCard>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* CTA Section */}
      <ScrollAnimation>
        <section className="py-16 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 relative overflow-hidden">
          <ParticleField />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Let's discuss how BotHauz AI automation can transform your business operations and deliver measurable results.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 rounded-xl text-lg font-medium hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Book Your Free Consultation
            </Link>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default Testimonials;