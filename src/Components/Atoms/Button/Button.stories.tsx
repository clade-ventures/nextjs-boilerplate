import React from "react";

import { ButtonExample } from "./index";
import IButton from "./Button.interface";

export default {
    component: ButtonExample,
    title: "Button",
    argTypes: {
        children: { control: 'text',  },
    },
    args: {
        children: 'Welcome!',
    }
};


export const Default = (props: IButton) => (
    <>
        <ButtonExample {...props}>
            {props.children}
        </ButtonExample>
    </>
);
