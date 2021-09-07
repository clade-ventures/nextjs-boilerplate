import { useCallback } from "react";
import { Container } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import { ButtonExample } from "@Atoms";

import { CounterActions } from "@Actions";

const Home = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state: any) => state.counter?.countNumber);
    const onWelcome = useCallback(() => {
        dispatch(CounterActions.Increment());
    }, [dispatch]);

    return (
        <Container>
            <h1>HZN Frontend Structure</h1>
            <ButtonExample
                variant="contained"
                color="primary"
                onClick={onWelcome}
            >
                Hello World : {counter}
            </ButtonExample>
        </Container>
    );
};

export default Home;
