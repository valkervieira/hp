"use client";

/**
 * Character Item Client Component
 *
 * This component needs to use complex React logic abstracted by the `usePreferences` hook
 *
 * @see [TODO] - Add link to PreferencesProvider README/documentation
 */

import { usePreferences } from "ui/dist/contexts";
import { Character } from "ui";
import type { Character as CharacterType } from "@/app/types";
import Image from "next/image";
import Link from "next/link";

function CharacterComponent({
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
    <Character className="flex-col">
      <div className="flex justify-center">
        <Character.Image>
          {house ? <Character.HouseIcon house={house} /> : null}
          {hogwartsStaff ? <Character.Role>Staff</Character.Role> : null}
          {hogwartsStudent ? <Character.Role>Student</Character.Role> : null}
          {image.length > 0 ? (
            <Image
              src={image}
              alt={name}
              width={160}
              height={150}
              className="w-full h-min"
            />
          ) : (
            <Link
              href={`/characters/${id}`}
              className="w-full h-full flex justify-center items-center"
            >
              <Character.Image.Fallback>{name}</Character.Image.Fallback>
            </Link>
          )}
        </Character.Image>
      </div>
      <div className="flex flex-col gap-2 text-center">
        <Link href={`/character/${id}`}>
          <h3 className="text-xl text-griff-yellow">{name}</h3>
        </Link>
      </div>
      <button onClick={toggleBookmark} type="button">
        {state.bookmarks.find((bookmark) => bookmark === id) ? `❤️` : `🩶`}
      </button>
    </Character>
  );
}

export { CharacterComponent };
