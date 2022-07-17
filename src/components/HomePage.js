import { Link } from 'react-router-dom';

function HomePage({ setIsLoggedIn }) {
  function handleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <div>
      <h1>Welcome Back!</h1>
      <p>Encode some text?</p>
      <Link to='/encode'>Let's do it!</Link>

      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}

export default HomePage;
