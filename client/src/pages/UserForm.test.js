import { render, fireEvent, waitFor } from "@testing-library/react";
import UserForm from "./UserForm";

test("renders UserForm and submits", async () => {
    const { getByRole, getByLabelText, getByText } = render(<UserForm />);

    const firstNameInput = getByRole("textbox", { name: "First Name" });
    const lastNameInput = getByRole("textbox", { name: "Last Name" });
    const dobInput = getByLabelText("Date of Birth");
    const emailInput = getByRole("textbox", { name: "Email Address" });
    const submitButton = getByRole("button", { name: "Submit" });


    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    fireEvent.change(dobInput, { target: { value: "2022-05-01" } });
    fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });

    fireEvent.click(submitButton);

    await waitFor(() => expect(getByText('Loading...')).toBeInTheDocument());
});

test("renders UserForm and submits empty name", async () => {
  const { getByRole, getByLabelText, queryByText } = render(<UserForm />);

  const firstNameInput = getByRole("textbox", { name: "First Name" });
  const lastNameInput = getByRole("textbox", { name: "Last Name" });
  const dobInput = getByLabelText("Date of Birth");
  const emailInput = getByRole("textbox", { name: "Email Address" });
  const submitButton = getByRole("button", { name: "Submit" });

  fireEvent.change(firstNameInput, { target: { value: "" } });
  fireEvent.change(lastNameInput, { target: { value: "Pea" } });
  fireEvent.change(dobInput, { target: { value: "2022-05-01" } });
  fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });

  fireEvent.click(submitButton);

  await waitFor(() =>
    expect(queryByText("Loading...")).not.toBeInTheDocument()
  );

});

test("renders UserForm and submits invalid email", async () => {
  const { getByRole, getByLabelText, queryByText } = render(<UserForm />);

  const firstNameInput = getByRole("textbox", { name: "First Name" });
  const lastNameInput = getByRole("textbox", { name: "Last Name" });
  const dobInput = getByLabelText("Date of Birth");
  const emailInput = getByRole("textbox", { name: "Email Address" });
  const submitButton = getByRole("button", { name: "Submit" });

  fireEvent.change(firstNameInput, { target: { value: "" } });
  fireEvent.change(lastNameInput, { target: { value: "Pea" } });
  fireEvent.change(dobInput, { target: { value: "2022-05-01" } });
  fireEvent.change(emailInput, { target: { value: "j.doeexample.com" } });

  fireEvent.click(submitButton);

  await waitFor(() =>
    expect(queryByText("Loading...")).not.toBeInTheDocument()
  );

});
