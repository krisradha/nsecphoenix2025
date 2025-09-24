import React, { useState } from "react";

function Registration() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("✅ Registration submitted! Redirecting to payment...");
    setTimeout(() => {
      window.location.href = "/payment"; // Replace with your payment page route
    }, 2000);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>
          <i className="fas fa-fire"></i> Phoenix Club Registration
        </h1>
        <p>Join NSEC’s official Coding, Tech & Innovation Club</p>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="full_name">Full Name</label>
              <input type="text" id="full_name" name="full_name" required placeholder="Enter your full name" />
            </div>

            <div className="form-group">
              <label htmlFor="student_id">Student ID</label>
              <input type="text" id="student_id" name="student_id" required placeholder="Enter your Student ID" />
            </div>

            <div className="form-group">
              <label htmlFor="department">Department</label>
              <input type="text" id="department" name="department" required placeholder="CSE, IT, ME, etc." />
            </div>

            <div className="form-group">
              <label htmlFor="year">Year</label>
              <select id="year" name="year" required>
                <option value="">-- Select Year --</option>
                <option value="1st">1st Year</option>
                <option value="2nd">2nd Year</option>
                <option value="3rd">3rd Year</option>
                <option value="4th">4th Year</option>
              </select>
            </div>

            <div className="form-group full-width">
              <label htmlFor="course">Course</label>
              <input type="text" id="course" name="course" required placeholder="Diploma, B.Tech, etc." />
            </div>

            <div className="form-group full-width">
              <label htmlFor="why_join">Why do you want to join?</label>
              <textarea id="why_join" name="why_join" required placeholder="Write your reason..."></textarea>
            </div>

            <div className="form-group full-width">
              <label htmlFor="address">Address</label>
              <textarea id="address" name="address" required placeholder="Your address"></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="aadhaar">Aadhaar Number</label>
              <input type="text" id="aadhaar" name="aadhaar" required placeholder="XXXX-XXXX-XXXX" />
            </div>

            <div className="form-group full-width">
              <label htmlFor="student_id_card">Upload Student ID</label>
              <input type="file" id="student_id_card" name="student_id_card" accept=".jpg,.jpeg,.png,.pdf" required />
              <div className="file-upload-text">Upload a clear photo/scan of your Student ID</div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="aadhaar_card">Upload Aadhaar Card</label>
              <input type="file" id="aadhaar_card" name="aadhaar_card" accept=".jpg,.jpeg,.png,.pdf" required />
              <div className="file-upload-text">Upload a clear photo/scan of your Aadhaar card</div>
            </div>
          </div>

          <div className="terms-container">
            <div className="terms">
              <input type="checkbox" id="terms" name="terms" required />
              <label htmlFor="terms">
                I confirm that the information provided is accurate and I accept the{" "}
                <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>.
              </label>
            </div>
          </div>

          <button type="submit" className="submit-btn">
            <i className="fas fa-check-circle"></i> Submit & Proceed to Payment
          </button>
        </form>

        {message && <div className="message success">{message}</div>}
      </div>
    </div>
  );
}

export default Registration;
