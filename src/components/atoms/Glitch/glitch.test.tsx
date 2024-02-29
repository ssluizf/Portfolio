import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import Glitch from "."

describe("Glitch", () => {
  it("should render children", () => {
    render(
      <Glitch>
        <span>Test Children</span>
      </Glitch>,
    )

    const children = screen.getAllByText(/Test Children/)

    expect(children).toBeDefined()
  })
})
