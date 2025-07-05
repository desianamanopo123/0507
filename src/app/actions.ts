'use server';

import { Resend } from 'resend';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

// Inisialisasi Resend dengan API Key Anda
const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: ContactFormData) {
  if (!formData.name || !formData.email || !formData.message) {
    return { success: false, message: 'Please make sure all fields are filled.' };
  }

  try {
    const data = await resend.emails.send({
      // Alamat 'from' ini disediakan oleh Resend untuk testing dan pengembangan.
      // Setelah Anda memverifikasi domain Anda di Resend, Anda bisa mengubahnya
      // menjadi 'noreply@domainanda.com'.
      from: 'onboarding@resend.dev',
      
      // Ganti ini dengan alamat email pribadi Anda tempat Anda ingin menerima pesan.
      to: ['alif.fauzan.1994@gmail.com'], 
      
      subject: `Pesan Baru dari Portofolio - ${formData.name}`,
      
      // Ini adalah template email yang akan Anda terima.
      html: `
        <h1>Pesan Baru dari Formulir Kontak</h1>
        <p><strong>Nama:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <hr>
        <h2>Pesan:</h2>
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
