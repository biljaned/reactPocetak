// Import React and the message function from message.js
import React from 'react';
import message from './message';

// Define a functional component to display the message
const MessageComponent = () => {
  // Call the message function
  const result = message();
  const name = result.split(' ')[0];//zato sto je rezultat string, nije objekat
  const age = result.split(' ')[2];

  const paragraphStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'blue'
    // Add any other styles you want here
  };

  // Return UI elements displaying the message
  return (
    <div>
      <h1>Welcome</h1>
      <p><span style={paragraphStyle}>{name}</span><span> you are {age} years old.</span></p>
      <p> </p>
      
      
    </div>
  );
};

// Export the MessageComponent
export default MessageComponent;