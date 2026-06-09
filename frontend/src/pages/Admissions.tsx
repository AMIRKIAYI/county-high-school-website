import React, { useState } from 'react';
import { CheckCircle, FileText, Calendar, Users, CreditCard, BookOpen, ChevronRight, Download, Clock, MapPin, Phone, Mail, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Admissions: React.FC = () => {
  const [activeTab, setActiveTab] = useState('requirements');

  const requirements = [
    { title: 'Age Requirement', desc: 'Must be between 13-18 years old at the time of admission' },
    { title: 'Academic Record', desc: 'Minimum C+ in KCPE or equivalent from recognized institution' },
    { title: 'Birth Certificate', desc: 'Original and copy of birth certificate or passport' },
    { title: 'School Reports', desc: 'Last two years of academic records from previous school' },
    { title: 'Recommendation', desc: 'Recommendation letter from previous school head' },
    { title: 'Medical Records', desc: 'Comprehensive medical report and vaccination records' },
  ];

  const fees = [
    { level: 'Form 1', amount: 'KSh 45,000', details: 'Per term (includes tuition, boarding, meals)' },
    { level: 'Form 2', amount: 'KSh 42,000', details: 'Per term (includes tuition, boarding, meals)' },
    { level: 'Form 3', amount: 'KSh 42,000', details: 'Per term (includes tuition, boarding, meals)' },
    { level: 'Form 4', amount: 'KSh 48,000', details: 'Per term (includes tuition, boarding, meals, exam prep)' },
  ];

  const scholarships = [
    { name: 'Academic Excellence', criteria: 'Top 10% in KCPE', coverage: 'Full tuition', icon: Award },
    { name: 'Leadership Scholarship', criteria: 'Demonstrated leadership in primary school', coverage: '50% tuition', icon: Users },
    { name: 'Sports Talent', criteria: 'County or national level achievement', coverage: 'Partial - negotiable', icon: Trophy },
    { name: 'Bursary Program', criteria: 'Financial need assessment', coverage: 'Partial', icon: Heart },
  ];

  const steps = [
    { number: '01', title: 'Submit Application', desc: 'Fill out online application form or download and submit physically', icon: FileText },
    { number: '02', title: 'Entrance Assessment', desc: 'Take our academic assessment and interview', icon: Calendar },
    { number: '03', title: 'Document Verification', desc: 'Submit all required documents for verification', icon: CheckCircle },
    { number: '04', title: 'Fee Payment', desc: 'Pay admission fee and first term fees', icon: CreditCard },
    { number: '05', title: 'Reporting', desc: 'Report to school on the designated date', icon: Calendar },
  ];

  const importantDates = [
    { event: 'Applications Open', date: 'January 15, 2024', status: 'Open' },
    { event: 'Application Deadline', date: 'March 30, 2024', status: 'Pending' },
    { event: 'Entrance Exams', date: 'April 15-20, 2024', status: 'Upcoming' },
    { event: 'Interviews', date: 'April 25-30, 2024', status: 'Upcoming' },
    { event: 'Admission Letters', date: 'May 10, 2024', status: 'Pending' },
    { event: 'Reporting Date', date: 'May 25, 2024', status: 'Pending' },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] bg-gradient-to-r from-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-4"
            >
              Admissions
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
              Begin Your Journey to Excellence
            </motion.p>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="relative z-20 py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 -mt-24">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-xl text-center"
            >
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={28} className="text-amber-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Call Admissions Office</h3>
              <p className="text-amber-600 font-semibold">+254 712 345 678</p>
              <p className="text-gray-500 text-sm">Mon-Fri, 8AM - 4PM</p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-xl text-center"
            >
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={28} className="text-amber-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Email Us</h3>
              <p className="text-amber-600 font-semibold">admissions@countyhigh.ac.ke</p>
              <p className="text-gray-500 text-sm">24/7 response within 48 hours</p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-xl text-center"
            >
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download size={28} className="text-amber-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Download Forms</h3>
              <p className="text-amber-600 font-semibold cursor-pointer hover:underline">Application Form (PDF)</p>
              <p className="text-gray-500 text-sm">Print and fill manually</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['requirements', 'fees', 'scholarships', 'dates'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-amber-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Requirements Tab */}
          {activeTab === 'requirements' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Admission <span className="text-amber-600">Requirements</span></h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {requirements.map((req, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:shadow-md transition">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-800">{req.title}</h3>
                      <p className="text-gray-600 text-sm">{req.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-amber-50 p-6 rounded-xl border border-amber-200">
                <div className="flex items-start gap-3">
                  <AlertCircle className="text-amber-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-amber-800 mb-2">Important Notes</h3>
                    <ul className="space-y-1 text-amber-700 text-sm">
                      <li>• All documents must be certified by a Commissioner of Oaths</li>
                      <li>• Foreign students require valid study permits</li>
                      <li>• Transfer students must provide clearance from previous school</li>
                      <li>• Medical examination must be done within 3 months of application</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Fees Tab */}
          {activeTab === 'fees' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Fee <span className="text-amber-600">Structure</span></h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {fees.map((fee, idx) => (
                  <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{fee.level}</h3>
                    <p className="text-3xl font-bold text-amber-600 mb-2">{fee.amount}</p>
                    <p className="text-gray-500 text-sm">{fee.details}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-800 mb-3">Additional Fees (One-time)</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">Application Fee</span>
                    <span className="font-semibold">KSh 2,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">Admission Fee</span>
                    <span className="font-semibold">KSh 5,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">Uniform Set</span>
                    <span className="font-semibold">KSh 8,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">Books & Stationery</span>
                    <span className="font-semibold">KSh 5,000</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Scholarships Tab */}
          {activeTab === 'scholarships' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Scholarships & <span className="text-amber-600">Financial Aid</span></h2>
              <div className="grid md:grid-cols-2 gap-6">
                {scholarships.map((scholarship, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 hover:shadow-lg transition">
                    <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mb-4">
                      <scholarship.icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{scholarship.name}</h3>
                    <p className="text-gray-600 text-sm mb-2"><span className="font-semibold">Criteria:</span> {scholarship.criteria}</p>
                    <p className="text-amber-600 font-bold">{scholarship.coverage}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-600">For more information about scholarships, contact our financial aid office.</p>
              </div>
            </motion.div>
          )}

          {/* Important Dates Tab */}
          {activeTab === 'dates' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Important <span className="text-amber-600">Dates</span></h2>
              <div className="max-w-3xl mx-auto">
                {importantDates.map((date, idx) => (
                  <div key={idx} className="flex items-center justify-between py-4 border-b hover:bg-gray-50 px-4 rounded-lg transition">
                    <div>
                      <p className="font-semibold text-gray-800">{date.event}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                        <Calendar size={14} />
                        <span>{date.date}</span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      date.status === 'Open' ? 'bg-green-100 text-green-700' :
                      date.status === 'Upcoming' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {date.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-amber-600 text-sm font-semibold uppercase tracking-wider">How to Apply</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">Application <span className="text-amber-600">Process</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              Follow these simple steps to join County High School
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/4 right-0 w-full h-0.5 bg-amber-200 -z-10"></div>
                )}
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <step.icon size={28} className="text-white" />
                </div>
                <div className="text-2xl font-bold text-amber-600 mb-2">{step.number}</div>
                <h3 className="font-semibold text-gray-800 mb-1">{step.title}</h3>
                <p className="text-xs text-gray-500">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4">Ready to Apply?</h3>
            <p className="text-lg mb-6">Take the first step towards an excellent education</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="px-8 py-3 bg-white text-amber-600 font-bold rounded-full hover:shadow-lg transition flex items-center gap-2">
                Apply Online
                <ChevronRight size={18} />
              </button>
              <button className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/30 transition border border-white/40">
                Download Application Form
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Import missing icons
import { Award, Trophy, Heart } from 'lucide-react';

export default Admissions;