import { Link } from 'react-scroll';
import styled from 'styled-components';
const TopStyle = styled.div`
  @media (max-width: 900px) {
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    flex-flow: column nowrap;
    background-color: #313454;
    height: 100vh;
    width: 300px;
    position: fixed;
    top: 0;
    right: 0;
    padding-top: 3.3rem;
    transition: transform 0.3s ease-in-out;
  }
`;

const TopNavbar = ({ open }) => {
  return (
    <>
      <TopStyle className='nav-links' open={open}>
        <Link
          to='Features'
          spy={true}
          smooth={true}
          duration={-2}
          activeClass='active-link'
          className='nav-link'
        >
          FEATURES
        </Link>

        <Link
          to='Works'
          spy={true}
          smooth={true}
          duration={-2}
          activeClass='active-link'
          className='nav-link'
        >
          WORKS
        </Link>

        <Link
          to='Our_Team'
          spy={true}
          smooth={true}
          duration={-2}
          activeClass='active-link'
          className='nav-link'
        >
          OUR TEAM
        </Link>
        <Link
          to='Testimonials'
          spy={true}
          smooth={true}
          duration={-2}
          activeClass='active-link'
          className='nav-link'
        >
          TESTIMONIALS
        </Link>
        <Link
          to='Download'
          spy={true}
          smooth={true}
          duration={-2}
          activeClass='active-link'
          className='nav-link'
        >
          DOWNLOAD
        </Link>
      </TopStyle>
    </>
  );
};

export default TopNavbar;
