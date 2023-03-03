import React from "react";

const Register = () => {
  return (
    <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f1f1f1',
        height: '100vh',
      }}>
        <form style={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
        }}>
          <span style={{ 
            fontSize: '30px',
            marginBottom: '20px',
            textAlign: 'center',
          }}>CREATE AN ACCOUNT</span>
          <input style={{ 
            padding: '10px',
            margin: '10px 0',
            borderRadius: '5px',
            border: '1px solid #ccc',
            width: '100%',
            boxSizing: 'border-box',
          }} placeholder="name" />
          <input style={{ 
            padding: '10px',
            margin: '10px 0',
            borderRadius: '5px',
            border: '1px solid #ccc',
            width: '100%',
            boxSizing: 'border-box',
          }} placeholder="last name" />
          <input style={{ 
            padding: '10px',
            margin: '10px 0',
            borderRadius: '5px',
            border: '1px solid #ccc',
            width: '100%',
            boxSizing: 'border-box',
          }} placeholder="username" />
          <input style={{ 
            padding: '10px',
            margin: '10px 0',
            borderRadius: '5px',
            border: '1px solid #ccc',
            width: '100%',
            boxSizing: 'border-box',
          }} placeholder="email" />
          <input style={{ 
            padding: '10px',
            margin: '10px 0',
            borderRadius: '5px',
            border: '1px solid #ccc',
            width: '100%',
            boxSizing: 'border-box',
          }} placeholder="password" />
          <input style={{ 
            padding: '10px',
            margin: '10px 0',
            borderRadius: '5px',
            border: '1px solid #ccc',
            width: '100%',
            boxSizing: 'border-box',
          }} placeholder="conform password" />
          <button style={{ 
            width: '60%',
            border: 'none',
            padding: '15px 20px',
            backgroundColor: 'teal',
            color: 'white',
            cursor: 'pointer',
            marginBottom: '10px',
          }}>CREATE</button>
        </form>
      </div>
  );
};

export default Register;