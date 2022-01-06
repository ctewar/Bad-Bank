import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Welcome from './gary-bendig-WPmPsdX2ySw-unsplash.jpg'
import WelcomeUser from "./kamala-saraswathi-jBdN9Rx8nZ0-unsplash.jpg"

function Home ({ isUser, username, balance, logout }) {
  const handleLogout = () => {
    logout();
  }

  return (
    <>
      {!isUser && <Card className="homepage card-page">
        <h1 className="card-head">Welcome to Goose Banking</h1>
        <div className="card-body">
          <img src={Welcome} className="welcome-img" alt="welcome image" />
          <h2>Here at Goose Banking, we take your money as seriously as geese take on their territory. We offer a wide array of banking services for every  need along with 24/7 customer service. Your growth is our growth so join our flock today!</h2>

          <div className="btn-container">
            <Link to="/CreateAccount/">
              <button  className="rd-btn">
                Join The Flock
              </button>
            </Link>
            
            <Link to="/Login/">
              <button  className="rd-btn">
                Login
              </button>
            </Link>
          </div>
        </div>
      </Card>}

      {isUser && <Card className="homepage user-home card-page">
        <h1  className="card-head">Welcome {username}!</h1>
        <div className="logout-container">
          <button
            className="logout-btn" 
            onClick={handleLogout}
            >
            Logout
          </button>
        </div>
        <div className="card-body user-home-body">
          <img src={WelcomeUser} className="welcome-user-img" alt="welcome user image" />
          <h3>Hey there silly goose! Your Goose Banking account is ready for some action! Here, your transactions have no real life consequences so with unlimited deposits and withdrawals, this pond is your money playground! What will it be today?!</h3>
          <hr/>
          <div className="btn-container">
            <h3>Current Account Balance is ${balance}</h3>
            <div>
              <Link to="/Deposit/">
                <button className="rd-btn">
                  Make Deposit
                </button>
              </Link>

              <Link to="/Withdraw/">
                <button className="rd-btn">
                  Make Withdrawal
                </button>
              </Link>
            </div>
            <hr/>

            <h3>Add another account for any need</h3>
            <Link to="/CreateAccount/">
              <button className="rd-btn">
                Add another account
              </button>
            </Link>
            {/* <hr/>
            <h3>Tired? Log out here</h3>
            <button onClick={handleLogout}>
                Logout
            </button> */}
          </div>
        </div>
        
      </Card>}
    </>
  );
}

export default Home;