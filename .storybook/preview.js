// #region Global Imports
import { addDecorator, addParameters } from "@storybook/react";
import { ThemeProvider } from '@material-ui/core/styles';
import { withKnobs } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
// #endregion Global Imports

// #region Local Imports
import theme from "@Definitions/Theme"
import {withRedux, withI18next} from "./Decorators"
// #endregion Local Imports

addDecorator((story) => (
    <ThemeProvider theme={theme}>{story()}</ThemeProvider>
));
addDecorator(withKnobs);
addDecorator(withRedux());
addDecorator(withI18next());

addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
});
