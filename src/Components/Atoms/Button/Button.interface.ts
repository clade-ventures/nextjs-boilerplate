import { ButtonProps } from "@material-ui/core/Button";

export default interface IButton extends ButtonProps {
  gradientColor?: "red" | "blue";
  testID: `button-${string}`;
}

export interface IStyle {
  gradientColor?: string;
}
