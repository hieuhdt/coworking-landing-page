import { render } from "@testing-library/react";
// import Button from "../Button";
import App from '../src/App'

describe("Button snapshot", () => {
  it("should match snapshot", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
