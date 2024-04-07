import { afterEach, describe, it } from "vitest"
import { cleanup, render } from "@testing-library/react"
import CardWithModal from "."

describe("CardWithModal", () => {
  afterEach(() => {
    cleanup()
  })

  it("should render", () => {
    render(
      <CardWithModal
        id={1}
        title="Test Title"
        description="Test Description"
        links={[]}
        skills={[]}
      />,
    )
  })
})
