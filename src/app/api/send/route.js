
import { Resend } from 'resend';

const resend = new Resend("re_GbK4o3CY_6A5Hs21DVEs5fU4ai8bG7yKv");

export async function POST(req, res) {
  const body = await req.json();
  const {email, subject, message} = body;
  
  try {
    const { data, error } = await resend.emails.send({
      from: "rimsha <onboarding@resend.dev>",
      to: ['adnanhuzaifa95@gmail.com' , email],
      subject: 'Hello world',
      react:
       <>
       <h1>{subject}</h1>
       <p>Thank you for contacting us!</p>
       <p>New message submitted:</p>
      <p>{message}</p>
      </>
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
