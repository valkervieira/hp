import { PageWrapper } from "ui"
import type { Spell } from "../../types"


function SpellItem({name, description}: Omit<Spell, 'id'>): JSX.Element {
  return (
    <li className="p-2 border-4">
      <article>
        <h2>{name}</h2>
        <p>{description}</p>
      </article>
    </li>
  )
}

async function getData(): Promise<Spell[] | null> {
  const res = await fetch('https://hp-api.onrender.com/api/spells')
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json() as Promise<Spell[] | null>
}

export default async function Page(): Promise<JSX.Element> {
  const data = await getData()

  return (
    <PageWrapper>
      <ul className="flex flex-col gap-4">
        {data?.map((item) => <SpellItem description={item.description} key={item.id} name={item.name}/>)}
      </ul>
    </PageWrapper>
  );
}