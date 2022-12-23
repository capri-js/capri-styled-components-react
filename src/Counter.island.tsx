import { useState } from "react";
import styled from "styled-components";
import { Button } from "./styled";

type Props = {
  start?: number;
};

export default function Counter({ start = 0 }: Props) {
  const [counter, setCounter] = useState(start);
  return (
    <Root>
      <Button onClick={() => setCounter((c) => c - 1)}>-</Button>
      <span>{counter}</span>
      <Button onClick={() => setCounter((c) => c + 1)}>+</Button>
    </Root>
  );
}

const Root = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.2em;
`;
