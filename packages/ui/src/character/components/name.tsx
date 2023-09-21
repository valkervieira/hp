export function CharacterName({children}: {children: string}): JSX.Element {
  return <p><span className="ui-font-semibold">Name:</span> <span>{children}</span></p>
}