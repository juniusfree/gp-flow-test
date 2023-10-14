export const POST = async (req: Request) => {
  const body = await req.json();
  console.log("body ", body);
  const res = await fetch("http://localhost:5000/user/register", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Failed to post data");
  }

  const data = await res.json();
  return Response.json(data);
};
