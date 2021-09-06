import { addDecorator, addParameters } from "@storybook/react";
import { ThemeProvider } from "@material-ui/core/styles";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import theme from "@Definitions/Theme";
import { withRedux, withI18next } from "./Decorators";

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
addDecorator(withRedux());
addDecorator(withI18next());

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});
