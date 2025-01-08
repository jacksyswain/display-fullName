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
     if(lastName.length>0 && firstName.length>0){
    setFullName(`${firstName} ${lastName}`);
     }
  }
  
  return (
    <div className="App">
      <h2> Display Full Name </h2>
      <form onSubmit={handleSubmit}>
      <label htmlFor="firstName" >First Name:</label>
                <input
                    type="text"
                    
                    value={firstName}
                    onChange={handleFirstNameChange}
                   
                />
                <br/>
                <label htmlFor="laststName" >Last Name:</label>          
                <input
                    type="text"
                    
                    value={lastName}
                    onChange={handleLastNameChange}
                   
                />
                <br/>
                <button
                    type="submit"
                    
                  
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


