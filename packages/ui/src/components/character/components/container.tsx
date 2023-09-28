import React from "react";

export function CharacterContainer({
  children,
  className,
  as,
}: {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}): React.ReactNode {
  const Element = as ? as : "article";

  return (
    <Element
      className={[
        "ui-border ui-border-griff-gold ui-p-4 ui-flex ui-gap-4 ui-outline ui-outline-transparent ui-outline-1 -ui-outline-offset-8 hover:ui-outline-griff-yellow",
        className,
      ].join(" ")}
    >
      {children}
    </Element>
  );
}
