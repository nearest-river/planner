
const html_path=new URL("./index.html",import.meta.url);
const html=await Deno.readTextFile(html_path);
const plans=new Array<string>();


Deno.serve(async (req)=> {
  const path=new URL(req.url).pathname;

  const txt=await req.text();
  switch(path) {
    case "/add":
      add(txt);
    break;
    case "/clear":
      if(txt=="do it nigga") {
        delete_all();
      }
    break;
    case "/view": {
      return new Response(JSON.stringify(plans),{
        headers: {
          "content-type": "application/json",
        },
      });
    }
    default:
    break;
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

function delete_all() {
  plans.length=0;
}

function add(txt: string) {
  plans.push(txt);
}




