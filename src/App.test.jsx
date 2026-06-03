import { render, screen } from "@testing-library/react"
import App from "./App"
import { expect, test } from "vitest"

test("render app", () => {
	render(<App/>)
	expect(screen.getByRole("heading", { name: /get started/i })).toBeInTheDocument();
})
