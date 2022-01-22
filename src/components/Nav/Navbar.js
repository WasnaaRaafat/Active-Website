import { useState } from 'react';
import { Link } from 'react-scroll';
import BurgerNav from './BurgerNav';
const Navbar = () => {
  const [navbar, setNavbar] = useState(true);

  const changeNavbarBg = () => {
    if (window.scrollY <= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeNavbarBg);
  return (
    <div>
      <div className={navbar ? 'Navbar-container' : 'Navbar-container-scroll'}>
        <div
          className={
            navbar ? 'Navbar Navbar-normal' : 'Navbar-scroll Navbar.active'
          }
        >
          <div className='logo'>
            <div className='active'>
              <Link to='Home' spy={true} smooth={true} duration={1}>
                ACTIVE
              </Link>
            </div>
            <div className='active-box'>
              <Link to='Home' spy={true} smooth={true} duration={1}>
                BOX
              </Link>
            </div>
          </div>
          <div className='nav-container'>
            <BurgerNav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
