import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import About from "./index";

test('should test about desciption',()=>{
    render(<About />)
    const headingElement = screen.getByText(/Richmond Croft/i)
    expect(headingElement).toBeInTheDocument();
})

test('should test heading in About',()=>{
    render(<About />)
    const headingElement = screen.getAllByRole('heading')
    expect(headingElement.length).toBe(1)
})
