import { log } from "node:console";
import { Resend } from "resend";


const html_path=new URL("./index.html",import.meta.url);
const html=await Deno.readTextFile(html_path);

Deno.serve(async (req)=> {
  const path=new URL(req.url).pathname;
  if(path=="/xd") {
    const txt=await req.text();
    handle_email(txt);
  }

  return main();
});

function main() {
  return new Response(html,{
    headers: {
      "content-type": "text/html",
    },
  });
}

function handle_email(email: string) {
  const api_key=Deno.env.get("API_KEY");

  const resend = new Resend(api_key);
  log(api_key);

  resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'kakashiwebsite69@gmail.com',
    subject: 'Plan',
    html: email
  });
}





