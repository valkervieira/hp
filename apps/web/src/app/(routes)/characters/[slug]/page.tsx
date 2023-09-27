import Link from "next/link";
import { PageWrapper } from "ui";
import { CharacterItem } from "@/app/_components";
import type { Character } from "@/app/types";

const CharacterListMap = {
  full: "",
  staff: "staff",
  students: "students",
};

async function getData(list: string): Promise<Character[] | null> {
  const res = await fetch(
    `https://hp-api.onrender.com/api/characters/${
      CharacterListMap[list] ? CharacterListMap[list] : ""
    }`
  );

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

  return (
    <PageWrapper className="flex flex-col gap-4">
      <nav className="flex gap-4">
        <Link href="/characters/full">All Characters</Link>
        <Link href="/characters/students">Students</Link>
        <Link href="/characters/staff">Staff</Link>
      </nav>
      <ul className="flex flex-col gap-2">
        {data?.map((character) => <CharacterItem {...character} />)}
      </ul>
    </PageWrapper>
  );
}
