'use server';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export async function submitContactForm(formData: ContactFormData) {
  // Since we removed Zod, we do a very basic check on the server.
  // The client-side form has `required` fields, so this is a fallback.
  if (!formData.name || !formData.email || !formData.message) {
    return { success: false, message: 'Please make sure all fields are filled.' };
  }

  // Here you would typically send an email, save to a database, etc.
  // For this example, we'll just log it to the server console.
  console.log('New contact form submission:');
  console.log(formData);

  return { success: true, message: 'Message sent successfully!' };
}
