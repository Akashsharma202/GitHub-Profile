import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Username = (props) => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setUser(inputValue);
    navigate('/account');
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded p-8 shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">GitHub Username</label>
          <input
            type="text"
            id="username"
            name="username"
            autoComplete="off"
            value={inputValue}
            onChange={handleInputChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Username;
