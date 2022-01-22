import work_1 from '../images/work-1.jpg';
import work_2 from '../images/work-2.jpg';
import work_3 from '../images/work-3.jpg';
import work_4 from '../images/work-4.jpg';
import work_5 from '../images/work-5.jpg';
import work_6 from '../images/work-6.jpg';
import work_7 from '../images/work-7.jpg';
import work_8 from '../images/work-8.jpg';
const Works = () => {
  return (
    <div className='Works' id='Works'>
      <div className='work-card'>
        <img src={work_1} alt='First work' className='work-card-img' />
        <div className='work-text'>
          <h3 className='work-title'> Project Name</h3>
          <p className='work-p'>Website Design</p>
        </div>
      </div>

      <div className='work-card'>
        <img src={work_2} alt='Second work' className='work-card-img' />
        <div className='work-text'>
          <h3 className='work-title'> Project Name</h3>
          <p className='work-p'>Website Design</p>
        </div>
      </div>

      <div className='work-card'>
        <img src={work_3} alt='Third work' className='work-card-img' />
        <div className='work-text'>
          <h3 className='work-title'> Project Name</h3>
          <p className='work-p'>Website Design</p>
        </div>
      </div>

      <div className='work-card'>
        <img src={work_4} alt='Fourth work' className='work-card-img' />
        <div className='work-text'>
          <h3 className='work-title'> Project Name</h3>
          <p className='work-p'>Website Design</p>
        </div>
      </div>

      <div className='work-card'>
        <img src={work_5} alt='Fifth work' className='work-card-img' />
        <div className='work-text'>
          <h3 className='work-title'> Project Name</h3>
          <p className='work-p'>Website Design</p>
        </div>
      </div>

      <div className='work-card'>
        <img src={work_6} alt='Sixth work' className='work-card-img' />
        <div className='work-text'>
          <h3 className='work-title'> Project Name</h3>
          <p className='work-p'>Website Design</p>
        </div>
      </div>

      <div className='work-card'>
        <img src={work_7} alt='Seventh work' className='work-card-img' />
        <div className='work-text'>
          <h3 className='work-title'> Project Name</h3>
          <p className='work-p'>Website Design</p>
        </div>
      </div>

      <div className='work-card'>
        <img src={work_8} alt='Eight work' className='work-card-img' />
        <div className='work-text'>
          <h3 className='work-title'> Project Name</h3>
          <p className='work-p'>Website Design</p>
        </div>
      </div>
    </div>
  );
};

export default Works;
