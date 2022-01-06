import React, { useState, useContext } from 'react';
import { Form, Card, Modal, Button, closeButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CreateAccount.css';
import { Link } from 'react-router-dom';
import DataContext from '../Context/data-context';

function CreateAccount({ updateUserStatus, isUser }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isValid, setIsValid] = useState(false);
  
  const ctx = useContext(DataContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName === "") {
      alert("Error: First name field required.");
      return
    } else if (firstName[0] !== firstName[0].toUpperCase()) {
      alert("Error: Names must start with capital letters.");
      return;
    }

    if (lastName === "") {
      alert("Error: Last name field required.");
      return;
    }  else if (lastName[0] !== lastName[0].toUpperCase()) {
      alert("Error: Names must start with capital letters.");
      return;
    }

    if (email === "") {
      alert("Error: Email field required.");
      return;
    }

    if (password === "") {
      alert("Error: Password field required.")
      return;
    }
    
    if (isChecked === false) {
      alert("Error: Must agree to Terms & Conditions to create account.")
      return;
    }
    
    if (password.length < 8) {
      alert("Error: Password must contain at least 8 characters.");
      setPassword("");
    } else {
      updateUserStatus();
      let fullName = firstName + " " + lastName;
      ctx.saveUserInfo(fullName, email, password, 0);
      alert('Success! Your account has been created.');
    }
  }
  
  const firstNameInput = (e) => {
    setFirstName(e.target.value);
    setIsValid(true);
  }

  const lastNameInput = (e) => {
    setLastName(e.target.value);
    setIsValid(true);
  }

  const emailInput = (e) => {
    setEmail(e.target.value);
    setIsValid(true);
  }

  const passwordInput = (e) => {
    setPassword(e.target.value);
    setIsValid(true);
  }

  const checkbox = (e) => {
    setIsChecked(true);
    setIsValid(true);
  }

  return (
    <div className="card-page create-acc">
      <h1 className="join-us">Join the Flock</h1>
      <h3 className="online-acc">Create an Online Account</h3>
      <Card>
        <form 
          className="acc-form"
          onSubmit={handleSubmit}
        >
          {isUser && 
            <div>
              <p>If you would like to add another account, complete form again.</p> 
            </div>}
          <label className="name-label">Full Name</label>
          <div className="name-input-container">
            <input
              type="text"
              value={firstName}
              onChange={firstNameInput}
              placeholder="First Name" 
              className="first-name"
              autoComplete="off"
            />
            
            <input 
              type="text"
              value={lastName}
              onChange={lastNameInput}
              placeholder="Last Name" 
              className="last-name"
              autoComplete="false"
            />
          </div>

          <div className="email-input-container">
            <label className="name-label">Email address</label>
            <input
              type="email" 
              onChange={emailInput}
              placeholder="Enter email" 
              className="email-input"
              autoComplete="off"
            />
            <Form.Text className="email-text">
              Emails will be used as your username for Logins.
            </Form.Text>
          </div>

          <div className="password-input-container">
            <label className="name-label">Password</label>
            <input
              type="password" 
              value={password}
              onChange={passwordInput}
              placeholder="Password" 
              className="password-input"
              autoComplete="off"
            />
          </div>
          
          <div className="checkbox-input-container">
            <input
              className="checkbox"
              type="checkbox" 
              onChange={checkbox}
              name="terms"
            />
            <label htmlFor="terms">&nbsp;I agree to the</label>
            <button className="terms-btn" type="button" onClick={handleShow}>Terms & Conditions</button>
          </div>
          
          <button 
            className="rd-btn reg-btn"
            type="submit"
            disabled={!isValid}
          >
            {!isUser ? 'Create Account' : 'Add Another Account'}
          </button>
        </form>
        {!isUser && <h5 className="card-foot">Already have an account? &nbsp;
          <Link to="/Login/">
            <button  className="rd-btn reg-btn">
              Log in here
            </button>
          </Link>
        </h5>}
      </Card>



      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Terms & Conditions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This application is not real.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Got it!
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CreateAccount;