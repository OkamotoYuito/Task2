import { App } from "../App";
import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

describe("登録ボタンのテスト", () => {
  it("フォームに入力して登録ボタンを押すと記録が追加される", async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });

    const initialDeleteButtons = screen.queryAllByText("x");
    const initialCount = initialDeleteButtons.length;

    const titleInput = screen.getByTestId("title-input");
    const timeInput = screen.getByTestId("time-input");

    fireEvent.change(titleInput, { target: { value: "Test学習" } });
    fireEvent.change(timeInput, { target: { value: 3 } });

    const registerButton = screen.getByTestId("register-button");
    fireEvent.click(registerButton);

    await waitFor(() => {
      const updatedDeleteButtons = screen.queryAllByText("x");
      expect(updatedDeleteButtons.length).toBe(initialCount + 1);
    });

    expect(screen.getByText(/Test学習/)).toBeInTheDocument();
  });
});
