import React, { useState } from "react";

const IncomeForm = () => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Income submitted:", { amount, description });
  
    setAmount("");
    setDescription("");
  };

  return (
    <div>
      <h2>Income Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Amount:</label>
          <input
          className="form-control"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default IncomeForm;
