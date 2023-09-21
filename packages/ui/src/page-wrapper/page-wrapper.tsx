export function PageWrapper({children}: {children: React.ReactElement}): JSX.Element {
  return (
    <main className="ui-px-4 ui-py-4 sm:ui-px-8 lg:ui-px-24">
      {children}
    </main>
  )
}