import { ButtonProps } from "@material-ui/core/Button";

export default interface IButton extends ButtonProps {
    gradientColor?: "red" | "blue";
}

export interface IStyle {
    gradientColor?: string;
}
