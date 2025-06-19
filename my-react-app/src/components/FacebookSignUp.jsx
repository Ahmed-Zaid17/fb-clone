
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import './FacebookSignUp.css';

function FacebookSignUp() {
  const [form, setForm] = useState({
    firstName: '',
    surname: '',
    day: '10',
    month: 'Apr',
    year: '2025',
    gender: '',
    emailOrPhone: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const dob = {
      day: form.day,
      month: form.month,
      year: form.year,
    };
  
    try {
      const res = await axios.post('https://facebook-backend-9kq5.onrender.com/api/auth/signup', {
        firstName: form.firstName,
        surname: form.surname,
        dob,
        gender: form.gender,
        emailOrPhone: form.emailOrPhone,
        password: form.password
      });
  
      // alert(res.data.message);
  
      // 👇 Redirect to login page
      navigate('/');
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };
  

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1 className="signup-title">facebook</h1>
        <h2 className="signup-subtitle">Create a new account</h2>
        <p className="signup-desc">It's quick and easy.</p>
        <form onSubmit={handleSubmit}>
          <div className="input-row">
            <input type="text" name="firstName" placeholder="First name" onChange={handleChange} />
            <input type="text" name="surname" placeholder="Surname" onChange={handleChange} />
          </div>
          <label className="input-label">Date of birth</label>
          <div className="input-row">
            <select name="day" onChange={handleChange}>
              <option value="10">10</option>
            </select>
            <select name="month" onChange={handleChange}>
              <option value="Apr">Apr</option>
            </select>
            <select name="year" onChange={handleChange}>
              <option value="2025">2025</option>
            </select>
          </div>
          <label className="input-label">Gender</label>
          <div className="input-row">
            <label className="gender-option">
              <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
            </label>
            <label className="gender-option">
              <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
            </label>
            <label className="gender-option">
              <input type="radio" name="gender" value="Custom" onChange={handleChange} /> Custom
            </label>
          </div>
          <input className="full-width-input" type="text" name="emailOrPhone" placeholder="Mobile number or email address" onChange={handleChange} />
          <input className="full-width-input" type="password" name="password" placeholder="New password" onChange={handleChange} />
          <button className="signup-button" type="submit">Sign Up</button>
        </form>
        {/* <p className="signup-login-link">Already have an account?</p> */}
        <center><a href="/" className="signup-login-link">Already have an account?</a></center>
      </div>
    </div>
  );
}

export default FacebookSignUp;
