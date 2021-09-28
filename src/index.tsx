import React from "react";
import { render } from "react-dom";
import "./assets/index.scss";
import { Container } from "./components/container/Container";

export const App = (): JSX.Element => {
  return <Container>Parcel Setup with Typescript, ESlint, SCSS</Container>;
};
render(<App />, document.getElementById("root"));
