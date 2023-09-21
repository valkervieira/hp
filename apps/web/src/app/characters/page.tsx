import Link from "next/link";
import { Card } from "ui";

interface Wand {
  wood: string;
  core: string;
  length: number | null
}

interface Character {
  id: string;
  name: string;
  alternate_names: string[] | [];
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string;
  yearOfBirth: number;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: Wand;
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: false;
  actor: string;
  alternate_actors: string[] | [];
  alive: boolean;
  image: string;
}

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
      <Card href="https://www.google.com" title="Title example">
        Foo
      </Card>

      <ul>
        {data?.map((item) => <CharacterItem id={item.id} key={item.id} name={item.name}/>)}
      </ul>
    </main>
  );
}
