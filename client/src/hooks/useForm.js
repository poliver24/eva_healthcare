import React, { useState } from "react";
import calculateAge from "../helpers/calculateAge";

const useForm = (callBack) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    console.log("Form submitted");
    if (event) event.preventDefault();

    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      callBack();
    } else {
      alert("Please ensure all fields are filled out correctly");
    }
  };

  const validate = (event, name, value) => {
    switch (name) {
      case "dob":
        if (!value) {
          console.log("dob is required");
          setErrors((errors) => ({
            ...errors,
            [name]: "Date of Birth is required",
          }));
        } else if(calculateAge(value) < 0) {
            setErrors((errors) => ({
                ...errors,
                [name]: "Date of Birth cannot be in the future",
                }));
        } else {
            setErrors((errors) => ({ ...errors, [name]: "" }));
        }
        break;
      case "firstName":
        if (!value) {
          setErrors((errors) => ({
            ...errors,
            [name]: "First Name is required",
          }));
        } else {
          setErrors((errors) => ({ ...errors, [name]: "" }));
        }
        break;
      case "lastName":
        if (!value) {
          setErrors((errors) => ({
            ...errors,
            [name]: "Last Name is required",
          }));
        } else {
          setErrors((errors) => ({ ...errors, [name]: "" }));
        }
        break;
      case "email":
        if (
          !new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i).test(value)
        ) {
          setErrors((errors) => ({
            ...errors,
            [name]: "Please enter a valid Email Address",
          }));
        } else {
          setErrors((errors) => ({ ...errors, [name]: "" }));
        }
        break;
      default:
        break;
    }
  };

  const handleChange = (event) => {
    console.log("handleChange");
    event.persist();

    let name = event.target.name;
    let value = event.target.value;

    validate(event, name, value);

    setValues((values) => ({ ...values, [name]: value }));
  };

  return {
    handleChange,
    values,
    errors,
    handleSubmit,
  };
};

export default useForm;
