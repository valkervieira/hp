import { Card } from "ui";

interface Spell {
  id: string;
  name: string;
  description: string;
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
    <main>
      <Card href="https://www.google.com" title="Title example">
        Foo
      </Card>

      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </main>
  );
}