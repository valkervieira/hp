import { Character, PageWrapper } from "ui";
import Image from "next/image";
import type { Character as CharacterInterface } from "../../../types";

async function getData(id: string): Promise<CharacterInterface[] | null> {
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
      <Character>
        <Character.Name>{data[0].name}</Character.Name>
        <Character.Image>
          <Image
            alt={data[0].name}
            height={100}
            src={data[0].image}
            width={100}
          />
        </Character.Image>
      </Character>
    </PageWrapper>
  );
}
