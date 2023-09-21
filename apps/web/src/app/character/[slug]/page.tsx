import { Card } from "ui";

interface Character {
  id: string;
  name: string;
}

async function getData(id: string): Promise<Character | null> {
  const res = await fetch(`https://hp-api.onrender.com/api/character/${id}`)
  
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json() as Promise<Character | null>
}

export default async function Page({ params }: { params: { slug: string } }): Promise<JSX.Element> {
  const data = await getData(params.slug)

  return (
    <main>
      <Card href="https://www.google.com" title="Title example">
        Foo
      </Card>

      <p>Slug from url: {params.slug}</p>


      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </main>
  );
}