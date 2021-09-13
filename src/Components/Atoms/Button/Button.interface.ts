import { ButtonProps } from "@mui/material/Button";

export default interface IButton extends ButtonProps {
  gradientColor?: "red" | "blue";
  testID: `button-${string}`;
}

export interface IStyle {
  gradientColor?: string;
}
