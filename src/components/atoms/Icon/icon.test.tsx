import { afterEach, describe, it } from "vitest"
import { cleanup, render } from "@testing-library/react"
import Icon from "."

describe("Icon", () => {
  afterEach(() => {
    cleanup()
  })

  it("should render", () => {
    render(<Icon name="code" />)
  })
})
