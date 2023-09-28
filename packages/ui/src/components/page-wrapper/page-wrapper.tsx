export function PageWrapper({
  children,
  className,
  as,
}: {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}): JSX.Element {
  const Element = as ? as : "main";

  return (
    <Element
      className={[
        "ui-py-4 ui-bg-raven-dark-blue ui-min-h-screen ui-px-4 sm:ui-px-6 lg:ui-px-8 xl:ui-px-10 2xl:ui-px-[calc((100vw-1536px)/2)]",
        className,
      ].join(" ")}
    >
      {children}
    </Element>
  );
}
