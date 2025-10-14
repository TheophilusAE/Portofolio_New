import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';
import emailjs from '@emailjs/browser';
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaInstagram, 
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
  FaCheckCircle,
  FaTimesCircle
} from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    position: '',
    inquiryType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Invalid email format';
    if (!formData.inquiryType.trim()) errors.inquiryType = 'Please select inquiry type';
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const socialLinks = [
    {
      icon: <FaGithub size={24} />,
      url: "https://github.com/TheophilusAE",
      label: "GitHub",
      color: "hover:text-gray-300 hover:bg-gray-700"
    },
    {
      icon: <FaLinkedinIn size={24} />,
      url: "https://www.linkedin.com/in/theophilus-alexander-elvan-94a6a8291/",
      label: "LinkedIn",
      color: "hover:text-blue-400 hover:bg-blue-500/20"
    },
    {
      icon: <FaInstagram size={24} />,
      url: "https://www.instagram.com/thoouuuuuu?igsh=ajlnNml4M3c0MjAx",
      label: "Instagram",
      color: "hover:text-pink-400 hover:bg-pink-500/20"
    }
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope size={24} />,
      text: "Theophilus.elvan@binus.ac.id",
      label: "Binus Email",
      color: "text-blue-400"
    },
    {
      icon: <FaEnvelope size={24} />,
      text: "Theophilus.a.e.k@gmail.com",
      label: "Email",
      color: "text-purple-400"
    },
    {
      icon: <FaPhone size={24} />,
      text: "+62 811-3602-527",
      label: "Phone",
      color: "text-green-400"
    },
    {
      icon: <FaMapMarkerAlt size={24} />,
      text: "Malang, Indonesia",
      label: "Location",
      color: "text-cyan-400"
    }
  ];

  // EmailJS Configuration
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setFormErrors({});
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        company: formData.company || 'Not specified',
        position: formData.position || 'Not specified',
        inquiry_type: formData.inquiryType,
        message: formData.message,
        to_name: 'Theophilus Alexander Elvan',
        reply_to: formData.email
      };

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);
      
      // Reset form on success
      setFormData({ 
        fullName: '', 
        email: '', 
        company: '', 
        position: '', 
        inquiryType: '', 
        message: '' 
      });
      
      setSubmitStatus('success');
      setTimeout(() => setSubmitStatus(null), 8000);
      
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 8000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-transparent">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="grid-pattern absolute inset-0 opacity-10"></div>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-20"
          >
            <motion.h2
              whileHover={{ scale: 1.05 }}
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
            >
              Get In{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 text-transparent bg-clip-text">
                Touch
              </span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
            >
              Interested in working together? Let's discuss opportunities and create something amazing!
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto mt-6 rounded-full"
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col h-full justify-between"
            >
              <div>
                <motion.h3 
                  whileHover={{ x: 10 }}
                  className="text-3xl font-semibold mb-6 text-white"
                >
                  Ready to contribute to your{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                    team
                  </span>
                </motion.h3>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-gray-400 mb-12 text-lg leading-relaxed"
                >
                  I'm actively seeking internship and full-time opportunities in software development, 
                  data analysis, and education technology. Whether you're hiring for a specific role 
                  or exploring potential collaborations, I'd love to discuss how I can contribute to your organization.
                </motion.p>

                {/* Contact Details */}
                <motion.div 
                  variants={containerVariants}
                  className="space-y-6 mb-12"
                >
                  {contactInfo.map((info, index) => (
                    <motion.div 
                      key={index} 
                      variants={itemVariants}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="flex items-center space-x-4 p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800/70 hover:border-gray-700/80 transition-all duration-300"
                    >
                      <motion.div 
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                        className={`w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center ${info.color}`}
                      >
                        {info.icon}
                      </motion.div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">{info.label}</p>
                        <p className="text-lg text-white font-medium">{info.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Enhanced Social Links */}
              <motion.div 
                variants={itemVariants}
                className="mt-auto"
              >
                <h4 className="text-2xl font-semibold mb-6 text-white">
                  Follow My{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                    Journey
                  </span>
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ 
                        scale: 1.1, 
                        y: -5,
                        rotate: 5
                      }}
                      whileTap={{ scale: 0.9 }}
                      className={`group relative w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 transition-all duration-300 shadow-lg hover:shadow-xl ${social.color}`}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="relative z-10"
                      >
                        {social.icon}
                      </motion.div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced Contact Form */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="relative bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/70 shadow-2xl">
                {/* Form background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl"></div>
                
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="relative"
                    >
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-400 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-4 rounded-lg bg-gray-800/70 backdrop-blur-sm border text-white focus:outline-none transition-all duration-300 ${
                          formErrors.fullName ? 'border-red-500 focus:border-red-400' : 'border-gray-700 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20'
                        }`}
                        placeholder="Your full name"
                      />
                      {formErrors.fullName && (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm mt-1 flex items-center"
                        >
                          <FaTimesCircle className="mr-1" />
                          {formErrors.fullName}
                        </motion.p>
                      )}
                    </motion.div>
                    
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="relative"
                    >
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-4 rounded-lg bg-gray-800/70 backdrop-blur-sm border text-white focus:outline-none transition-all duration-300 ${
                          formErrors.email ? 'border-red-500 focus:border-red-400' : 'border-gray-700 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20'
                        }`}
                        placeholder="your.email@example.com"
                      />
                      {formErrors.email && (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm mt-1 flex items-center"
                        >
                          <FaTimesCircle className="mr-1" />
                          {formErrors.email}
                        </motion.p>
                      )}
                    </motion.div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-4 rounded-lg bg-gray-800/70 backdrop-blur-sm border border-gray-700 text-white focus:outline-none focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20 transition-all duration-300"
                        placeholder="Company or organization name"
                      />
                    </div>
                    <div>
                      <label htmlFor="position" className="block text-sm font-medium text-gray-400 mb-2">
                        Position/Role of Interest
                      </label>
                      <input
                        type="text"
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        className="w-full px-4 py-4 rounded-lg bg-gray-800/70 backdrop-blur-sm border border-gray-700 text-white focus:outline-none focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20 transition-all duration-300"
                        placeholder="e.g., Software Engineer Intern"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-400 mb-2">
                      Type of Inquiry *
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-4 rounded-lg bg-gray-800/70 backdrop-blur-sm border text-white focus:outline-none transition-all duration-300 ${
                        formErrors.inquiryType ? 'border-red-500 focus:border-red-400' : 'border-gray-700 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20'
                      }`}
                    >
                      <option value="">Select inquiry type</option>
                      <option value="internship">Internship Opportunity</option>
                      <option value="fulltime">Full-time Position</option>
                      <option value="freelance">Freelance/Contract Work</option>
                      <option value="collaboration">Project Collaboration</option>
                      <option value="networking">Professional Networking</option>
                      <option value="other">Other</option>
                    </select>
                    {formErrors.inquiryType && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-1 flex items-center"
                      >
                        <FaTimesCircle className="mr-1" />
                        {formErrors.inquiryType}
                      </motion.p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className={`w-full px-4 py-4 rounded-lg bg-gray-800/70 backdrop-blur-sm border text-white focus:outline-none transition-all duration-300 resize-none ${
                        formErrors.message ? 'border-red-500 focus:border-red-400' : 'border-gray-700 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20'
                      }`}
                      placeholder="Please describe the opportunity, role requirements, or any questions you have. I'd love to learn more about how I can contribute to your team!"
                    />
                    {formErrors.message && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-1 flex items-center"
                      >
                        <FaTimesCircle className="mr-1" />
                        {formErrors.message}
                      </motion.p>
                    )}
                  </div>
                  
                  {/* Status Messages */}
                  <AnimatePresence>
                    {submitStatus && (
                      <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.8 }}
                        className={`p-4 rounded-lg mb-4 flex items-center ${
                          submitStatus === 'success' 
                            ? 'bg-green-500/20 border border-green-500/30 text-green-300'
                            : 'bg-red-500/20 border border-red-500/30 text-red-300'
                        }`}
                      >
                        {submitStatus === 'success' ? (
                          <>
                            <FaCheckCircle className="mr-3 text-xl" />
                            Thank you for reaching out! I'll review your message and respond within 24 hours.
                          </>
                        ) : (
                          <>
                            <FaTimesCircle className="mr-3 text-xl" />
                            Failed to send message. Please try again or contact me directly via email.
                          </>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ 
                      scale: isSubmitting ? 1 : 1.02,
                      boxShadow: isSubmitting ? "none" : "0 20px 40px rgba(59, 130, 246, 0.4)"
                    }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                      isSubmitting 
                        ? 'bg-gray-600 cursor-not-allowed text-gray-400'
                        : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full"
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      {/* Enhanced Floating Contact Button */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-8 right-8 z-30"
      >
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="group"
        >
          <motion.button
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.6)"
            }}
            whileTap={{ scale: 0.9 }}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <FaEnvelope className="text-white relative z-10" size={24} />
          </motion.button>
        </Link>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-gray-900/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-gray-800"
        >
          Quick Contact
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;