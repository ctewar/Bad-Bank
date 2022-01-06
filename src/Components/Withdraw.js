
import React, { useState, useContext } from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataContext from '../Context/data-context';

function Withdraw({ balance }) {
  const [withdrawal, setWithdrawal] = useState(0);
  const [isValid, setIsValid] = useState(false);

  const ctx = useContext(DataContext);

  let status = `Account Balance $ ${balance}`;

  const handleChange = e => {
    setIsValid(true);
    setWithdrawal(e.target.value);
  };

  const handleSubmit = (e) => {
    if (isNaN(withdrawal)) {
      alert("Error: Not a number.")
      setWithdrawal(0);
      setIsValid(false);
      return;
    }
    
    if (withdrawal < 0) {
      alert("Error: Withdrawals must be made in positive quantities.");
      setWithdrawal(0);
      setIsValid(false);
      return;
    }

    if (withdrawal > balance - 5) {
      alert("Account must have a minimum balance of $5.00")
    } else {
      ctx.updateCtxBalance(withdrawal, "MINUS");
      alert('Withdrawal was a success!');
    }
    e.preventDefault();
  };

  return (
    <Card className="withdraw card-page">
      <h1 className="card-head">Make a Withdrawal</h1>
      <form onSubmit={handleSubmit}>
        <h2 id="total" className="balance-card">{status}</h2>
        <hr/>
        <div className="trans-container">
          <input
            className="trans-input"
            type="text"
            value={withdrawal}
            min="0"
            onChange={handleChange}
          />
          <input  className="rd-btn"
            type="submit"
            width="200"
            disabled={!isValid}
            value="Submit"
          />
        </div>
      </form>
    </Card>
  );
}

export default Withdraw;