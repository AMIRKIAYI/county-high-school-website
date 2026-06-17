import React from 'react';
import { Phone, Mail, MapPin, Award, Users, BookOpen, Calendar, TrendingUp, Shield, Sparkles, ChevronRight, CheckCircle, ArrowRight, GraduationCap, Globe, Heart, Star, BarChart3, Building2, Trophy, Clock, Target, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroCarousel from '../components/HeroCarousel';

// Hero images
const heroImages = [
  {
    image: '/images/hero/Image.png'
  },
  {
    image: '/images/hero/image1.png'
  },
  {
    image: '/images/hero/image7.png'
  },
  {
    image: '/images/hero/image8.png'
  },
  {
    image: '/images/hero/image9.png'
  },
  {
    image: '/images/hero/image.png'
  },
];

const Home: React.FC = () => {
  // Hardcoded school information
  const schoolInfo = {
    name: 'County High School',
    type: "Boys' School",
    category: 'County School',
    level: 'Secondary',
    knecCode: '45801103',
    ownership: 'Public/Government owned',
    phone: '+254 712 345 678',
    postalAddress: 'P.O Box 251, Garissa',
    email: 'info@countyhighschool.ac.ke',
    motto: 'Strive to Excel',
    established: 1978,
    location: 'Garissa County',
    sponsorship: 'Religious Institution'
  };

  const features = [
    { icon: Award, title: 'Academic Excellence', desc: 'Consistent top performance in KCSE with 90% university transition rate', color: 'from-amber-600 to-amber-500', bgHover: 'hover:bg-amber-50' },
    { icon: Users, title: 'Moral & Discipline', desc: 'Strong values and character development through mentorship programs', color: 'from-blue-700 to-blue-600', bgHover: 'hover:bg-blue-50' },
    { icon: BookOpen, title: 'Modern Facilities', desc: 'State-of-the-art labs, digital library, and sports complexes', color: 'from-emerald-600 to-emerald-500', bgHover: 'hover:bg-emerald-50' },
    { icon: Calendar, title: 'Co-curricular', desc: 'Over 20 clubs and societies for holistic development', color: 'from-purple-600 to-purple-500', bgHover: 'hover:bg-purple-50' },
  ];

  const stats = [
    { number: '45+', label: 'Years of Excellence', icon: TrendingUp, description: 'Since 1978' },
    { number: '3,000+', label: 'Alumni Network', icon: Users, description: 'Global impact' },
    { number: '98%', label: 'Exam Pass Rate', icon: Award, description: 'KCSE A-C' },
    { number: '50+', label: 'Qualified Teachers', icon: BookOpen, description: 'Expert faculty' },
  ];

  const programs = [
    { name: 'STEM Program', description: 'Science, Technology, Engineering & Mathematics', icon: GraduationCap, color: 'bg-gradient-to-br from-blue-500 to-cyan-500' },
    { name: 'Humanities', description: 'History, Literature, Languages & Arts', icon: Globe, color: 'bg-gradient-to-br from-amber-500 to-orange-500' },
    { name: 'Business Studies', description: 'Commerce, Economics & Accounting', icon: Award, color: 'bg-gradient-to-br from-emerald-500 to-teal-500' },
    { name: 'Sports Academy', description: 'Professional sports training & development', icon: Heart, color: 'bg-gradient-to-br from-rose-500 to-red-500' },
  ];

  const testimonials = [
    { name: 'Dr. James Mwangi', role: 'Alumnus, Class of 1995', text: 'County High School shaped my character and instilled discipline that has guided my entire career.', rating: 5 },
    { name: 'Mr. Peter Okoth', role: 'Parent', text: 'The transformation in my son\'s academic performance and behavior has been remarkable.', rating: 5 },
    { name: 'Prof. Sarah Wanjiku', role: 'Education Consultant', text: 'One of the finest boys\' schools in the region with excellent academic standards.', rating: 5 },
  ];

  const achievements = [
    { year: '2023', title: 'Best Performing School', region: 'Garissa County', icon: Trophy },
    { year: '2022', title: 'Excellence in STEM', region: 'National Recognition', icon: BarChart3 },
    { year: '2021', title: 'Cleanest School', region: 'County Award', icon: Building2 },
  ];

  const upcomingEvents = [
    { date: '15 Mar', title: 'Admissions Open Day', time: '9:00 AM - 3:00 PM', type: 'important' },
    { date: '22 Mar', title: 'Parent-Teacher Meeting', time: '8:00 AM - 1:00 PM', type: 'regular' },
    { date: '05 Apr', title: 'Inter-School Sports', time: '10:00 AM - 4:00 PM', type: 'sports' },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen max-h-[900px] overflow-hidden">
        <HeroCarousel slides={heroImages} autoPlayInterval={6000} />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 from-black/80 via-black/50 to-black/30 z-[5]"></div>
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center z-10">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-12">
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 max-w-3xl"
              >
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full pl-2 pr-4 py-1.5 border border-white/20 mb-6 shadow-lg">
                  <div className="bg-amber-500 rounded-full p-1">
                    <Sparkles size={14} className="text-white" />
                  </div>
                  <span className="text-xs text-white font-medium tracking-wide">Since 1978 | National School of Excellence</span>
                </div>
                
                <motion.h1 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-4 drop-shadow-2xl"
                >
                  {schoolInfo.name}
                </motion.h1>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex items-center gap-3 mb-5"
                >
                  <div className="w-12 h-px bg-amber-400/60"></div>
                  <p className="text-amber-300 text-xl font-semibold italic tracking-wide">
                    "{schoolInfo.motto}"
                  </p>
                  <div className="w-12 h-px bg-amber-400/60"></div>
                </motion.div>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-white/95 text-base md:text-lg leading-relaxed max-w-xl mb-8"
                >
                  A premier boys' secondary school in {schoolInfo.location}, nurturing young men 
                  into future leaders through quality education and character formation.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex gap-4 flex-wrap"
                >
                  <motion.button 
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group px-6 py-3 bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 text-sm md:text-base"
                  >
                    Enroll Now 
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group px-6 py-3 bg-white/15 backdrop-blur-md text-white font-semibold rounded-full hover:bg-white/25 transition-all duration-300 border border-white/40 flex items-center gap-2 text-sm md:text-base"
                  >
                    Virtual Tour
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </motion.button>
                </motion.div>
              </motion.div>
              
              {/* Right Column - Info Cards */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hidden lg:block flex-1 max-w-sm"
              >
                <div className="bg-white/20  rounded-2xl p-6 border border-white/20 shadow-2xl">
                  <h3 className="text-white text-sm font-semibold mb-4 text-center uppercase tracking-wider">Quick Information</h3>
                  <div className="space-y-3">
                    {[
                      { icon: Shield, label: 'Accreditation', value: 'Government Accredited' },
                      { icon: Award, label: 'KNEC Code', value: schoolInfo.knecCode },
                      { icon: Users, label: 'Status', value: 'Center of Excellence' },
                      { icon: BookOpen, label: 'Facilities', value: 'Modern Facilities Available' },
                      { icon: Target, label: 'Focus', value: 'Holistic Development' },
                    ].map((item, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                        className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                      >
                        <div className="p-1.5 bg-amber-500/20 rounded-lg group-hover:bg-amber-500/30 transition">
                          <item.icon className="text-amber-400" size={16} />
                        </div>
                        <div className="flex-1">
                          <p className="text-white/60 text-[10px] uppercase tracking-wider">{item.label}</p>
                          <p className="text-white text-xs font-medium">{item.value}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/50 text-[10px] tracking-[0.2em] uppercase">Explore</span>
            <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center relative">
              <div className="absolute w-0.5 h-2 bg-amber-400 rounded-full top-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-24">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group border border-gray-100 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon size={32} className="text-amber-600" />
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-1">{stat.number}</div>
                <div className="text-sm font-semibold text-gray-700 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-400">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <Sparkles size={16} />
                <span>Why Choose Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2">What Makes Us <span className="text-amber-600">Unique?</span></h2>
              <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-lg">
                Discover what makes County High School the premier choice for boys' secondary education
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 ${feature.bgHover}`}
              >
                <div className={`bg-gradient-to-br ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md`}>
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-amber-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <GraduationCap size={16} />
                <span>Academic Excellence</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2">Our Core <span className="text-amber-600">Programs</span></h2>
              <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-lg">
                Comprehensive curriculum designed to develop well-rounded future leaders
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-amber-200"
              >
                <div className={`${program.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md`}>
                  <program.icon className="text-white" size={36} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{program.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History & Heritage Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
                <Clock size={16} />
                <span>Our Story</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-amber-400">Heritage</span></h2>
              <p className="text-gray-300 mb-4 leading-relaxed text-lg">
                Established in <span className="font-semibold text-amber-400">{schoolInfo.established}</span>, 
                County High School has been a beacon of academic excellence and moral development for over four decades.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Sponsored by a {schoolInfo.sponsorship.toLowerCase()}, we blend quality education 
                with strong values to produce well-rounded young men who excel in all spheres of life.
              </p>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border-l-4 border-amber-400">
                <p className="font-semibold text-amber-300 mb-2">Our Motto</p>
                <p className="text-2xl italic text-white">"{schoolInfo.motto}"</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-5"
            >
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-6 rounded-2xl hover:scale-105 transition duration-300 shadow-xl">
                <Trophy size={32} className="mb-3 text-white/90" />
                <div className="text-4xl font-bold mb-1">45+</div>
                <div className="text-sm text-white/90">Years of Excellence</div>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-6 rounded-2xl hover:scale-105 transition duration-300 shadow-xl">
                <Users size={32} className="mb-3 text-white/90" />
                <div className="text-4xl font-bold mb-1">5,000+</div>
                <div className="text-sm text-white/90">Students Graduated</div>
              </div>
              <div className="bg-gradient-to-br from-emerald-600 to-teal-600 p-6 rounded-2xl hover:scale-105 transition duration-300 shadow-xl col-span-2">
                <Building2 size={32} className="mb-3 text-white/90" />
                <div className="text-2xl font-bold mb-1">Public/Government Owned</div>
                <div className="text-sm text-white/90">Quality education accessible to all</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <Star size={16} />
                <span>Testimonials</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2">What <span className="text-amber-600">People Say</span></h2>
              <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-lg">
                Hear from our alumni, parents, and education partners about their experience
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 relative"
              >
                <div className="absolute -top-3 -left-3 text-6xl text-amber-100">"</div>
                <div className="flex items-center gap-1 mb-4 justify-end">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed relative z-10">{testimonial.text}</p>
                <div className="border-t pt-4 mt-2">
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Events Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Achievements */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <Trophy size={16} />
                <span>Our Achievements</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Recognized Excellence</h3>
              <div className="space-y-4">
                {achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                      <achievement.icon className="text-amber-600" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">{achievement.year}</span>
                        <span className="text-xs text-gray-400">{achievement.region}</span>
                      </div>
                      <p className="font-semibold text-gray-800">{achievement.title}</p>
                    </div>
                    <CheckCircle size={20} className="text-green-500" />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Upcoming Events */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <Calendar size={16} />
                <span>Stay Updated</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Upcoming Events</h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all group cursor-pointer">
                    <div className="text-center min-w-[60px]">
                      <div className="text-2xl font-bold text-amber-600">{event.date.split(' ')[0]}</div>
                      <div className="text-xs text-gray-400">{event.date.split(' ')[1]}</div>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 group-hover:text-amber-600 transition">{event.title}</p>
                      <p className="text-xs text-gray-400">{event.time}</p>
                    </div>
                    <ArrowRight size={18} className="text-amber-400 opacity-0 group-hover:opacity-100 transition" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-amber-600 to-orange-700">
        <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <GraduationCap size={64} className="mx-auto mb-6 text-white drop-shadow-lg" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Begin Your Journey Today</h2>
            <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto">
              Join County High School and become part of a legacy of excellence, discipline, and academic achievement.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-amber-600 font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2 text-base"
              >
                Apply for Admission
                <ChevronRight className="w-5 h-5" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/30 transition-all duration-300 border border-white/40 text-base"
              >
                Download Prospectus
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Phone, label: 'Call Us', value: schoolInfo.phone },
              { icon: Mail, label: 'Email Us', value: schoolInfo.email },
              { icon: MapPin, label: 'Visit Us', value: schoolInfo.postalAddress },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-4 group cursor-pointer"
              >
                <div className="p-3 bg-amber-500/20 rounded-full group-hover:bg-amber-500/30 transition-colors">
                  <item.icon size={24} className="text-amber-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">{item.label}</p>
                  <p className="font-semibold text-white group-hover:text-amber-400 transition">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;