import { render, fireEvent, waitFor } from "@testing-library/react";
import useForm from "./useForm";

const Form = () => {
  const { handleChange, values, errors, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input id="firstName" name="firstName" onChange={handleChange} />
      {errors.firstName && <span>{errors.firstName}</span>}
      <button type="submit">Submit</button>
    </form>
  );
};

test("checks validation for firstName", async () => {
  const { getByRole, getByLabelText, getByText } = render(<Form />);

  const input = getByLabelText("First Name");

  fireEvent.change(input, { target: { value: "p" } });
  fireEvent.change(input, { target: { value: "" } }); 

  fireEvent.click(getByRole("button", { name: "Submit" })); // Clicking submit

  // Waiting for error message to show up
  await waitFor(() => {
    expect(getByText("First Name is required")).toBeInTheDocument();
  });
});