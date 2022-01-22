import { MdComputer } from 'react-icons/md';
import { SiReact } from 'react-icons/si';
import { FaRegLightbulb } from 'react-icons/fa';
import { BsBriefcase } from 'react-icons/bs';
import { GiPencilRuler } from 'react-icons/gi';
import { RiDownloadCloud2Line } from 'react-icons/ri';

const Features = () => {
  return (
    <div>
      <div className='features' id='Features'>
        <div className='cards'>
          <div className='card'>
            <div className='card-logo'>
              <GiPencilRuler size={70} />
            </div>
            <div className='card-title'>EASILY CUSTOMISED</div>
            <div className='card-text'>
              Cras justo odio, dapibus ac facilisis in, egestas eget quam.
              Nullam quis risus eget urna mollis ornare vel eu leo. Donec
              ullamcorper nulla non metus auctor fringilla.
            </div>
          </div>

          <div className='card'>
            <div className='card-logo'>
              <MdComputer size={70} />
            </div>
            <div className='card-title'>RESPONSIVE READY</div>
            <div className='card-text'>
              Cras justo odio, dapibus ac facilisis in, egestas eget quam.
              Nullam quis risus eget urna mollis ornare vel eu leo. Donec
              ullamcorper nulla non metus auctor fringilla.
            </div>
          </div>

          <div className='card'>
            <div className='card-logo'>
              <FaRegLightbulb size={70} />
            </div>
            <div className='card-title'>MODERN DESIGN</div>
            <div className='card-text'>
              Cras justo odio, dapibus ac facilisis in, egestas eget quam.
              Nullam quis risus eget urna mollis ornare vel eu leo. Donec
              ullamcorper nulla non metus auctor fringilla.
            </div>
          </div>

          <div className='card'>
            <div className='card-logo'>
              <SiReact size={70} />
            </div>
            <div className='card-title'>CLEAN CODE</div>
            <div className='card-text'>
              Cras justo odio, dapibus ac facilisis in, egestas eget quam.
              Nullam quis risus eget urna mollis ornare vel eu leo. Donec
              ullamcorper nulla non metus auctor fringilla.
            </div>
          </div>

          <div className='card'>
            <div className='card-logo'>
              <BsBriefcase size={70} />
            </div>
            <div className='card-title'>READY TO SHIP</div>
            <div className='card-text'>
              Cras justo odio, dapibus ac facilisis in, egestas eget quam.
              Nullam quis risus eget urna mollis ornare vel eu leo. Donec
              ullamcorper nulla non metus auctor fringilla.
            </div>
          </div>

          <div className='card'>
            <div className='card-logo'>
              <RiDownloadCloud2Line size={70} />
            </div>
            <div className='card-title'>DOWNLOAD FOR FREE</div>
            <div className='card-text'>
              Cras justo odio, dapibus ac facilisis in, egestas eget quam.
              Nullam quis risus eget urna mollis ornare vel eu leo. Donec
              ullamcorper nulla non metus auctor fringilla.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
