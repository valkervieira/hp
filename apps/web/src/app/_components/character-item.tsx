"use client";

import Link from "next/link";
import { usePreferences } from "ui/dist/contexts";
import type { Character } from "@/app/types";

function CharacterItem({
  id,
  name,
}: Pick<Character, "name" | "id">): JSX.Element {
  const { dispatch, state } = usePreferences();

  const toggleBookmark = (): void => {
    if (state.bookmarks.find((bookmark) => bookmark === id)) {
      dispatch({
        type: "remove-bookmark",
        value: id,
      });
    } else {
      dispatch({
        type: "add-bookmark",
        value: id,
      });
    }
  };

  return (
    <li className="flex gap-4">
      <Link href={`/character/${id}`}>{name}</Link>
      <button onClick={toggleBookmark} type="button">
        {state.bookmarks.find((bookmark) => bookmark === id) ? `❤️` : `🩶`}
      </button>
    </li>
  );
}

export { CharacterItem };
