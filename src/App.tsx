import { Route, Routes } from "react-router-dom";

import { About } from "./About";
import { Home } from "./Home";
import { GlobalStyle } from "./styled";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
