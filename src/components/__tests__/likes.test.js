import { render, screen, fireEvent } from "@testing-library/react"
import Like from '../likes';


test("Defaults Likes 0", ()=>{
    render(<Like />);
    expect(screen.getByText("Likes: 0")).toBeInTheDocument();
});

test("Likes increase", ()=>{
    render(<Like />);
    fireEvent.click(screen.getByText("Like"));
    expect(screen.getByText("Likes: 1")).toBeInTheDocument();

});


test("Likes decreace", ()=>{
    render(<Like />);
    fireEvent.click(screen.getByText("Dislike"));
    expect(screen.getByText("Likes: -1")).toBeInTheDocument();

});


