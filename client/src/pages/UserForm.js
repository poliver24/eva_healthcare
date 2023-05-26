import React, { useState } from "react";
import calculateAge from "../helpers/calculateAge";
import useForm from "../hooks/useForm";

const UserForm = () => {
   const [user, setUser] = useState({
     firstName: "",
     lastName: "",
     age: null,
     email: "",
   });

    const submitUser = (values) => {
      setUser({
        firstName: values.firstName,
        lastName: values.lastName,
        age: calculateAge(values.dob),
        email: values.email,
      });
    };

    const {handleChange, values, errors, handleSubmit} = useForm(submitUser);

   


  return (
    <div className="container mx-auto mt-10 p-4 bg-white rounded shadow-lg">
      <h1 className="text-3xl font-semibold mb-4">User Form</h1>
      <form onSubmit={handleSubmit}>
        {/* First name */}
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
          <input
            type="text"
            name="firstName"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            placeholder="First Name"
            onChange={handleChange}
          />
          {errors.firstName && <p className="text-red-500 text-xs italic">{errors.firstName}</p>  }
        </div>
        {/* Last Name */}
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
          <input
            type="text"
            name="lastName"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            placeholder="Last Name"
            onChange={handleChange}
          />
          {errors.lastName && <p className="text-red-500 text-xs italic">{errors.lastName}</p>  }
        </div>
        {/* Date of Birth */}
        <div className="mb-4">
          <label htmlFor="dob" className="block text-gray-700 text-sm font-bold mb-2">Date of Birth</label>
          <input
            type="date"
            name="dob"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="dob"
            placeholder="Date of Birth"
            onChange={handleChange}
          />
          {errors.dob && <p className="text-red-500 text-xs italic">{errors.dob}</p>  }
        </div>
        {/* Email Address */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
          <input
            type="email"
            name="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            placeholder="Email Address"
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>  }
        </div>        
        {/* Submit */}
        <div className="mb-4">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
