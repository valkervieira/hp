"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar(): React.ReactElement {
  const pathname = usePathname();

  return (
    <nav
      className="p-4 flex justify-center bg-raven-dark-blue fixed top-0 left-0 w-full border-b-2 border-raven-gold z-50 drop-shadow-lg"
      data-pathname={pathname}
    >
      <ul className="flex gap-4 text-raven-grey">
        <li>
          <Link
            href="/characters"
            className={[
              "hover:text-white",
              pathname.startsWith("/characters") ? "text-white" : "",
            ].join(" ")}
          >
            Characters
          </Link>
        </li>
        <li>
          <Link
            href="/spellbook"
            className={[
              "hover:text-white",
              pathname.startsWith("/spellbook") ? "text-white" : "",
            ].join(" ")}
          >
            Spell Book
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };
