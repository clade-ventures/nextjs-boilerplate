/**
 * @jest-environment jsdom
 */

import * as React from "react";
import "@testing-library/jest-dom";

import { ButtonExample } from ".";

import { render, fireEvent } from "@Test/utils";

describe("ButtonExample", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <ButtonExample testID="button-example">Test</ButtonExample>
    );
    expect(container).toMatchSnapshot();
  });

  it("should render with children prop", () => {
    const { getByText } = render(
      <ButtonExample testID="button-example">hey</ButtonExample>
    );

    expect(getByText("hey")).toBeTruthy();
  });

  it("should increment number on click", () => {
    let number = 1;
    const { getByTestId } = render(
      <ButtonExample
        testID="button-example"
        onClick={() => {
          number += 1;
        }}
      >
        ButtonExample
      </ButtonExample>
    );

    fireEvent.click(getByTestId("button-example"), new MouseEvent("click"));

    expect(number).toBe(2);
  });

  it("should render gradient blue button by gradientColor property", () => {
    const { getByTestId } = render(
      <ButtonExample testID="button-example" gradientColor="blue">
        ButtonExample
      </ButtonExample>
    );

    expect(getByTestId("button-example")).toHaveStyle(
      "background: linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)"
    );
  });

  it("should render gradient red button by gradientColor property", () => {
    const { getByTestId } = render(
      <ButtonExample testID="button-example" gradientColor="red">
        ButtonExample
      </ButtonExample>
    );

    expect(getByTestId("button-example")).toHaveStyle(
      "background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
    );
  });
});
