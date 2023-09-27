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
        "ui-rounded-lg ui-overflow-hidden ui-h-[85px] ui-w-[64px] flex justify-center items-center",
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
    <div className="ui-w-full ui-h-full flex justify-center items-center">
      <span>{fallback}</span>
    </div>
  );
}

CharacterImageFallback.displayName = "Character.Image.Fallback";
