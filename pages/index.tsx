import { useCallback } from "react";
import { Container } from "@material-ui/core";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useDispatch, useSelector } from "react-redux";

import { ButtonExample } from "@Atoms";

import { CounterActions } from "@Actions";

const Home = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const counter = useSelector((state: any) => state.counter?.countNumber);

    const onWelcome = useCallback(() => {
        dispatch(CounterActions.Increment());
    }, [dispatch]);

    return (
        <Container>
            <h1>HZN Frontend Structure</h1>
            <h3>
                {t("hello")} {t("world")} {t("error")} : {counter}
            </h3>
            <ButtonExample
                testID="button-example"
                onClick={onWelcome}
                gradientColor="blue"
            >
                Counter
            </ButtonExample>
        </Container>
    );
};

export const getStaticProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common"])),
    },
});

export default Home;
