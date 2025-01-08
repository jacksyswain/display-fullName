import React, { useState } from 'react';
import './App.css';

export default function App() {
  const[firstName,setFirstName]=useState("");
  const[lastName,setLastName]=useState("");
  const[fullName,setFullName]=useState("")
  const handleFirstNameChange=(e)=>{
    setFirstName(e.target.value)
  }
  const handleLastNameChange=(e)=>{
    setLastName(e.target.value)
  }
  const handleSubmit=(e)=>{
     e.preventDefault(); 
    setFullName(`${firstName} ${lastName}`);
  }
  const isFormValid = firstName.trim() && lastName.trim();
  return (
    <div className="App">
      <h2> Display Full Name </h2>
      <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={handleFirstNameChange}
                   
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={handleLastNameChange}
                   
                />
                <br/>
                <button
                    type="submit"
                    disabled={!isFormValid}
                  
                >
                    Submit
                </button>
            </form>
            {fullName && (
                <div >
                    Full Name: {fullName}
                </div>
                )}
    </div>
  );
}


