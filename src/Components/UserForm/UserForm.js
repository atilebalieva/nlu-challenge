import React, { useState } from "react";
import '../UserForm/UserForm.css'

function UserForm() {
 const [formData, setFormData] = useState({
  userInput: '',
  email: '',
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
  console.log('Selected Option:', formData.selectedOption);
  console.log('Text Area Input:', formData.comments);
  console.log('Text Area Input:', formData.isChecked);

  setFormData({
    userInput: '',
    email: '',
    selectedOption: '',
    comments: '',
    isChecked: false
  });
};
  return (
    <div className="form_container">
      <h4>Get a quote</h4>
      <form onSubmit={handleSubmit}>
        <input type="text" name="userInput" value={formData.userInput}placeholder="Name" onChange={handleInputChange} required/>
        <input type="email" name="email" value={formData.email}placeholder="Email" onChange={handleInputChange} required/>
        <select name="selectedOption" value={formData.selectedOption} onChange={handleInputChange}>
          <option value="">Select a capability</option>
          <option value="design">Design</option>
          <option value="production">Production</option>
          <option value="certification">Certification</option>
        </select>
        <textarea 
          name="comments"
          id="comments"
          cols="30"
          rows="10"
          placeholder="Comments"
          value={formData.comments}
          onChange={handleInputChange}
        ></textarea>
        <input type="checkbox"  name="isChecked" id="getLetters" checked={formData.isChecked} onChange={handleInputChange}/>
        <label htmlFor="getLetters">I'd like to receive the newsletter</label>
        <button type="submit">Get a quote</button>
      </form>
    </div>
  );
}
export default UserForm;
