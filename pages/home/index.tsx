import { useCallback } from "react";
import { NextPage } from "next";
import { Container } from "@material-ui/core";

import { ButtonExample } from "@Atoms";
import { HomeActions } from "@Actions";
import { withTranslation } from "@Server/i18n";

import { IHomePage, ReduxNextPageContext } from "@Interfaces";


const Home: NextPage<IHomePage.IProps, IHomePage.InitialProps> = ({
    t,
    i18n,
}) => {
    const onWelcome = useCallback(
        () => {
            alert("Welcome!");
        },
        [],
    )

    return (
        <Container >
            <h1>HZN Frontend Structure</h1>
            <ButtonExample variant="contained" color="primary" onClick={onWelcome}>
                {t("common:hello")} {t("common:world")}
            </ButtonExample>
        </Container>
    );
};

export function getIntialProps(ctx: ReduxNextPageContext) {
    return { namespacesRequired: ["common"] };
};

const Extended = withTranslation("common")(Home);

export default Extended;
