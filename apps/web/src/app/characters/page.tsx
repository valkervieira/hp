import { Card } from "ui";

interface Character {
  id: string;
  name: string;
}

async function getData(): Promise<Character[] | null> {
  const res = await fetch(`https://hp-api.onrender.com/api/characters`)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json() as Promise<Character[] | null>
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