import { useState } from 'react';

const FormPage = () => {
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Thank you! Your form has been submitted successfully.\nYungMora will contact you soon.");
    e.target.reset();
  };

  return (
    <div className="form-container">
      <h1>Fill This Form Correctly</h1>
      <p>Your honesty makes it easy to serve you better</p>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="First Name" required />
        <input type="text" placeholder="Last Name" required />
        <input type="email" placeholder="Email" required />

        <h2>Select Your Gender</h2>
        <label><input type="radio" name="gender" /> Male</label>
        <label><input type="radio" name="gender" /> Female</label>

        <h2>Do you?</h2>
        <label><input type="checkbox" /> Make Music</label>
        <label><input type="checkbox" /> Play an Instrument</label>
        <label><input type="checkbox" /> Have knowledge on Music production</label>
        <label><input type="checkbox" /> Know Mixing & Mastering</label>

        <h3>How long have you been into music production?</h3>
        <input type="number" placeholder="Years" />

        <h3>What do you think you need to work on more?</h3>
        <textarea rows="6" placeholder="Leave a comment..."></textarea>

        <button type="submit" className="btn primary">Submit</button>
      </form>
    </div>
  );
};

export default FormPage;