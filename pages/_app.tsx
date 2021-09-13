import * as React from "react";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";

import { wrapper } from "@Redux";

import theme from "@Definitions/Theme";

const App = ({ Component, pageProps }: any) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <Component {...pageProps} />
      </StyledEngineProvider>
    </ThemeProvider>
  );
};

export default wrapper.withRedux(appWithTranslation(App));
