import { Link } from 'react-router-dom';
import '../styles/home-page.scss';
import "../styles/btn.scss";

function HomePage({ setIsLoggedIn }) {
  function handleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <div className='home-page'>
      <h1 className="home-page__title">Welcome Back!</h1>
      <p className="home-page__subtitle">Encode some text?</p>
      <Link className="home-page__link btn" to='/encode'>Let's do it!</Link>
      <button className="btn" onClick={handleLogout}>Log Out</button>
    </div>
  );
}

export default HomePage;
