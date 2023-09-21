export function CharacterContainer({children}: {children: React.ReactElement[] | React.ReactElement}): JSX.Element {
  return (
    <article className="ui-border-2 ui-border-raven-gold p-2 ui-bg-gray-300">
      {children}
    </article>
  )
}