"use client";

import { PreferencesProvider } from "ui/dist/contexts";

export function CharacterList({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <ul>
      <PreferencesProvider>{children}</PreferencesProvider>
    </ul>
  );
}
