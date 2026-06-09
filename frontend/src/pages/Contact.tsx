import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '+254 712 345 678', details: 'Mon-Fri, 8AM - 4PM' },
    { icon: Mail, label: 'Email', value: 'info@countyhighschool.ac.ke', details: 'We respond within 48 hours' },
    { icon: MapPin, label: 'Address', value: 'P.O Box 251, Garissa', details: 'Garissa County, Kenya' },
    { icon: Clock, label: 'Office Hours', value: '8:00 AM - 4:00 PM', details: 'Monday to Friday' },
  ];

  const departments = [
    { name: 'Principal\'s Office', email: 'principal@countyhigh.ac.ke', phone: '+254 712 345 679' },
    { name: 'Academic Office', email: 'academics@countyhigh.ac.ke', phone: '+254 712 345 680' },
    { name: 'Admissions Office', email: 'admissions@countyhigh.ac.ke', phone: '+254 712 345 681' },
    { name: 'Finance Office', email: 'finance@countyhigh.ac.ke', phone: '+254 712 345 682' },
    { name: 'Sports Department', email: 'sports@countyhigh.ac.ke', phone: '+254 712 345 683' },
    { name: 'Guidance & Counseling', email: 'counseling@countyhigh.ac.ke', phone: '+254 712 345 684' },
  ];

  const socialLinks = [
    { icon: FaFacebook, name: 'Facebook', url: '#', color: 'hover:bg-blue-600' },
    { icon: FaTwitter, name: 'Twitter', url: '#', color: 'hover:bg-sky-500' },
    { icon: FaInstagram, name: 'Instagram', url: '#', color: 'hover:bg-pink-600' },
    { icon: FaLinkedin, name: 'LinkedIn', url: '#', color: 'hover:bg-blue-700' },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] bg-gradient-to-r from-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-4"
            >
              Contact Us
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-24 h-1 bg-amber-400 mx-auto mb-4"
            ></motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl max-w-2xl mx-auto"
            >
              Get in touch with us
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative z-20 py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-24">
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-xl text-center group hover:shadow-2xl transition"
              >
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-500 transition">
                  <info.icon size={28} className="text-amber-600 group-hover:text-white transition" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">{info.label}</h3>
                <p className="text-amber-600 font-semibold text-sm">{info.value}</p>
                <p className="text-gray-500 text-xs mt-1">{info.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Send us a <span className="text-amber-600">Message</span></h2>
              <p className="text-gray-500 mb-6">We'll get back to you as soon as possible</p>
              
              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <p className="text-green-700">Thank you! Your message has been sent successfully.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 transition"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 transition"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 transition"
                      placeholder="+254 712 345 678"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 transition"
                    >
                      <option value="">Select subject</option>
                      <option value="Admissions">Admissions Inquiry</option>
                      <option value="Academics">Academic Information</option>
                      <option value="Complaint">Complaint</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 transition resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg transition flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            </motion.div>

            {/* Map & Social */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Map */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  {/* Replace with actual Google Maps embed */}
                  <div className="text-center">
                    <MapPin size={48} className="text-amber-500 mx-auto mb-2" />
                    <p className="text-gray-500">Google Maps Location</p>
                    <p className="text-sm text-gray-400">P.O Box 251, Garissa, Kenya</p>
                  </div>
                </div>
                <div className="p-4 bg-gray-50">
                  <p className="text-center text-sm text-gray-600">
                    📍 Located in Garissa Town, easily accessible from major roads
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Connect With Us</h3>
                <p className="text-gray-500 mb-6">Follow us on social media for updates and news</p>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      className={`w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center ${social.color} transition-colors group`}
                    >
                      <social.icon size={20} className="text-gray-600 group-hover:text-white transition" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 border-l-4 border-red-500">
                <div className="flex items-start gap-3">
                  <AlertCircle className="text-red-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-red-700 mb-1">Emergency Contact</h3>
                    <p className="text-gray-700 text-sm">For urgent matters outside office hours:</p>
                    <p className="text-red-600 font-semibold mt-2">+254 722 000 000</p>
                    <p className="text-xs text-gray-500 mt-1">Available 24/7 for emergencies only</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Departments Directory */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-amber-600 text-sm font-semibold uppercase tracking-wider">Direct Contacts</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">Department <span className="text-amber-600">Directory</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              Contact specific departments directly for specialized assistance
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {departments.map((dept, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:shadow-md transition group"
              >
                <div>
                  <h3 className="font-semibold text-gray-800 group-hover:text-amber-600 transition">{dept.name}</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Phone size={12} /> {dept.phone}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Mail size={12} /> {dept.email}
                    </span>
                  </div>
                </div>
                <ChevronRight size={18} className="text-gray-400 group-hover:text-amber-500 transition" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-amber-600 text-sm font-semibold uppercase tracking-wider">FAQ</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">Frequently Asked <span className="text-amber-600">Questions</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              Find quick answers to common questions
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { q: "What are the school hours?", a: "School runs from 7:30 AM to 4:30 PM, Monday to Friday." },
              { q: "Is boarding available?", a: "Yes, we are a fully boarding school with modern dormitories." },
              { q: "How do I schedule a visit?", a: "Contact the admissions office to arrange a school tour." },
              { q: "When is the application deadline?", a: "Applications close on March 30th for the next academic year." },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-gray-800 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;