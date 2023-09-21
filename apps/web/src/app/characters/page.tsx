import Link from "next/link";
import type { Character } from "../../types";

async function getData(): Promise<Character[] | null> {
  const res = await fetch(`https://hp-api.onrender.com/api/characters`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json() as Promise<Character[] | null>;
}


function CharacterItem({ id, name }: Pick<Character, 'name' | 'id'>): JSX.Element {

  return (
    <li>
      <Link href={`/character/${id}`}>
      {name}
      </Link>
    </li>
  )
}

export default async function Page(): Promise<JSX.Element> {
  const data = await getData();

  return (
    <main>
      <ul>
        {data?.map((item) => <CharacterItem id={item.id} key={item.id} name={item.name}/>)}
      </ul>
    </main>
  );
}
