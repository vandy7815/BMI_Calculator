import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [bmiCategory, setBmiCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/calculate-bmi/', {
        name,
        age,
        height,
        weight,
        mobile_number: mobileNumber,
      });

      setBmiCategory(response.data.bmi_category);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>BMI Calculator</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />

        <label>Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
        />

        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />

        <label>Mobile Number:</label>
        <input
          type="text"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          required
        />

        <button type="submit">Calculate BMI</button>
      </form>

      {bmiCategory && <p>BMI Category: {bmiCategory}</p>}
    </div>
  );
}

export default App;
