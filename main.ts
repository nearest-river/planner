

async function main(): Promise<Response> {
  const html_path=new URL("./index.html",import.meta.url);
  const html=await Deno.readTextFile(html_path);

  return new Response(html,{
    headers: {
      "content-type": "text/html",
    },
  });
}

Deno.serve(main)


