import React, { useState } from 'react';

const ItemForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create a formData object to hold the form values
    const formData = {
      title,
      description,
      price: parseFloat(price), // Convert price to a number (assuming it represents a numeric value)
    };

    // Call the onSubmit callback with the form data
    onSubmit(formData);

    // Optionally, clear the form fields after submission
    setTitle('');
    setDescription('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Price:
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ItemForm;