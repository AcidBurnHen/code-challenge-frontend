import { useState } from 'react';
import axios from 'axios';
import ErrorMessage from './ErrorMessage';

function LoginPage({ setIsLoggedIn, setAuthToken }) {
  /* On change events will set the value of email and password which is then stored in state */
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errMsg, setErrMsg] = useState();

  async function handleSubmit(e) {
    /* Preventing default (browser native) behavior of submit event which would refresh the server
    this allows me to take care of the submit event myself in my own desired way.  */
    e.preventDefault();

    /* Using a regular expression look ahead to see if there is a dot after @ in the email*/
    if (!/(?=\.).+@/.test(email)) {
      setErrMsg('Invalid email format, you are most likely missing a dot');
      /* I am using return as that will stop the function from executing further if this check was not passed */
      return;
    }

    if (password.length < 6) {
      setErrMsg('Password should be at least 6 characters long');
      return;
    }

    /* Checking to see if password does not contain a number */
    if (!/\d/.test(password)) {
      setErrMsg('Password should contain at least 1 digit/number');
      return;
    }

    const emailLowerCase = email.toLowerCase();

    const data = { email: emailLowerCase, password };

    // Using axios to send a post request
    try {
      const res = await axios.post('/login', data);
      /* If the response was successfully I am setting the state of isLoggedIn to true and passing the  authToken  */
      if (res.status === 200) setIsLoggedIn(true);
      /* Passing the token for encode page to use in it's post request */
      setAuthToken(res.data.token);
      /* Remove error messages if there were any after successful try */
      setErrMsg()
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <ErrorMessage errMsg={errMsg} />
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          id='email'
          name='email'
        />
        <label htmlFor='password'>Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          id='password'
          name='password'
        />
        <button>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
