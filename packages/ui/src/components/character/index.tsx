import { CharacterContainer } from "./components/container";
import { CharacterImage, CharacterImageFallback } from "./components/image";
import { CharacterName } from "./components/name";

export const Character = Object.assign(CharacterContainer, {
  Name: CharacterName,
  Image: Object.assign(CharacterImage, {
    Fallback: CharacterImageFallback,
  }),
} as const);
