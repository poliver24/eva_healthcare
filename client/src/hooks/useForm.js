import React, { useState } from "react";
import calculateAge from "../helpers/calculateAge";
import {omit} from 'lodash'

const useForm = (callBack) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    for (let key in values) {
      validate(event, key, values[key]);
    }
    if (
      Object.keys(errors).length === 0 &&
      "firstName" in values &&
      "lastName" in values &&
      "dob" in values &&
      "email" in values
    ) {
      callBack(values);
    } else {
      alert("Please ensure all fields are filled out correctly");
    }
  };

  const validate = (event, name, value) => {
    switch (name) {
      case "dob":
        if (!value) {
          setErrors((errors) => ({
            ...errors,
            [name]: "Date of Birth is required",
          }));
        } else if (calculateAge(value) < 0) {
          setErrors((errors) => ({
            ...errors,
            [name]: "Date of Birth cannot be in the future",
          }));
        } else {
          let newObj = omit(errors, name);
          setErrors(newObj);
        }
        break;
      case "firstName":
        if (!value) {
          setErrors((errors) => ({
            ...errors,
            [name]: "First Name is required",
          }));
        } else {
          let newObj = omit(errors, name);
          setErrors(newObj);
        }
        break;
      case "lastName":
        if (!value) {
          setErrors((errors) => ({
            ...errors,
            [name]: "Last Name is required",
          }));
        } else {
          let newObj = omit(errors, name);
          setErrors(newObj);
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
          let newObj = omit(errors, name);
          setErrors(newObj);
        }
        break;
      default:
        break;
    }
  };

  const handleChange = (event) => {
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
