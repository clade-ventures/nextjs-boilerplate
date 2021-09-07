import React, { memo } from "react";
import Button from "@material-ui/core/Button";

import IButton from "./Button.interface";

export const ButtonExample = memo((props: IButton) => {
    return <Button {...props} />;
});
