"use client";

import { PreferencesProvider } from "ui/dist/contexts";

export function GlobalProviders({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return <PreferencesProvider>{children}</PreferencesProvider>;
}
