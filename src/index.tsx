import React, { useState } from "react";
import { render } from "react-dom";
import "./assets/index.scss";
import { Container } from "./components/container/Container";

interface Props {}

export const App = (props: Props) => {
  return <Container>Parcel Setup with Typescript, ESlint, SCSS</Container>;
};
render(<App />, document.getElementById("root"));
