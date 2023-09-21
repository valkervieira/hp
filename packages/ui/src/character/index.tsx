import { CharacterContainer } from "./character-container";
import { CharacterImage } from "./components/image";
import { CharacterName } from "./components/name";

export const Character = Object.assign(CharacterContainer, { Name: CharacterName, Image: CharacterImage})