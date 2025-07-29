import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`New Contact Form Submission from ${formData.name}`);
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}

Message:
${formData.message}

---
Sent from BotHauz Contact Form
    `);
    
    const mailtoLink = `mailto:bruno@bothauz.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    // Reset form and show confirmation
    setFormData({ name: '', email: '', company: '', message: '' });
    alert('Thank you for your message! Your email client should open with the message ready to send. We\'ll get back to you within 24 hours.');
  };

  return (
    <div className="min-h-screen pt-24 bg-gray-900">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Something Amazing Together
          </h1>
          <div className="mb-12"></div>
          <p className="text-xl text-gray-300 leading-relaxed">
            Ready to automate your business with custom AI solutions? Start with a free discovery call where we'll explore your needs and show you what's possible.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <ScrollAnimation>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  Get In Touch
                </h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                  We're here to answer your questions and discuss how AI automation can transform your business. No sales pressure – just genuine conversation about your goals and challenges.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-blue-400/30">
                    <Mail className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email Us</h3>
                    <p className="text-gray-300">bruno@bothauz.com</p>
                    <p className="text-sm text-gray-400 mt-1">We typically respond within 2-4 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-blue-400/30">
                    <Phone className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Schedule a Call</h3>
                    <p className="text-gray-300">Book a free 30-minute discovery session</p>
                    <p className="text-sm text-gray-400 mt-1">Available Monday-Friday, 9 AM - 11 PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-blue-400/30">
                    <MapPin className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Remote-First</h3>
                    <p className="text-gray-300">Serving clients worldwide</p>
                    <p className="text-sm text-gray-400 mt-1">Based in U.A.E, working globally</p>
                  </div>
                </div>
              </div>

              {/* Calendar Placeholder */}
              <div className="bg-blue-600/10 rounded-2xl p-6 border border-blue-400/30">
                <h3 className="text-lg font-semibold text-white mb-6">
                  📅 Schedule Your Free Discovery Call
                </h3>
                <div style={{ overflow: 'visible', position: 'relative', zIndex: 1 }}>
                  <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/bruno-bothauz/30min?hide_gdpr_banner=1"
                    style={{ minWidth: '320px', height: '700px' }}
                  ></div>
                </div>
                <div className="mt-4 text-sm text-gray-400">
                  Available Monday-Friday, 9 AM - 11 PM EST
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">
                  What to Expect in Your Discovery Call
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-700 rounded-full mr-3"></div>
                    Understand your current business processes and pain points
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-700 rounded-full mr-3"></div>
                    Identify the best automation opportunities for your business
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Understand your current business processes and pain points
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Identify the best automation opportunities for your business
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Show you examples of similar solutions we've built
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Provide a clear roadmap and timeline for your project
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Answer all your questions about our process and approach
                  </li>
                </ul>
              </div>
            </div>
          </ScrollAnimation>

          {/* Contact Form */}
          <ScrollAnimation delay={0.2}>
            <div className="bg-gray-800/50 rounded-2xl border border-gray-700 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-white placeholder-gray-400"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-white placeholder-gray-400"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-white placeholder-gray-400"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none text-white placeholder-gray-400"
                    placeholder="Tell us about your business needs, current challenges, or what you'd like to automate..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl border border-blue-400/30"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>

              <div className="mt-6 p-4 bg-blue-600/10 rounded-lg border border-blue-400/30">
                <p className="text-sm text-blue-300">
                  <strong>Response Time:</strong> We respond to all inquiries within 4 hours, usually much faster. 
                  For urgent requests, feel free to mention that in your message.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Social Proof */}
      <ScrollAnimation>
        <section className="py-16 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-8">
              Join Our Growing Community
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">25+</div>
                <div className="text-gray-300">Successful Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
                <div className="text-gray-300">Client Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">24hr</div>
                <div className="text-gray-300">Maximum Response Time</div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default Contact;