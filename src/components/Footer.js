import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { IoLogoGoogleplus } from 'react-icons/io';
const Footer = () => {
  return (
    <div className='Footer'>
      <div className='footer-first-section'>
        <div className='Footer-location footer-card'>
          <h4 className='footer-title footer-location-title'>LOCATION</h4>
          <p className='footer-text'>
            3481 Melrose Place <br /> Beverly Hills, CA 90210
          </p>
        </div>
        <div className='footer-share footer-card'>
          <h4 className='footer-title footer-share-title'>SHARE WITH LOVE</h4>
          <div className='Footer-socials'>
            <FaFacebookF className=' footer-social team-social' size={40} />
            <AiOutlineTwitter className='footer-social team-social' size={40} />
            <FaLinkedinIn className='footer-social team-social' size={40} />
            <IoLogoGoogleplus className='footer-social team-social' size={40} />
          </div>
        </div>
        <div className='footer-about footer-card'>
          <h4 className='footer-title footer-about-title'> ABOUT ACTIVEBOX </h4>
          <p className='footer-text'>
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec
            ullamcorper nulla non metus auctor fringilla.
          </p>
        </div>
      </div>
      <div className='footer-second-section'>
        Copyright &copy; 2015 ActiveBox. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
