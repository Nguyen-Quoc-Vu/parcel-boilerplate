import React from "react";
import "./styles.scss";
interface Props {
  children: JSX.Element | string;
}

export const Container = ({ children }: Props): JSX.Element => {
  return <div className="container">{children}</div>;
};
