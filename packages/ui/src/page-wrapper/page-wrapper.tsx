export function PageWrapper({
  children,
  className,
}: {
  children: React.ReactElement[] | React.ReactElement;
  className?: string;
}): JSX.Element {
  return (
    <main className={['ui-px-4 ui-py-4 sm:ui-px-8 lg:ui-px-24', className].join(' ')}>{children}</main>
  );
}
