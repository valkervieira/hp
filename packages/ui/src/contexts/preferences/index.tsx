"use client";

import { createContext, useContext, useReducer } from "react";
import type {
  Action,
  Dispatch,
  PreferencesProviderProps,
  PreferencesState,
} from "./types";

const initialState: PreferencesState = {
  bookmarks: [],
  house: null,
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
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.value],
      };
    }
    case "remove-bookmark": {
      return {
        ...state,
        bookmarks: [
          ...state.bookmarks.filter((bookmark) => !(bookmark === action.value)),
        ],
      };
    }
    case "update-house": {
      return {
        ...state,
        house: action.value,
      };
    }
  }
}

function PreferencesProvider({
  children,
}: PreferencesProviderProps): JSX.Element {
  const [state, dispatch] = useReducer(preferencesReducer, initialState);

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
