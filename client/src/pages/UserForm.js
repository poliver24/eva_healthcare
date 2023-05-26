import React, { useState } from "react";
import calulateAge from "../helpers/calculateAge";

const UserForm = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        age: null,
        email: "",
    });

    const onSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted");
        setUser({
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,
            age: calulateAge(event.target.dob.value),
            email: event.target.email.value,
        });
        console.log(user);
    }

  return (
    <div>
      <h1>User Form</h1>
      <form onSubmit={onSubmit}>
        {/* First name */}
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="First Name"
          />
        </div>
        {/* Last Name */}
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Last Name"
          />
        </div>
        {/* Date of Birth */}
        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            className="form-control"
            id="dob"
            placeholder="Date of Birth"
          />
        </div>
        {/* Email Address */}
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email Address"
          />
        </div>
        {/* Submit */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
