// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const submitHandler = (e) =>{
    e.preventDefault();
    console.log('form submitted');
    setFullName(firstName+ ' ' + lastName);
  }

  return (
    <div className="App">
      <h1>Hello</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">First Name:</label>
        <input type="text" id="fname" name="firstName" required onChange={(e)=>{
          setFirstName(e.target.value);
        }} value={firstName}/>
        <br />
        <label htmlFor="name">Last Name:</label>
        <input type="text" id="lname" name="name" required  onChange={(e)=>{
          setLastName(e.target.value);
        }} value={lastName}/>
        <br />
        <button type="submit">Submit</button>
      </form>
      {fullName && <>
        <p>Full Name: {fullName}</p>
      </>}

    </div>
  );
}

export default App;
