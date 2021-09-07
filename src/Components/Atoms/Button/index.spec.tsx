/**
 * @jest-environment jsdom
 */

import * as React from "react";

import { ButtonExample } from ".";

import { render, fireEvent } from "@Test/utils";

describe("Basic Components", () => {
    describe("ButtonExample", () => {
        it("should render with children prop", () => {
            const { getByText } = render(<ButtonExample>hey</ButtonExample>);

            expect(getByText("hey")).toBeTruthy();
        });

        it("should increment number on click", () => {
            let number = 1;
            const { getByText } = render(
                <ButtonExample
                    onClick={() => {
                        number += 1;
                    }}
                >
                    ButtonExample
                </ButtonExample>
            );

            fireEvent.click(
                getByText("ButtonExample"),
                new MouseEvent("click")
            );

            expect(number).toBe(2);
        });

        it("should match snapshot", () => {
            const { container } = render(<ButtonExample>Test</ButtonExample>);

            expect(container).toMatchSnapshot();
        });
    });
});
