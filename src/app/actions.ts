'use server';

import { Resend } from 'resend';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export async function submitContactForm(formData: ContactFormData) {
  const apiKey = process.env.RESEND_API_KEY;
  const emailTo = process.env.EMAIL_TO;

  if (!apiKey || !emailTo) {
    console.error('RESEND_API_KEY or EMAIL_TO is not set. Email sending is disabled.');
    return { 
      success: false, 
      message: 'The email service is currently unavailable. Please try again later.' 
    };
  }
  
  if (!formData.name || !formData.email || !formData.message) {
    return { success: false, message: 'Please make sure all fields are filled.' };
  }
  
  const resend = new Resend(apiKey);

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [emailTo], 
      subject: `New Message from Portfolio - ${formData.name}`,
      reply_to: formData.email,
      html: `
        <h1>New message from Contact Form</h1>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <hr>
        <h2>Message:</h2>
        <p>${formData.message}</p>
      `
    });

    console.log('Email sent successfully:', data);
    return { success: true, message: 'Message sent successfully!' };

  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Sorry, something went wrong while sending the message.' };
  }
}
