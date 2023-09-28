import React, { useState } from "react";
import '../UserForm/UserForm.css'

function UserForm() {
 const [formData, setFormData] = useState({
  userInput: '',
  email: '',
  phone: '',
  selectedOption: '',
  comments: '',
  isChecked: false
 });

 const handleInputChange = (e) => {
  const { name, value, type, checked } = e.target;
  const inputValue = type === 'checkbox' ? checked : value;
  setFormData({
    ...formData,
    [name]: inputValue,
  });
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  console.log('User Input:', formData.userInput);
  console.log('User Input:', formData.email);
  console.log('User Input:', formData.phone);
  console.log('Selected Option:', formData.selectedOption);
  console.log('Text Area Input:', formData.comments);
  console.log('Text Area Input:', formData.isChecked);
  
    setFormData({
    userInput: '',
    email: '',
    phone: '',
    selectedOption: '',
    comments: '',
    isChecked: false
  });
};
  return (
    <div className="form_container">
      <h3>Requesta A Quote</h3>
      <form onSubmit={handleSubmit}>
        <div className="form_inputs">
        <input type="text" name="userInput" value={formData.userInput} placeholder="Full name" onChange={handleInputChange} required/>
        <input type="email" name="email" value={formData.email} placeholder="Email Adress" onChange={handleInputChange} required/>
        </div>
        <div className="form_inputs">
        <input type="number" name="phone" value={formData.phone} placeholder="Phone No." onChange={handleInputChange} required/>
        <select name="selectedOption" value={formData.selectedOption} onChange={handleInputChange} required>
          <option value="">Select a capability</option>
          <option value="design">Design</option>
          <option value="production">Production</option>
          <option value="certification">Certification</option>
        </select>
        </div>
        <textarea 
          name="comments"
          id="comments"
          cols="30"
          rows="5"
          placeholder="Message"
          value={formData.comments}
          onChange={handleInputChange}
        ></textarea>
        <div>
        <input type="checkbox" name="isChecked" id="getLetters" checked={formData.isChecked} onChange={handleInputChange}/>
        <label htmlFor="getLetters">I'd like to receive the newsletter</label>
        </div>
        <button type="submit">Get a quote</button>
      </form>
    </div>
  );
}
export default UserForm;
