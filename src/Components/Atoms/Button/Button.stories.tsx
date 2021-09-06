// #region Global Imports
import React from "react";
/* eslint-disable import/no-extraneous-dependencies */
import { boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
/* eslint-enable import/no-extraneous-dependencies */
// #endregion Global Imports

// #region Local Imports
import { ButtonExample } from "./index";
import IButton from "./Button.interface";
// #endregion Local Imports

export default {
    component: ButtonExample,
    title: "Button",
    argTypes: {
        label: {
          description: 'Overwritten description',
          table: {
            type: { 
              summary: 'Something short', 
              detail: 'Something really really long' 
            },
          },
          control: {
            type: null,
          },
        },
    },
};

export const Default = (props: IButton) => (
    <>
        <ButtonExample
            disabled={boolean("Disabled", false)}
            onClick={action("button-click")}
        >
            Hello Button
        </ButtonExample>
    </>
);
