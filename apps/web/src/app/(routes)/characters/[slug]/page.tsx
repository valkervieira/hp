import Link from "next/link";
import { PageWrapper } from "ui";
import { CharacterComponent } from "@/app/_components";
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
      <nav className="flex gap-4 text-white">
        <Link href="/characters/full">All Characters</Link>
        <Link href="/characters/students">Students</Link>
        <Link href="/characters/staff">Staff</Link>
      </nav>
      <span className="text-white">count: {data?.length}</span>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
        {data?.map((character) => (
          <li>
            <CharacterComponent {...character} />
          </li>
        ))}
      </ul>
    </PageWrapper>
  );
}
