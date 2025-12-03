import { App } from "../App";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("登録ボタンのテスト", () => {
  test("フォームに入力して登録ボタンを押すと記録が追加される", async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });

    const initialDeleteButtons = screen.queryAllByText("x");
    const initialCount = initialDeleteButtons.length;

    const titleInput = screen.getByTestId("title-input");
    const timeInput = screen.getByTestId("time-input");
    expect(titleInput.value).toBe("");
    expect(timeInput.value).toBe("0");

    await userEvent.type(titleInput, "Test学習");
    await userEvent.type(timeInput, "3");

    const registerButton = screen.getByTestId("register-button");
    await userEvent.click(registerButton);

    await waitFor(() => {
      const updatedDeleteButtons = screen.queryAllByText("x");
      expect(updatedDeleteButtons.length).toBe(initialCount + 1);
    });
  }),
    test("xボタンを押して記録が削除されるかのテスト", async () => {
      render(<App />);

      await waitFor(() => {
        expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
      });

      const deleteButtons = screen.queryAllByText("x");
      const initialCount = deleteButtons.length;

      // screen.debug(deleteButtons[initialCount - 1]);

      await userEvent.click(deleteButtons[initialCount - 1]);

      await waitFor(() => {
        const updatedDeleteButtons = screen.queryAllByText("x");
        expect(updatedDeleteButtons.length).toBe(initialCount - 1);
      });
    });
});
