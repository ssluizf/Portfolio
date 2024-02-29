import { afterEach, describe, expect, it, vi } from "vitest"
import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import Card from "."

describe("Card", () => {
  afterEach(() => {
    cleanup()
  })

  it("should always show title and description", () => {
    render(<Card title="Test Title" description="Test Description" />)

    const title = screen.getByText(/Test Title/)
    const description = screen.getByText(/Test Description/)

    expect(title).toBeDefined()
    expect(description).toBeDefined()
  })
  it("should call method on card image click", () => {
    const onClick = vi.fn(() => {})

    render(<Card title="" description="" onClick={onClick} />)

    const card = screen.getByAltText("Card Image")
    fireEvent.click(card)

    expect(onClick).toHaveBeenCalled()
  })
})
