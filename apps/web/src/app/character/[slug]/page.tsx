import type { Character } from "../../../types";

async function getData(id: string): Promise<Character[] | null> {
  const res = await fetch(`https://hp-api.onrender.com/api/character/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json() as Promise<Character[] | null>;
}

export default async function Page({
  params,
}: {
  params: { slug: string };
}): Promise<JSX.Element> {
  const data = await getData(params.slug);

  if(!data) {
    return (<p>no data</p>)
  }

  return (
    <p>name: {data[0].name}</p>
  )
}
