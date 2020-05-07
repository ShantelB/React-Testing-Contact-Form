import React from "react";
import { render, fireEvent, getByPlaceholderText, findAllByText, getByTestId } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test('form can be filled in and submitted', () => {
  const {getByLabelText, getByText, getByPlaceholderText, getByTestId} = render(<App />)

  const first = getByPlaceholderText(/edd/i)
  const last = getByPlaceholderText(/burke/i)
  const email = getByPlaceholderText(/bluebill1049@hotmail.com/i)
  const message = getByText(/message/i)
 

  fireEvent.change(first, { target: {name:'firstname', placeholder:'Edd'} })
  fireEvent.change(last, { target: {name:'lastname', placeholder:'Burke' } })
  fireEvent.change(email, { target: {name:'email', placeholder:'bluebill1049@hotmail.com'} })

 

  expect(first).toBeInTheDocument();
  expect(last).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(message).toBeInTheDocument();

   const submit = getByTestId (/submit/i);
 fireEvent.click(submit);

  findAllByText(/Edd/i)
  findAllByText(/Burke/i)
  findAllByText(/bluebill1049@hotmail.com/i)
})
