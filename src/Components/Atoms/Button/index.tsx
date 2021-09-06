import React from "react";
import Button from '@material-ui/core/Button';

import IButton from "./Button.interface";

export const ButtonExample = (props: IButton) => {
    return <Button {...props} />;
};
