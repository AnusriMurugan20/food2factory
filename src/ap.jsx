import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import FormComponent from './FormComponent';
import './ap.css';

const App = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="App">
      <button onClick={toggleForm}>
        {isFormOpen ? 'Close Form' : 'Open Form'}
      </button>
      {isFormOpen && <FormComponent onClose={toggleForm} />}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
