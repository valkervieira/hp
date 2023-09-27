import React from "react";

export function CharacterContainer({
  children,
  as,
}: {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
}): React.ReactNode {
  const Element = as ? as : "article";

  return (
    <Element className="ui-border-2 ui-border-raven-gold p-2">
      {children}
    </Element>
  );
}
