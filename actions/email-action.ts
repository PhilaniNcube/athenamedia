"use server";

import { z } from "zod";
import { EmailSchema } from "../utils/types";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);


export async function sendEmailAction(prevState:unknown, formData:FormData) {

  const validatedFields = EmailSchema.safeParse({
    email: formData.get("email"),
    name: formData.get("name"),
    message: formData.get("message"),
    phone: formData.get("phone"),
  })

  if (!validatedFields.success) {
    return {
      status: 400,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, name, message, phone } = validatedFields.data;

  const {data, error} = await resend.emails.send({
    from: "Athena Media <dev@athenamedia.co.za>",
    to: ["philani@athenamedia.co.za", "dev@athenamedia.co.za"],
    subject: "New message from Athena Media",
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
    html: `<div style="max-width: 600px; margin:auto">
      <h1>Name: ${name}</h1>
      <h2>Email: ${email}</h2>
      <h2>Phone: ${phone}</h2>
      <p>Message: ${message}</p>
    </div>`,
  })

  if (error) {
    return {
      status: 500,
      error: "An error occurred while sending the email",
    };
  }

  return {
    status: 200,
    message: "Email sent successfully",
  };


}
