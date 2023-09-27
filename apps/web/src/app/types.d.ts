interface Wand {
  wood: string;
  core: string;
  length: number | null;
}

export interface Character {
  id: string;
  name: string;
  alternate_names: string[] | [];
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string;
  yearOfBirth: number;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: Wand;
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: false;
  actor: string;
  alternate_actors: string[] | [];
  alive: boolean;
  image: string;
}

export interface Spell {
  id: string;
  name: string;
  description: string;
}
