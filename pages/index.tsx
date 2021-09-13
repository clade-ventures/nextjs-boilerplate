import { useCallback } from "react";
import { Container } from "@material-ui/core";
import { useTranslation } from "next-i18next";
import { useDispatch, useSelector } from "react-redux";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { ButtonExample } from "@Atoms";

import { counterSlice } from "@ReduxModules/Counter";
import { useGetUsersQuery } from "@ReduxModules/User";

const Home = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const counter = useSelector((state: any) => state.counter?.countNumber);
  const { isLoading, data } = useGetUsersQuery({});

  const onWelcome = useCallback(() => {
    dispatch(counterSlice.actions.increment());
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
      <h3>Users RTK Query</h3>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        data?.data?.map(row => <div key={row.email}>{row.email}</div>)
      )}
    </Container>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Home;
