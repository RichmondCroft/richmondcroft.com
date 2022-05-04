import { render, screen } from "@testing-library/react";
import Home from "./index";

test('should test heading', () => {
    render(<Home />);
    const homeElement = screen.getAllByRole('heading');
    expect(homeElement.length).toBe(1)
})

test('should test heading description', () => {
    render(<Home />);
    const homeElement = screen.getByText(/Welcome/i)
    expect(homeElement).toBeInTheDocument()
})

