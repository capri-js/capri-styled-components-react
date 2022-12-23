import { Link } from "react-router-dom";

import CounterIsland from "./Counter.island.jsx";
import { A, H1, Main, Section } from "./styled.js";

export function Home() {
  return (
    <Main>
      <H1>
        <i>Capri</i> + styled-components 💅
      </H1>
      <Section>This page is static, but contains some dynamic parts.</Section>
      <Section>
        Here is a simple counter: <CounterIsland />
      </Section>
      <A as={Link} to="/about">
        Link to another page
      </A>
    </Main>
  );
}
