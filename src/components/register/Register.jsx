import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    // console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
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
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
        />
        <br />
        <input
          className="w-50 mb-4 rounded p-2"
          onBlur={handlePasswordBlur}
          type="password"
          name="password"
          id="password"
          placeholder="Your Password"
        />
        <br />
        <input className="btn btn-primary" type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
