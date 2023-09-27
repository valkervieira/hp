export type House =
  | "griffyndor"
  | "slytherin"
  | "ravenclaw"
  | "hufflepuff"
  | null;
export type Action =
  | { type: "add-bookmark"; value: string }
  | { type: "remove-bookmark"; value: string }
  | { type: "update-house"; value: House };
export type Dispatch = (action: Action) => void;
export interface PreferencesState {
  house: House;
  bookmarks: string[];
}
export interface PreferencesProviderProps {
  children: React.ReactNode;
}
