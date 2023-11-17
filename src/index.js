import React, { useState } from 'react';
import './app.css'; // This is optional if you don't need global styles

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
                                                                                                      <div style={{
                                                                                                            display: 'flex',
                                                                                                                  flexDirection: 'column',
                                                                                                                        alignItems: 'center',
                                                                                                                              justifyContent: 'center',
                                                                                                                                    height: '100vh',
                                                                                                                                        }}>
                                                                                                                                              <input type="file" style={{
                                                                                                                                                      margin: '10px 0',
                                                                                                                                                            }} onChange={handleFileChange} />
                                                                                                                                                                  <button style={{
                                                                                                                                                                          padding: '10px 20px',
                                                                                                                                                                                  border: 'none',
                                                                                                                                                                                          backgroundColor: '#007bff',
                                                                                                                                                                                                  color: '#fff',
                                                                                                                                                                                                          cursor: 'pointer',
                                                                                                                                                                                                                }} onClick={handleCheckAccounts}>Check Accounts</button>
                                                                                                                                                                                                                      <div style={{
                                                                                                                                                                                                                              marginTop: '20px',
                                                                                                                                                                                                                                      border: '1px solid #ccc',
                                                                                                                                                                                                                                              padding: '10px',
                                                                                                                                                                                                                                                    }}>
                                                                                                                                                                                                                                                            {results.map((result, index) => (
                                                                                                                                                                                                                                                                      <div key={index} style={{
                                                                                                                                                                                                                                                                                  marginBottom: '10px',
                                                                                                                                                                                                                                                                                            }}>
                                                                                                                                                                                                                                                                                                        {result.email}: {result.isValid ? 'Valid' : 'Invalid'}
                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                          ))}
                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                                                                                                                      };

                                                                                                                                                                                                                                                                                                                                      export default App;
                                                                                                                                                                                                                                                                                                                                      
