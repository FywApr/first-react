import { FC, useState } from "react";
import { Header } from "./src/components/Header";
import { Button } from "./src/shared/ui/Button";

export const App: FC = function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <Header count={count} />
      <Button mode="dark" onClick={() => setCount(count + 1)}>
        {"Прибавить count"}
      </Button>
    </>
  );
};
