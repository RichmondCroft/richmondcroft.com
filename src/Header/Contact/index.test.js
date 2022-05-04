import { render,screen } from "@testing-library/react";
import Contact from "./index";


test('should test text input field ',()=>{
    render(<Contact />)
    const contactElement = screen.getAllByRole('textbox')
    expect(contactElement.length).toBe(3)
})

test('should test button',()=>{
    render(<Contact />);
    const contactElement = screen.getByRole('button')
    expect(contactElement).toBeTruthy()
})

