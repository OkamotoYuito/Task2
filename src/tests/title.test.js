import { App } from "../App";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("タイトルの確認", () => {
  it("タイトルが「学習記録一覧」である", async () => {
    render(<App />);
    const title = await screen.findByTestId("title");
    expect(title).toHaveTextContent("学習記録一覧");
  });
});
