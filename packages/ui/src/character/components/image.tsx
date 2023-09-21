export function CharacterImage({children}: {children: React.ReactElement}): JSX.Element {
  return (
    <figure className="ui-rounded-full ui-overflow-hidden">
      {children}
    </figure>
  )
}