export const getInvestments = async () => {
  const res = await fetch("http://localhost:5000/investments");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data;
};

export const postWaitingList = async (body) => {
  console.log("body postWaitingList", body);
  const res = await fetch("http://localhost:3000/api", {
    method: "POST",
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    throw new Error("Failed to post data");
  }

  // const data = await res.json();
  // return data;
};
