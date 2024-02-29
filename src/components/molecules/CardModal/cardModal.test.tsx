import { describe, expect, afterEach, it } from "vitest"
import { cleanup, render, screen } from "@testing-library/react"
import CardModal from "."

describe("CardModal", () => {
  afterEach(() => {
    cleanup()
  })

  it("should show title and description when open", () => {
    render(
      <CardModal
        open={true}
        onClose={() => {}}
        title="Test Title"
        description="Test Description"
      />,
    )

    const title = screen.getByText(/Test Title/)
    const description = screen.getByText(/Test Description/)

    expect(title).toBeDefined()
    expect(description).toBeDefined()
  })
  it("should hide title and description when closed", () => {
    render(
      <CardModal
        open={false}
        onClose={() => {}}
        title="Test Title"
        description="Test Description"
      />,
    )

    const title = screen.queryByText(/Test Title/)
    const description = screen.queryByText(/Test Description/)

    expect(title).toBeNull()
    expect(description).toBeNull()
  })
})
