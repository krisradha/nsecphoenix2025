import React, { useState } from "react";
import emailjs from "../utils/email";
import "./Registration.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    whatsapp: "",
    contact: "",
    department: "",
    section: "",
    graduation: "",
    studentId: "",
    profilePic: null,
    transactionId: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.profilePic) {
      alert("Please upload your picture");
      return;
    }

    // Upload files
    const uploadData = new FormData();
    uploadData.append("profilePic", formData.profilePic);

    if (formData.transactionId) {
      uploadData.append("transactionId", formData.transactionId);
    }

    try {
      // Upload files to server
      await fetch("/Uploads.php", {
        method: "POST",
        body: uploadData,
      });

      // Send email
      await emailjs.sendForm("service_id", "template_id", e.target, "user_id");

      setMessage("✅ Registration submitted! Check your email for confirmation.");
      setTimeout(() => {
        window.location.href = "/payment";
      }, 2000);
    } catch (err) {
      console.error(err);
      alert("Submission failed! Try again.");
    }
  };

  return (
    <div className="container">
      <h2>Phoenix Club Registration</h2>
      <p>Join NSEC’s official Coding, Tech & Innovation Club</p>
      <form onSubmit={handleSubmit}>
        <label>Name*</label>
        <input type="text" name="name" placeholder="Enter your full name" onChange={handleChange} required />

        <label>College Email Id</label>
        <input type="email" name="email" placeholder="Your personal email id" onChange={handleChange} required />

        <label>Gender*</label>
        <select name="gender" onChange={handleChange} required>
          <option value="">Choose Your Gender</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
          <option value="O">Other</option>
        </select>

        <label>WhatsApp No.*</label>
        <input type="text" name="whatsapp" placeholder="Your Whatsapp Number" onChange={handleChange} required />

        <label>Contact No.</label>
        <input type="text" name="contact" placeholder="Your Contact Number" onChange={handleChange} />

        <label>Department*</label>
        <input type="text" name="department" placeholder="Choose Your Department" onChange={handleChange} required />

        <label>Section*</label>
        <input type="text" name="section" placeholder="Your section" onChange={handleChange} required />

        <label>Graduation Year</label>
        <input type="text" name="graduation" placeholder="Your graduation year" onChange={handleChange} />

        <label>Student Id*</label>
        <input type="text" name="studentId" placeholder="Your Student Id" onChange={handleChange} required />

        <label>Your Picture* (Upload only images[.jpg, .png, .jpeg])</label>
        <input type="file" name="profilePic" accept=".jpg,.jpeg,.png" onChange={handleChange} required />

        <label>Student ID or Payment Recipient*</label>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/phoenix-c88b9.appspot.com/o/contact%2Fqr%2Fv7l2c_WhatsApp%20Image%202023-09-01%20at%202.57.34%20PM.jpeg?alt=media&token=50a15e43-6e36-4c70-b5a9-340ff19ae55d"
          alt="QR Payment"
          width="150"
        />

        <label>Transaction ID*</label>
        <input type="text" name="transactionId" placeholder="Enter your Transaction ID" onChange={handleChange} required />

        <button type="submit">Submit & Proceed to Payment</button>
      </form>
      {message && <div className="success">{message}</div>}
    </div>
  );
};

export default RegistrationForm;
