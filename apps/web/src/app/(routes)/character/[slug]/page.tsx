import { PageWrapper } from "ui";
import type { Character } from "@/app/types";
import { CharacterComponent } from "@/app/_components";

async function getData(id: string): Promise<Character[] | null> {
  const res = await fetch(`https://hp-api.onrender.com/api/character/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json() as Promise<CharacterInterface[] | null>;
}

export default async function Page({
  params,
}: {
  params: { slug: string };
}): Promise<JSX.Element> {
  const data = await getData(params.slug);

  if (!data) {
    return <p>no data</p>;
  }

  return (
    <PageWrapper>
      <CharacterComponent {...data[0]} />
    </PageWrapper>
  );
}
