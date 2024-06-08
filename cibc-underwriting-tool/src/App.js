import React, { useState } from 'react';
import './App.css';

function App() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    // Simulate a file upload and response
    setTimeout(() => {
      setLoading(false);
      setData({
        loanRange: "$10,000 - $50,000",
        financialData: {
          annualIncome: 60000
        }
      });
    }, 2000);
  };

  return (
    <div className="App">
      <header>
        <button onClick={() => window.open('/walkthrough', '_blank')}>How It Works</button>
      </header>
      <h1>Upload Financial Document</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" name="file" accept="image/*" required onChange={handleFileChange} />
        <button type="submit" disabled={loading}>Upload</button>
      </form>
      <div id="result">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && (
          <div>
            <p>Loan Range: {data.loanRange}</p>
            <p>Annual Income: {data.financialData.annualIncome}</p>
          </div>
        )}
      </div>
      <footer>&copy; 2024 Automated Underwriting Tool</footer>
    </div>
  );
}

export default App;
