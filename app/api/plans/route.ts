const kv=await Deno.openKv();

export async function GET() {
  const data=(await kv.get(["data"])).value ?? {};

  return Response.json(data);
}

export async function POST(req: Request) {
  const payload=await req.json();

  console.log(payload)
  const res=await kv.set(["data"],payload);

  return Response.json({
    success: res.ok,
  });
}



