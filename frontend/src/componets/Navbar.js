import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
// import { useAuthContext } from '../hooks/useAuthContext'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useContext(AuthContext)
  const navRef = useRef();
  // console.log(router.asPath);
  const showNavBar = () => {
    navRef.current.classList.toggle(`${styles.responsive_nav}`);
  };

  const handleClick = () => {
    logout()
  }

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
        <nav>
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
          <img
              className={'nav_btn' 'nav_close_btn'}
              src="/close1.svg"
              style={{ filter: "invert(100%)" }}
              onClick={showNavBar}
            />
        </nav>
        <div className={styles.nav_btn} onClick={showNavBar}>
            <div className={styles.one}></div>
            <div className={styles.two}></div>
            <div className={styles.three}></div>
          </div>
      </div>
    </header>
  )
}

export default Navbar