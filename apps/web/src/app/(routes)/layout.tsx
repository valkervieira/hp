import "@/app/globals.css";
import "ui/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harry Potter Characters & Spell Book",
  description: "Harry Potter API client codding challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={[inter.className, "mt-14"].join(" ")}>
        <nav className="p-4 flex justify-center bg-slyth-silver fixed top-0 left-0 w-full">
          <ul className="flex gap-4">
            <li>
              <Link href="/characters">Characters</Link>
            </li>
            <li>
              <Link href="/spellbook">Spell Book</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
