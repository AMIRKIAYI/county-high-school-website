import React from 'react';
import { Clock, Target, Shield, Users, BookOpen, Award, Heart, Eye, ChevronRight, CheckCircle, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const schoolInfo = {
    name: 'County High School',
    established: 1978,
    motto: 'Strive to Excel',
    location: 'Garissa County',
    sponsorship: 'Religious Institution'
  };

  const values = [
    { icon: Target, title: 'Excellence', desc: 'Striving for the highest standards in academics and character' },
    { icon: Heart, title: 'Integrity', desc: 'Upholding honesty and moral values in all endeavors' },
    { icon: Users, title: 'Community', desc: 'Fostering a supportive and inclusive school family' },
    { icon: Shield, title: 'Discipline', desc: 'Building character through structured guidance' },
  ];

  const leadership = [
    { name: 'Mr. John Kipchoge', role: 'Principal', qualification: 'M.Ed. Educational Leadership', experience: '15 years' },
    { name: 'Mrs. Sarah Mwikali', role: 'Deputy Principal - Academics', qualification: 'M.Sc. Curriculum Development', experience: '12 years' },
    { name: 'Mr. Ali Hassan', role: 'Deputy Principal - Administration', qualification: 'MBA, B.Ed.', experience: '10 years' },
    { name: 'Mrs. Grace Wanjiru', role: 'Head of Guidance & Counseling', qualification: 'M.A. Counseling Psychology', experience: '8 years' },
  ];

  const milestones = [
    { year: '1978', title: 'School Founded', description: 'Established as a boys\' secondary school in Garissa County' },
    { year: '1995', title: 'First KCSE Top Performer', description: 'Achieved first national ranking' },
    { year: '2005', title: 'Science Lab Expansion', description: 'Modern laboratories established' },
    { year: '2015', title: 'Digital Learning Initiative', description: 'Computer lab and e-learning introduced' },
    { year: '2020', title: 'Center of Excellence', description: 'Recognized as a regional center of excellence' },
    { year: '2023', title: 'ICT Integration', description: 'Full digital transformation completed' },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] bg-gradient-to-r from-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-4"
            >
              About Us
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
              Excellence, Integrity, and Character since 1978
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-amber-600 text-sm font-semibold uppercase tracking-wider">Our Story</span>
              <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">A Legacy of <span className="text-amber-600">Excellence</span></h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Established in <span className="font-semibold text-amber-600">{schoolInfo.established}</span>, 
                County High School has stood as a pillar of quality education in Garissa County for over four decades.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                What began as a modest institution has grown into a premier boys' secondary school, 
                renowned for academic excellence, moral discipline, and holistic development. Our journey 
                has been marked by continuous improvement, innovation, and an unwavering commitment to 
                shaping young men into future leaders.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Sponsored by a {schoolInfo.sponsorship.toLowerCase()}, we integrate strong values with 
                modern education, producing graduates who excel in universities, careers, and community service.
              </p>
              <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-500">
                <p className="text-amber-800 font-semibold mb-2">Our Guiding Philosophy</p>
                <p className="text-gray-700 italic">
                  "Every boy has the potential for greatness. Our role is to unlock that potential through 
                  quality education, strong discipline, and unwavering support."
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-6 rounded-xl text-white text-center">
                <div className="text-4xl font-bold mb-2">45+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-6 rounded-xl text-white text-center">
                <div className="text-4xl font-bold mb-2">5,000+</div>
                <div className="text-sm">Graduates</div>
              </div>
              <div className="bg-gradient-to-br from-emerald-600 to-teal-600 p-6 rounded-xl text-white text-center">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-sm">Pass Rate</div>
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-6 rounded-xl text-white text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-sm">Teachers</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                <Eye size={32} className="text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To be a center of academic excellence and moral integrity, producing well-rounded 
                young men who are leaders in their communities and beyond.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                <Target size={32} className="text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To provide quality, holistic education that nurtures intellectual growth, character 
                development, and spiritual values, preparing students for lifelong success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-amber-600 text-sm font-semibold uppercase tracking-wider">Our Foundation</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">Core <span className="text-amber-600">Values</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition group"
              >
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition">
                  <value.icon size={36} className="text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* School History Timeline */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-amber-600 text-sm font-semibold uppercase tracking-wider">Our Journey</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">Historical <span className="text-amber-600">Milestones</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              Key moments in our school's proud history
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-amber-200 hidden md:block"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`relative md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                      <div className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-bold mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-500 rounded-full border-4 border-white shadow"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-amber-600 text-sm font-semibold uppercase tracking-wider">Our Leaders</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">School <span className="text-amber-600">Leadership</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              Dedicated professionals committed to educational excellence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition group"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                  {leader.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-lg font-bold text-gray-800">{leader.name}</h3>
                <p className="text-amber-600 font-semibold text-sm mb-2">{leader.role}</p>
                <p className="text-gray-500 text-xs">{leader.qualification}</p>
                <p className="text-gray-400 text-xs mt-1">{leader.experience} experience</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4">Join Our Legacy of Excellence</h3>
            <p className="text-lg mb-6">Be part of a school that shapes future leaders</p>
            <button className="px-8 py-3 bg-white text-amber-600 font-bold rounded-full hover:shadow-lg transition flex items-center gap-2 mx-auto">
              Apply Now
              <ChevronRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;