"use client";

/**
 * Character Item Client Component
 *
 * This component needs to use complex React logic abstracted by the `usePreferences` hook
 *
 * @see [TODO] - Add link to PreferencesProvider README/documentation
 */

import Link from "next/link";
import { usePreferences } from "ui/dist/contexts";
import { Character } from "ui";
import type { Character as CharacterType } from "@/app/types";
import Image from "next/image";

function CharacterItem({
  id,
  name,
  house,
  image,
  wizard,
  hogwartsStaff,
  hogwartsStudent,
}: CharacterType): React.ReactNode {
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
    <Character as="li">
      <Character.Image>
        {image.length > 0 ? (
          <Image
            src={image}
            alt={name}
            width={64}
            height={85}
            className="w-full"
          />
        ) : (
          <Character.Image.Fallback>{name}</Character.Image.Fallback>
        )}
      </Character.Image>
      <Link href={`/character/${id}`}>{name}</Link>
      {house ? <p>House: {house}</p> : null}
      <p>{hogwartsStaff ?? "staff"}</p>
      <p>{hogwartsStudent ?? "student"}</p>
      <button onClick={toggleBookmark} type="button">
        {state.bookmarks.find((bookmark) => bookmark === id) ? `❤️` : `🩶`}
      </button>
    </Character>
  );
}

export { CharacterItem };
