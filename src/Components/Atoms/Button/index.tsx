import React, { memo } from "react";
import { Button, makeStyles } from "@material-ui/core";

import IButton, { IStyle } from "./Button.interface";

const useStyles = makeStyles({
  gradientColor: {
    background: (props: IStyle) =>
      props.gradientColor === "red"
        ? "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
        : "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    boxShadow: (props: IStyle) =>
      props.gradientColor === "red"
        ? "0 3px 5px 2px rgba(255, 105, 135, .3)"
        : "0 3px 5px 2px rgba(33, 203, 243, .3)",
    color: "white",
  },
});

export const ButtonExample = memo((props: IButton) => {
  const { testID, gradientColor, ...materialUIProps } = props;
  const classes = useStyles({ gradientColor });
  return (
    <Button
      data-testid={testID}
      className={gradientColor ? classes.gradientColor : ""}
      {...materialUIProps}
    />
  );
});
