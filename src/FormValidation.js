import React, { useState } from "react";

const FormValidation = () => {
  const [forms, setForms] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const validateFields = (name, value) => {
    let errorMsg = "";

    if (name === "email") {
      if (!value.trim()) {
        errorMsg = "";
      } else if (!emailRegex.test(value)) {
        errorMsg = "Invalid email format";
      }
    }

    if (name === "password") {
      if (!value.trim()) {
        errorMsg = "";
      } else if (!passwordRegex.test(value)) {
        errorMsg =
          "Password must be 8+ chars, include uppercase, lowercase, number & special char";
      }
    }

    setError((prev) => ({
      ...prev,
      [name]: errorMsg,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForms((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (submitted) {
      validateFields(name, value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    validateFields("email", forms.email);
    validateFields("password", forms.password);

    if (forms.email && forms.password && !error.email && !error.password) {
      alert("Form Submitted Successfully ✅");
    } else {
      alert("Invalid Form Details ❌");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f4f9",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "30px",
          backgroundColor: "#fff",
          width: "320px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h4 style={{ textAlign: "center", marginBottom: "20px" }}>
          Login Form
        </h4>

        {/* Email */}
        <div style={{ display: "grid", gap: "8px", marginBottom: "15px" }}>
          <label>Email:</label>
          <input
            name="email"
            value={forms.email}
            onChange={handleChange}
            style={{
              height: "32px",
              width: "100%",
              padding: "5px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
          {submitted && error.email && (
            <div style={{ color: "red", fontSize: "12px" }}>{error.email}</div>
          )}
        </div>

        {/* Password */}
        <div style={{ display: "grid", gap: "8px", marginBottom: "15px" }}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={forms.password}
            onChange={handleChange}
            style={{
              height: "32px",
              width: "100%",
              padding: "5px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
          {submitted && error.password && (
            <div style={{ color: "red", fontSize: "12px" }}>
              {error.password}
            </div>
          )}
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            marginTop: "10px",
            background: "green",
            color: "white",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormValidation;
