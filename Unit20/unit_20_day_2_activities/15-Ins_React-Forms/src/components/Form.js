import { useState } from "react";

function Form() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    return name === "firstName" ? setFirstName(value) : setLastName(value);
  };

  const handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to reload the page)
    event.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Hello ${firstName} ${lastName}`);
    setFirstName("");
    setLastName("");
  };

  return (
    <div className="container pt-5">
      <div className="card">
        <h5 className="card-header bg-primary text-white">
          Hello {firstName} {lastName}
        </h5>
        <div className="card-body">
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                className="form-control"
                value={firstName}
                name="firstName"
                onChange={handleInputChange}
                type="text"
                placeholder="Enter your first name"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                className="form-control"
                value={lastName}
                name="lastName"
                onChange={handleInputChange}
                type="text"
                placeholder="Enter your last name"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
