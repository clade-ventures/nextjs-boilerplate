import { addDecorator, addParameters } from "@storybook/react";
import { ThemeProvider } from "@material-ui/core/styles";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import theme from "@Definitions/Theme";

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});
