import { useState } from "react";
import "./App.css";
import FormInput from "./FormInput.jsx";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    number: "",
    image: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "num",
      type: "tel",
      placeholder: "Password",
      label: "",
      required: true,
      errorMessage: "It should be a valid Number with Format: xxx-xx-xxx!",
      pattern:"[0-9]{4}-[0-9]{2}-[0-9]{4}",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Registration  Form</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Login</button>
      </form>
    </div>
  );
};

export default App;