import { EMPTY_FUNCTION } from '../../constant/empty';
import React, { ReactNode, Component } from "react";
import { ButtonProps } from "./button.model";
import "./button.scss";

export default class ButtonComponent extends Component<ButtonProps> {
  children: ReactNode;
  onClick = EMPTY_FUNCTION;

  constructor(props: ButtonProps) {
    super(props);
    const { children, onClick } = props;
    this.children = children;
    this.onClick = onClick;
  }

  render(): ReactNode {
    return <button className="">{this.children}</button>;
  }
}
