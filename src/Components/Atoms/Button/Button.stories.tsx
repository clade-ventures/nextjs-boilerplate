import React from "react";

import { ButtonExample } from ".";
import IButton from "./Button.interface";

const story = {
  component: ButtonExample,
  title: "Button",
  argTypes: {
    children: { control: "text" },
  },
  args: {
    children: "Welcome!",
  },
};

export default story;
export const Default = (props: IButton) => (
  <>
    <ButtonExample {...props}>{props.children}</ButtonExample>
  </>
);
