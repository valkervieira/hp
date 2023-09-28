export function CharacterRole({ children }: { children: string }) {
  return (
    // [TODO] - redo this but move to classnames
    <div className="ui-absolute ui-bottom-4 ui-bg-griff-gold ui-px-2 ui-text-xs ui-drop-shadow-sm box-shadow-xs">
      <span className="ui-border ui-border-t-[8px] ui-border-b-[8px] ui-border-r-[0px] ui-border-l-[4px] ui-border-white ui-inline-block ui-absolute ui-right-0 -ui-mr-1 ui-w-0 ui-h-0 ui-border-transparent ui-border-l-griff-gold z-20" />
      {children}
      <span className="ui-border ui-border-t-[8px] ui-border-b-[8px] ui-border-l-[0px] ui-border-r-[4px] ui-border-white ui-inline-block ui-absolute ui-left-0 -ui-ml-1 ui-w-0 ui-h-0 ui-border-transparent ui-border-r-griff-gold z-20" />
    </div>
  );
}
