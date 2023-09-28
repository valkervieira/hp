import { House } from "../../../contexts/preferences/types";

const houseBackgroundMap: { [key: string]: string } = {
  Gryffindor: "ui-bg-griff-red",
  Slytherin: "ui-bg-slyth-green",
  Ravenclaw: "ui-bg-raven-blue",
  Hufflepuff: "ui-bg-huffle-canary",
};

export function CharacterHouseIcon({
  house,
}: {
  house: string;
}): React.ReactNode {
  const houseBackground = houseBackgroundMap[house];

  return (
    <div
      className="ui-absolute ui-top-4 ui-border ui-border-griff-gold ui-border-inset ui-left-4 ui-bg-white ui-rounded-full"
      data-house={house}
    >
      <span
        className={`ui-w-6 ui-h-6 ui-block z-20 ui-rounded-full ${
          houseBackground ?? ""
        }`}
      ></span>
    </div>
  );
}
