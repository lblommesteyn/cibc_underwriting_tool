import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Walkthrough.css';

function Walkthrough() {
  const navigate = useNavigate();

  return (
    <div className="Walkthrough">
      <h1>How It Works</h1>
      <p>
        Our AI credit tool allows you to upload financial documents. The AI will process the documents, extract relevant financial data, and determine the range of loans you are eligible for.
      </p>
      <p>
        <strong>Step-by-step process:</strong>
      </p>
      <ol>
        <li>Upload your financial document.</li>
        <li>The AI uses OCR (Optical Character Recognition) to extract data such as your annual income from the document.</li>
        <li>The extracted data is fed into the CIBC algorithm, which evaluates your financial status.</li>
        <li>The evaluated data is then sent to a Financial Advisor (FA) at CIBC for review and approval.</li>
        <li>Once approved, you receive the results with your loan eligibility and ranges.</li>
      </ol>
      <h2>Why Use Our AI Credit Tool?</h2>
      <ul>
        <li><strong>Accuracy:</strong> Our AI is trained on thousands of financial documents to ensure high accuracy in data extraction.</li>
        <li><strong>Speed:</strong> Get your results quickly, allowing you to make informed decisions without delay.</li>
        <li><strong>Convenience:</strong> Simply upload your document from anywhere, at any time.</li>
        <li><strong>Security:</strong> Your data is processed securely, ensuring your information is protected.</li>
      </ul>
      <h2>Frequently Asked Questions</h2>
      <h3>What types of documents can I upload?</h3>
      <p>You can upload various types of financial documents such as bank statements, tax returns, and pay slips.</p>
      <h3>How long does it take to get the results?</h3>
      <p>Typically, the AI processes the document and provides results within a few minutes.</p>
      <h3>Is my data secure?</h3>
      <p>Yes, we prioritize the security of your data and ensure that all information is processed securely.</p>
      <button className="return-home" onClick={() => navigate('/')}>Return Home</button>
    </div>
  );
}

export default Walkthrough;
