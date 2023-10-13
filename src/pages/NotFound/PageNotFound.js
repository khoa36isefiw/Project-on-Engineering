import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const PageNotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-heading">404 Not Found</h1>
      <p className="not-found-text">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="not-found-link">Go back to homepage</Link>
    </div>
  );
};

export default PageNotFound;