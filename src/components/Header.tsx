import { FC } from "react";
import { Button } from "../shared/ui/Button";

export const Header: FC = function Header() {
  const handlePress = () => {
    console.log("click");
  };
  return (
    <header className={"bg-blue-600 h-20"}>
      <button onClick={handlePress}>{"Dva dvainoi adin adinoi"}</button>

      <Button onClick={handlePress}>{"default"}</Button>
      <Button onClick={handlePress} mode={"border"}>
        {"border"}
      </Button>
      <Button onClick={handlePress} mode={"dark"}>
        {"dark"}
      </Button>
    </header>
  );
};
