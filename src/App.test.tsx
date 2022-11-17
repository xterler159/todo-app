import { render, screen } from "@testing-library/react"

import App from "./App"

test("Renders app", () => {
  render(<App />)
  const titleAppNode = screen.getByText("Todo app")

  expect(titleAppNode).toBeInTheDocument()
})
