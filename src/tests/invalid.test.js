import { App } from "../App";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("入力エラーの確認", () => {
  test("タイトルを入力しないで登録ボタンを押すとエラーが表示される", async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });

    const titleInput = screen.getByRole("textbox");
    const timeInput = screen.getByRole("spinbutton");

    await userEvent.clear(titleInput);
    await userEvent.type(timeInput, "5");

    const registerButton = screen.getByRole("button", { name: "登録" });
    await userEvent.click(registerButton);

    expect(screen.getByText("入力内容にエラーがあります")).toBeInTheDocument();
  });
});
