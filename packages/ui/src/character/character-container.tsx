export function CharacterContainer({children}: {children: React.ReactElement}): JSX.Element {
  return (
    <article className="ui-border-2 ui-border-gryff-gold">
      {children}
    </article>
  )
}