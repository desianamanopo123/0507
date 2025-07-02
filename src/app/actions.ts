'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function submitContactForm(formData: unknown) {
  const parsed = contactSchema.safeParse(formData);

  if (!parsed.success) {
    return { success: false, message: 'Invalid form data.' };
  }

  // Here you would typically send an email, save to a database, etc.
  // For this example, we'll just log it to the server console.
  console.log('New contact form submission:');
  console.log(parsed.data);

  return { success: true, message: 'Message sent successfully!' };
}
