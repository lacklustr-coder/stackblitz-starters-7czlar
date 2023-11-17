import React, { useState } from 'react';
import './app.css';

const App = () => {
  const [file, setFile] = useState(null);
  const [results, setResults] = useState([]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleCheckAccounts = async () => {
    if (!file) {
      return alert('Please select a file to check.');
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/check-accounts', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <input type="file" className="input-file" onChange={handleFileChange} />
      <button className="button" onClick={handleCheckAccounts}>
        Check Accounts
      </button>
      <div className="results">
        {results.map((result, index) => (
          <div key={index} className="result">
            {result.email}: {result.isValid ? 'Valid' : 'Invalid'}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
