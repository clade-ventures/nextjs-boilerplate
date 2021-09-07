import * as React from "react";
import { appWithTranslation } from "next-i18next";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "@Definitions/Theme";
import { wrapper } from "../src/Redux";

const App = ({ Component, pageProps }: any) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default wrapper.withRedux(appWithTranslation(App));
