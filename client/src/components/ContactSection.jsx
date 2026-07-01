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
import SectionHeader from './SectionHeader';

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
    { icon: <FaGithub size={18} />, url: "https://github.com/TheophilusAE", label: "GitHub" },
    { icon: <FaLinkedinIn size={18} />, url: "https://www.linkedin.com/in/theophilus-alexander-elvan-94a6a8291/", label: "LinkedIn" },
    { icon: <FaInstagram size={18} />, url: "https://www.instagram.com/thoouuuuuu?igsh=ajlnNml4M3c0MjAx", label: "Instagram" }
  ];

  const contactInfo = [
    { icon: <FaEnvelope size={18} />, text: "Theophilus.elvan@binus.ac.id", label: "Binus Email" },
    { icon: <FaEnvelope size={18} />, text: "Theophilus.a.e.k@gmail.com", label: "Email" },
    { icon: <FaPhone size={18} />, text: "+62 811-3602-527", label: "Phone" },
    { icon: <FaMapMarkerAlt size={18} />, text: "Malang, Indonesia", label: "Location" }
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

  const fieldClass = (hasError) =>
    `w-full bg-transparent border-0 border-b py-3 text-white placeholder-stone-600 focus:outline-none transition-colors duration-300 ${
      hasError ? 'border-red-500' : 'border-stone-700 focus:border-blue-400'
    }`;

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden bg-stone-950">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-6 md:px-10 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            number="05"
            eyebrow="Contact"
            title="Get In"
            highlight="Touch"
            subtitle="Interested in working together? Let's discuss opportunities and create something amazing!"
          />

          <div className="grid lg:grid-cols-12 gap-16">
            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 flex flex-col"
            >
              <motion.h3
                className="font-serif italic text-3xl text-white mb-6"
              >
                Ready to contribute to your{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                  team
                </span>
              </motion.h3>

              <motion.p
                variants={itemVariants}
                className="text-stone-400 mb-10 text-lg leading-relaxed"
              >
                I'm actively seeking internship and full-time opportunities in software development,
                data analysis, and education technology. Whether you're hiring for a specific role
                or exploring potential collaborations, I'd love to discuss how I can contribute to your organization.
              </motion.p>

              {/* Contact Details — plain list */}
              <motion.div
                variants={containerVariants}
                className="divide-y divide-stone-800 border-t border-stone-800 mb-12"
              >
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-4 py-4 text-blue-400"
                  >
                    {info.icon}
                    <div>
                      <p className="text-xs text-stone-500 uppercase tracking-widest mb-0.5">{info.label}</p>
                      <p className="text-base text-white font-medium">{info.text}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants} className="mt-auto">
                <span className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-4 block">
                  Follow My Journey
                </span>
                <div className="flex gap-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      className="text-stone-400 hover:text-blue-400 transition-colors duration-300"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form — underline inputs, no card chrome */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-7"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="fullName" className="block text-xs uppercase tracking-widest text-stone-500 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className={fieldClass(formErrors.fullName)}
                      placeholder="Your full name"
                    />
                    {formErrors.fullName && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-2 flex items-center"
                      >
                        <FaTimesCircle className="mr-1" />
                        {formErrors.fullName}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-widest text-stone-500 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={fieldClass(formErrors.email)}
                      placeholder="your.email@example.com"
                    />
                    {formErrors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-2 flex items-center"
                      >
                        <FaTimesCircle className="mr-1" />
                        {formErrors.email}
                      </motion.p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="company" className="block text-xs uppercase tracking-widest text-stone-500 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={fieldClass(false)}
                      placeholder="Company or organization name"
                    />
                  </div>
                  <div>
                    <label htmlFor="position" className="block text-xs uppercase tracking-widest text-stone-500 mb-2">
                      Position/Role of Interest
                    </label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className={fieldClass(false)}
                      placeholder="e.g., Software Engineer Intern"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-xs uppercase tracking-widest text-stone-500 mb-2">
                    Type of Inquiry *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                    className={fieldClass(formErrors.inquiryType)}
                  >
                    <option value="" className="bg-stone-900">Select inquiry type</option>
                    <option value="internship" className="bg-stone-900">Internship Opportunity</option>
                    <option value="fulltime" className="bg-stone-900">Full-time Position</option>
                    <option value="freelance" className="bg-stone-900">Freelance/Contract Work</option>
                    <option value="collaboration" className="bg-stone-900">Project Collaboration</option>
                    <option value="networking" className="bg-stone-900">Professional Networking</option>
                    <option value="other" className="bg-stone-900">Other</option>
                  </select>
                  {formErrors.inquiryType && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-2 flex items-center"
                    >
                      <FaTimesCircle className="mr-1" />
                      {formErrors.inquiryType}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-widest text-stone-500 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`${fieldClass(formErrors.message)} resize-none`}
                    placeholder="Please describe the opportunity, role requirements, or any questions you have. I'd love to learn more about how I can contribute to your team!"
                  />
                  {formErrors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-2 flex items-center"
                    >
                      <FaTimesCircle className="mr-1" />
                      {formErrors.message}
                    </motion.p>
                  )}
                </div>

                <AnimatePresence>
                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className={`p-4 flex items-center border ${
                        submitStatus === 'success'
                          ? 'border-green-500/30 text-green-300'
                          : 'border-red-500/30 text-red-300'
                      }`}
                    >
                      {submitStatus === 'success' ? (
                        <>
                          <FaCheckCircle className="mr-3 text-xl flex-shrink-0" />
                          Thank you for reaching out! I'll review your message and respond within 24 hours.
                        </>
                      ) : (
                        <>
                          <FaTimesCircle className="mr-3 text-xl flex-shrink-0" />
                          Failed to send message. Please try again or contact me directly via email.
                        </>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`btn-primary w-full sm:w-auto ${isSubmitting ? 'opacity-60 cursor-not-allowed pointer-events-none' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/40 border-t-transparent rounded-full"
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
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Minimal floating contact shortcut */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-8 right-8 z-30"
      >
        <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
          <motion.button
            whileHover={{ scale: 1.1, borderColor: 'rgb(251, 191, 36)' }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 rounded-full border border-stone-700 bg-stone-950/80 backdrop-blur-sm text-stone-300 hover:text-blue-400 transition-colors duration-300 flex items-center justify-center"
            aria-label="Scroll to contact form"
          >
            <FaEnvelope size={18} />
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
};

export default ContactSection;
