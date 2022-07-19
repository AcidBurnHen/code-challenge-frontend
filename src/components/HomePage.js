import { Link, Navigate } from 'react-router-dom';
import '../styles/home-page.scss';
import '../styles/btn.scss';

function HomePage({ isLoggedIn, setIsLoggedIn }) {
  function handleLogout() {
    setIsLoggedIn(false);
  }

  /* If user is logged in he will be able to see the homepage, if he is not the home page will redirect 
  the user to see the login page */

  if (isLoggedIn) {
    return (
      <div className='home-page'>
        <h1 className='home-page__title'>Welcome Back!</h1>
        <p className='home-page__subtitle'>Encode some text?</p>
        <Link className='home-page__link btn' to='/encode'>
          Let's do it!
        </Link>
        <button className='btn' onClick={handleLogout}>
          Log Out
        </button>
      </div>
    );
  }

  return <Navigate to='/login' />;
}

export default HomePage;
