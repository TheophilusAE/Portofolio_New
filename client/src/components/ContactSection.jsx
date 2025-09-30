import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';
import emailjs from '@emailjs/browser';
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaInstagram, 
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone
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
      label: "GitHub"
    },
    {
      icon: <FaLinkedinIn size={24} />,
      url: "https://www.linkedin.com/in/theophilus-alexander-elvan-94a6a8291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      label: "LinkedIn"
    },
    {
      icon: <FaInstagram size={24} />,
      url: "https://www.instagram.com/thoouuuuuu?igsh=ajlnNml4M3c0MjAx",
      label: "Instagram"
    }
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope size={24} />,
      text: "Theophilus.elvan@binus.ac.id",
      label: "Binus Email"
    },
    {
      icon: <FaEnvelope size={24} />,
      text: "Theophilus.a.e.k@gmail.com",
      label: "Email"
    },
    {
      icon: <FaPhone size={24} />,
      text: "+62 811-3602-527",
      label: "Phone"
    },
    {
      icon: <FaMapMarkerAlt size={24} />,
      text: "Malang, Indonesia",
      label: "Location"
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

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Get In Touch
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-400 text-lg"
            >
              Interested in working together? Let's discuss opportunities!
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col h-full justify-between"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  Ready to contribute to your team
                </h3>
                <p className="text-gray-400 mb-8">
                  I'm actively seeking internship and full-time opportunities in software development, 
                  data analysis, and education technology. Whether you're hiring for a specific role 
                  or exploring potential collaborations, I'd love to discuss how I can contribute to your organization.
                </p>

                {/* Contact Details */}
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-blue-400">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{info.label}</p>
                        <p className="text-lg">{info.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-auto pt-8">
                <h4 className="text-xl font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800 rounded-2xl p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
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
                      className={`w-full px-4 py-3 rounded-lg bg-gray-700 border text-white focus:outline-none transition-colors ${
                        formErrors.fullName ? 'border-red-500 focus:border-red-400' : 'border-gray-600 focus:border-blue-500'
                      }`}
                      placeholder="Your full name"
                    />
                    {formErrors.fullName && <p className="text-red-400 text-sm mt-1">{formErrors.fullName}</p>}
                  </div>
                  <div>
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
                      className={`w-full px-4 py-3 rounded-lg bg-gray-700 border text-white focus:outline-none transition-colors ${
                        formErrors.email ? 'border-red-500 focus:border-red-400' : 'border-gray-600 focus:border-blue-500'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {formErrors.email && <p className="text-red-400 text-sm mt-1">{formErrors.email}</p>}
                  </div>
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
                      className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-500 transition-colors"
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
                      className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-500 transition-colors"
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
                    className={`w-full px-4 py-3 rounded-lg bg-gray-700 border text-white focus:outline-none transition-colors ${
                      formErrors.inquiryType ? 'border-red-500 focus:border-red-400' : 'border-gray-600 focus:border-blue-500'
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
                  {formErrors.inquiryType && <p className="text-red-400 text-sm mt-1">{formErrors.inquiryType}</p>}
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
                    className={`w-full px-4 py-3 rounded-lg bg-gray-700 border text-white focus:outline-none transition-colors resize-none ${
                      formErrors.message ? 'border-red-500 focus:border-red-400' : 'border-gray-600 focus:border-blue-500'
                    }`}
                    placeholder="Please describe the opportunity, role requirements, or any questions you have. I'd love to learn more about how I can contribute to your team!"
                  />
                  {formErrors.message && <p className="text-red-400 text-sm mt-1">{formErrors.message}</p>}
                </div>
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg mb-4 ${
                      submitStatus === 'success' 
                        ? 'bg-green-500/20 border border-green-500/30 text-green-300'
                        : 'bg-red-500/20 border border-red-500/30 text-red-300'
                    }`}
                  >
                    {submitStatus === 'success' 
                      ? '✅ Thank you for reaching out! I\'ll review your message and respond within 24 hours.'
                      : '❌ Failed to send message. Please try again or contact me directly via email.'
                    }
                  </motion.div>
                )}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                    isSubmitting 
                      ? 'bg-gray-600 cursor-not-allowed text-gray-400'
                      : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg hover:shadow-blue-500/30'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      {/* Floating Contact Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
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
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          >
            <FaEnvelope className="text-white" size={20} />
          </motion.button>
        </Link>
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Quick Contact
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;