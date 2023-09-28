import { CharacterContainer } from "./components/container";
import { CharacterHouseIcon } from "./components/house-icon";
import { CharacterImage, CharacterImageFallback } from "./components/image";
import { CharacterName } from "./components/name";
import { CharacterRole } from "./components/role";

export const Character = Object.assign(CharacterContainer, {
  Name: CharacterName,
  Image: Object.assign(CharacterImage, {
    Fallback: CharacterImageFallback,
  }),
  HouseIcon: CharacterHouseIcon,
  Role: CharacterRole,
} as const);
