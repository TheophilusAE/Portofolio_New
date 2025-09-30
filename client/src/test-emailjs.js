// EmailJS Test Component
// Use this to test your EmailJS setup before using the main contact form

import emailjs from '@emailjs/browser';

// Test function - you can run this in browser console
window.testEmailJS = async () => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  console.log('Testing EmailJS with:');
  console.log('Service ID:', serviceId);
  console.log('Template ID:', templateId);
  console.log('Public Key:', publicKey);

  if (serviceId === 'your_service_id_here' || !serviceId) {
    console.error('❌ Please update your VITE_EMAILJS_SERVICE_ID in .env file');
    return;
  }

  if (templateId === 'your_template_id_here' || !templateId) {
    console.error('❌ Please update your VITE_EMAILJS_TEMPLATE_ID in .env file');
    return;
  }

  if (publicKey === 'your_public_key_here' || !publicKey) {
    console.error('❌ Please update your VITE_EMAILJS_PUBLIC_KEY in .env file');
    return;
  }

  try {
    const result = await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: 'Test User',
        from_email: 'test@example.com',
        company: 'Test Company',
        position: 'Software Developer',
        inquiry_type: 'Testing',
        message: 'This is a test message from your portfolio contact form setup!',
        to_name: 'Theophilus Alexander Elvan',
        reply_to: 'test@example.com'
      },
      publicKey
    );

    console.log('✅ EmailJS test successful!', result);
    console.log('✅ Check your email inbox for the test message');
    alert('✅ Test email sent successfully! Check your inbox.');
    
  } catch (error) {
    console.error('❌ EmailJS test failed:', error);
    alert('❌ Test failed. Check console for details.');
  }
};

// Instructions
console.log(`
🧪 EmailJS Test Setup Complete!

To test your EmailJS setup:
1. Make sure you've updated your .env file with real EmailJS credentials
2. Restart your dev server (npm run dev)  
3. Open browser console (F12)
4. Type: testEmailJS()
5. Press Enter
6. Check your email inbox

If the test passes, your contact form will work perfectly! 🎉
`);

export default null;