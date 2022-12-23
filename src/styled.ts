import styled, { createGlobalStyle } from "styled-components";
import logo from "./capri.svg";

export const Main = styled.main`
  max-width: 60ch;
  margin: auto;
  font-size: 1.5em;
  line-height: 1.5;
  padding: 2em;
`;

export const Section = styled.section`
  margin-bottom: 1em;
`;

export const H1 = styled.h1`
  line-height: 1.1;
  & i {
    font-style: normal;
    &::after {
      content: "";
      display: inline-block;
      width: 0.8em;
      height: 0.8em;
      margin-left: 0.25ch;
      background: url(${logo}) no-repeat;
      background-size: contain;
    }
  }
`;

export const A = styled.a`
  color: inherit;
`;

export const Button = styled.button`
  background: green;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0 0.5em;
  font: inherit;
`;

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    min-height: 100%;
    padding: 0;
    margin: 0;
    background: #fafafa;
    font-family: "Helvetica Neue", arial, sans-serif;
    font-weight: 400;
    color: #444;
  }
`;
