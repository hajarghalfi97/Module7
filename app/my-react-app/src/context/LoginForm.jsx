import {userState} from 'react'
import {useContext} from 'react'

function LoginForm() {
    // State for input values
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [submitResult, setSubmitResult] = useState(''); // State for submission message
  
    // Form submission handler
    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent page reload on form submission
  
      // Validation logic
      if (userPassword.length < 5) {
        setSubmitResult('Password must be at least 5 characters long.');
      } else if (userPassword === userEmail) {
        setSubmitResult('Password must not match email address.');
      } else {
        setSubmitResult('Successful login.');
      }
    };

    {/* if the user is already logged in, show msg instead of form */}
if (currentUser.email) return (
    <><p>Welcome {currentUser.email}!</p>
    <button onClick={() => handleUpdateUser({})}>Log Out</button>
    </>
    );
  
    return (
      <div className="LoginForm componentBox">
        <form onSubmit={handleSubmit}>
          <div className="formRow">
            <label>Email Address:
              <input
                type="email"
                value={userEmail}
                name="userEmail"
                onChange={(e) => setUserEmail(e.target.value)} // Controlled input
              />
            </label>
          </div>
          <div className="formRow">
            <label>Password:
              <input
                type="password"
                value={userPassword}
                name="userPassword"
                onChange={(e) => setUserPassword(e.target.value)} // Controlled input
              />
            </label>
          </div>
          <button type="submit">Log In</button>
          {/* Submission result */}
          <p>{submitResult}</p>
        </form>
      </div>
    );
  }
  export default LoginForm