import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleEmailChange = (event) => {
    // setEmail(event.target.value);
    // console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    // 1. prevent page refresh
    event.preventDefault();
    setSuccess("");
    setError("");

    // 2. collect form data
    const email = event.target.email.value;
    const password = event.target.password.value;

    // validate
    if (!/(?=.*[A-Z]) /.test(password)) {
      setError("Please add at least one uppercase");
      return;
    } else if (!/(?=.*[0-9].*[0-9]) /.test(password)) {
      setError("Please add at least two numbers");
      return;
    } else if (password.length < 6) {
      setError("Please add at least 6 character in your password");
      return;
    }

    console.log(email, password);

    // create user in fb
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.user;
        setError("");
        event.target.reset();
        setSuccess("User has been created successfully");
        console.log(loggedUser);
      })
      .catch((error) => {
        setError(error.message);

        // console.log(error);
      });
  };

  const handlePasswordBlur = (event) => {
    // console.log(event.target.value);
  };
  return (
    <div className="w-50 mx-auto">
      <h2>Please Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="w-50 mb-4 rounded p-2"
          onChange={handleEmailChange}
          required
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
        />
        <br />
        <input
          className="w-50 mb-4 rounded p-2"
          onBlur={handlePasswordBlur}
          required
          type="password"
          name="password"
          id="password"
          placeholder="Your Password"
        />
        <br />
        <input className="btn btn-primary" type="submit" value="Register" />
      </form>
      <p className="text-danger">{error}</p>
      <p className="text-success">{success}</p>
    </div>
  );
};

export default Register;
