import { Link } from "react-router-dom";
import { A, H1, Main, Section } from "./styled";

export function About() {
  return (
    <Main>
      <H1>This page is completely static.</H1>
      <Section>
        An since it does not contain any interactive islands, no JavaScript is
        shipped to the browser.
      </Section>
      <A as={Link} to="/">
        Home
      </A>
    </Main>
  );
}
