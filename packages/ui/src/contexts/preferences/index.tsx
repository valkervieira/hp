"use client";

import { createContext, useContext, useReducer } from "react";
import { STORAGE_KEYS } from "./constants";
import type {
  Action,
  Dispatch,
  PreferencesProviderProps,
  PreferencesState,
} from "./types";

const defaultInitialState: PreferencesState = {
  bookmarks: [],
  house: "",
};

const PreferencesContext = createContext<
  { state: PreferencesState; dispatch: Dispatch } | undefined
>(undefined);

function preferencesReducer(
  state: PreferencesState,
  action: Action
): PreferencesState {
  switch (action.type) {
    case "add-bookmark": {
      // a monad here?
      const newBookmarks = [...state.bookmarks, action.value];

      localStorage.setItem(
        STORAGE_KEYS.BOOKMARKED_CHARACTERS,
        JSON.stringify(newBookmarks)
      );

      return {
        ...state,
        bookmarks: newBookmarks,
      };
    }
    case "remove-bookmark": {
      const newBookmarks = [
        ...state.bookmarks.filter((bookmark) => !(bookmark === action.value)),
      ];

      localStorage.setItem(
        STORAGE_KEYS.BOOKMARKED_CHARACTERS,
        JSON.stringify(newBookmarks)
      );

      return {
        ...state,
        bookmarks: newBookmarks,
      };
    }
    case "update-house": {
      const newHouse = action.value;

      localStorage.setItem(
        STORAGE_KEYS.PREFERRED_HOUSE,
        JSON.stringify(newHouse)
      );

      return {
        ...state,
        house: newHouse ?? "",
      };
    }
  }
}

const getInitialState = (): PreferencesState => {
  const cachedHouse = localStorage.getItem(STORAGE_KEYS.PREFERRED_HOUSE);
  const cachedBookmarks = localStorage.getItem(
    STORAGE_KEYS.BOOKMARKED_CHARACTERS
  );

  return {
    house: cachedHouse ?? "",
    bookmarks: cachedBookmarks
      ? JSON.parse(cachedBookmarks.replace(/\\"/g, ""))
      : [],
  };
};

function PreferencesProvider({
  children,
}: PreferencesProviderProps): JSX.Element {
  const [state, dispatch] = useReducer(preferencesReducer, getInitialState());

  const value = { state, dispatch };

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
}

function usePreferences(): { state: PreferencesState; dispatch: Dispatch } {
  const context = useContext(PreferencesContext);

  if (context === undefined) {
    throw new Error("usePreferences must be within a PreferencesProvider");
  }

  return context;
}

export { PreferencesProvider, usePreferences };
