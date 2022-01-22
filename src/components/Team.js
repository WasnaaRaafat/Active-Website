import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineTwitter, AiOutlineDribbble } from 'react-icons/ai';
import { IoLogoGoogleplus } from 'react-icons/io';
import first from '../images/team-1.jpg';
import second from '../images/team-2.jpg';
import third from '../images/team-3.jpg';
import fourth from '../images/team-4.jpg';
const Team = () => {
  return (
    <div className='Team' id='Our_Team'>
      <div className='team-cards flex-container'>
        <div className='team-card'>
          <img src={first} alt='first teammate' className='team-img' />
          <h2 className='team-title'> Ruth Wood</h2>
          <h5 className='team-job-title'>FOUNDER, CEO</h5>
          <p className='team-text'>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam
            eget risus varius blandit sit amet non magna. Nullam quis risus eget
            urna mollis ornare vel eu leo.
          </p>
          <div className='team-socials'>
            <FaFacebookF className='team-social' size={40} />
            <AiOutlineTwitter className='team-social' size={40} />
            <FaLinkedinIn className='team-social' size={40} />
            <IoLogoGoogleplus className='team-social' size={40} />
            <AiOutlineDribbble className='team-social' size={40} />
          </div>
        </div>

        <div className='team-card'>
          <img src={second} alt='Second teammate' className='team-img' />
          <h2 className='team-title'> Timothy Reed</h2>
          <h5 className='team-job-title'>CO-FOUNDER, DEVELOPER</h5>
          <p className='team-text'>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam
            eget risus varius blandit sit amet non magna. Nullam quis risus eget
            urna mollis ornare vel eu leo.
          </p>
          <div className='team-socials'>
            <FaFacebookF className='team-social' size={40} />
            <AiOutlineTwitter className='team-social' size={40} />
            <FaLinkedinIn className='team-social' size={40} />
            <IoLogoGoogleplus className='team-social' size={40} />
            <AiOutlineDribbble className='team-social' size={40} />
          </div>
        </div>

        <div className='team-card'>
          <img src={third} alt='Third teammate' className='team-img' />
          <h2 className='team-title'> Victoria Valdez</h2>

          <h5 className='team-job-title'>UI DESIGNER</h5>
          <p className='team-text'>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam
            eget risus varius blandit sit amet non magna. Nullam quis risus eget
            urna mollis ornare vel eu leo.
          </p>
          <div className='team-socials'>
            <FaFacebookF className='team-social' size={40} />
            <AiOutlineTwitter className='team-social' size={40} />
            <FaLinkedinIn className='team-social' size={40} />
            <IoLogoGoogleplus className='team-social' size={40} />
            <AiOutlineDribbble className='team-social' size={40} />
          </div>
        </div>

        <div className='team-card'>
          <img src={fourth} alt='fourth teammate' className='team-img' />
          <h2 className='team-title'> Beverly Little</h2>

          <h5 className='team-job-title'>DATA SCIENTIST</h5>
          <p className='team-text'>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam
            eget risus varius blandit sit amet non magna. Nullam quis risus eget
            urna mollis ornare vel eu leo.
          </p>
          <div className='team-socials'>
            <FaFacebookF className='team-social' size={40} />
            <AiOutlineTwitter className='team-social' size={40} />
            <FaLinkedinIn className='team-social' size={40} />
            <IoLogoGoogleplus className='team-social' size={40} />
            <AiOutlineDribbble className='team-social' size={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
