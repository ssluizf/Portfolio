import { afterEach, describe, it } from "vitest"
import { cleanup, render } from "@testing-library/react"
import BinaryLayer from "."

describe("BinaryLayer", () => {
  afterEach(() => {
    cleanup()
  })

  it("should render", () => {
    render(<BinaryLayer color="green" />);
  })
})
