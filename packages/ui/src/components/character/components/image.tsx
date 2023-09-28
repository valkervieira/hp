import { useMemo } from "react";

export function CharacterImage({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): React.ReactNode {
  return (
    <figure
      className={[
        "ui-overflow-hidden ui-flex ui-justify-center ui-w-full ui-h-64 relative",
        className,
      ].join(" ")}
    >
      {children}
    </figure>
  );
}

CharacterImage.displayName = "Character.Image";

const getInitials = (name: string) => name.split(" ").map((word) => word[0]);

export function CharacterImageFallback({
  children,
}: {
  children: string;
}): React.ReactNode {
  const fallback = useMemo(() => getInitials(children), [children]);

  return (
    <div className="ui-w-full ui-h-full ui-w-full ui-flex ui-items-center ui-justify-center ui-bg-raven-grey">
      <span className="ui-text-white ui-text-lg">{fallback}</span>
    </div>
  );
}

CharacterImageFallback.displayName = "Character.Image.Fallback";
