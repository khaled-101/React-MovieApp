import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

export default function ProfileContent() {
  // State for form values
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  // State for form errors
  const [formErrors, setFormErrors] = useState({
    emailError: null,
    passwordError: null,
    addressError: null,
    cityError: null,
    stateError: null,
    zipError: null,
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("FORM SUBMITTED", formValues);
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validation and setting values
    if (name === "email") {
      setFormValues({ ...formValues, email: value });
      setFormErrors({
        ...formErrors,
        emailError:
          value.length === 0
            ? "Email is required"
            : !/\S+@\S+\.\S+/.test(value)
            ? "Email is invalid"
            : null,
      });
    }

    if (name === "password") {
      setFormValues({ ...formValues, password: value });
      setFormErrors({
        ...formErrors,
        passwordError:
          value.length === 0
            ? "Password is required"
            : value.length < 6
            ? "Password must be at least 6 characters"
            : null,
      });
    }

    if (name === "address") {
      setFormValues({ ...formValues, address: value });
      setFormErrors({
        ...formErrors,
        addressError: value.length === 0 ? "Address is required" : null,
      });
    }

    if (name === "city") {
      setFormValues({ ...formValues, city: value });
      setFormErrors({
        ...formErrors,
        cityError: value.length === 0 ? "City is required" : null,
      });
    }

    if (name === "state") {
      setFormValues({ ...formValues, state: value });
      setFormErrors({
        ...formErrors,
        stateError: value.length === 0 || value === "Choose..." ? "State is required" : null,
      });
    }

    if (name === "zip") {
      setFormValues({ ...formValues, zip: value });
      setFormErrors({
        ...formErrors,
        zipError:
          value.length === 0
            ? "Zip is required"
            : !/^\d{5}$/.test(value)
            ? "Zip must be 5 digits"
            : null,
      });
    }
  };

  return (
    <Container className="mt-5">
     <h2 className="text-center mb-4 text-black">Profile Information</h2>

      <hr />
      <Form onSubmit={handleSubmit} className="shadow-lg p-4 rounded bg-white">
        {/* Email */}
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            isInvalid={!!formErrors.emailError}
            placeholder="Enter your email"
            className="form-control-lg"
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.emailError}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Password */}
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            isInvalid={!!formErrors.passwordError}
            placeholder="Enter your password"
            className="form-control-lg"
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.passwordError}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Address */}
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            placeholder="1234 Main St"
            value={formValues.address}
            onChange={handleChange}
            isInvalid={!!formErrors.addressError}
            className="form-control-lg"
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.addressError}
          </Form.Control.Feedback>
        </Form.Group>

        {/* City */}
        <Form.Group className="mb-3">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            name="city"
            value={formValues.city}
            onChange={handleChange}
            isInvalid={!!formErrors.cityError}
            placeholder="City Name"
            className="form-control-lg"
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.cityError}
          </Form.Control.Feedback>
        </Form.Group>

        {/* State */}
        <Form.Group className="mb-3">
          <Form.Label>State</Form.Label>
          <Form.Select
            name="state"
            value={formValues.state}
            onChange={handleChange}
            isInvalid={!!formErrors.stateError}
            className="form-control-lg"
          >
            <option>Choose...</option>
            <option>Alexanderia</option>
            <option>Cairo</option>
            <option>Mansoura</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {formErrors.stateError}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Zip */}
        <Form.Group className="mb-3">
          <Form.Label>Zip</Form.Label>
          <Form.Control
            type="text"
            name="zip"
            value={formValues.zip}
            onChange={handleChange}
            isInvalid={!!formErrors.zipError}
            placeholder="Zip Code"
            className="form-control-lg"
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.zipError}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Submit Button */}
        <Button type="submit" variant="primary" className="w-100 py-2">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
