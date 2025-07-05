'use server';

import { Resend } from 'resend';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export async function submitContactForm(formData: ContactFormData) {
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set. Email sending is disabled.');
    return { 
      success: false, 
      message: 'The email service is currently unavailable. Please try again later.' 
    };
  }
  
  if (!formData.name || !formData.email || !formData.message) {
    return { success: false, message: 'Please make sure all fields are filled.' };
  }
  
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['alif.fauzan.1994@gmail.com'], 
      subject: `New Message from Portfolio - ${formData.name}`,
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
