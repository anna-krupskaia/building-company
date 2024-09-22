import './aboutus.css';
import man from '..//..//images/man.png';
import icon1 from '..//..//icons/icon1.png';
import icon2 from '..//..//icons/icon2.png';
import icon3 from '..//..//icons/icon3.png';
import icon4 from '..//..//icons/icon4.png';

const AboutUs = () => {
  return (
    <div className='about-container' id="about">
      <h1>About us</h1>
      <div className='wavy-line'>
        <svg width="125" height="9" viewBox="0 0 137 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 4.47002C4.375 0.381738 11.125 0.381738 14.5 4.47002C17.875 8.55831 24.625 8.55831 28 4.47002C31.375 0.381738 38.125 0.381738 41.5 4.47002C44.875 8.55831 51.625 8.55831 55 4.47002C58.375 0.381738 65.125 0.381738 68.5 4.47002C71.875 8.55831 78.625 8.55831 82 4.47002C85.375 0.381738 92.125 0.381738 95.5 4.47002C98.875 8.55831 105.625 8.55831 109 4.47002C112.375 0.381738 119.125 0.381738 122.5 4.47002C125.875 8.55831 132.625 8.55831 136 4.47002" 
            stroke="#FFC60D" 
            stroke-width="1.3" 
            stroke-linecap="round" 
            stroke-linejoin="round"/>
        </svg>
      </div>
      <div className = 'about-content-one'>
        <div className = 'images-box'>
          <img className = 'man' src={man} alt='man'/>
        </div>
        <div className='about-text-box'>
          <p className = 'text'>
            My name is Almaz Kindiashev and I have a degree in engineering. <br />  
            I have been working in the construction industry for over 20 years,
            gaining valuable experience and knowledge in various aspects of construction and repair. 
            My career involves a wide range of tasks, from large construction projects to minor repairs.
          </p>
          <p className = 'text'> 
            We serve all cities in Texas, providing high-quality services that will help you improve and 
            maintain your home or business at the highest level.
          </p>
          <p className = 'text'>
            For advice and to order our services, please contact us We will be happy to help you with any construction and repair work!
          </p>
        </div>
      </div>
      <div className = 'about-content-two'>
        <p className = 'text'>
          We offer quality construction and repair services to all cities in Texas.
          Our group consists of professionals, each with extensive experience and high qualifications. 
          Regardless of the volume or complexity of the work, we guarantee reliability, quality, and timeliness.
        </p>
        <div className = 'icon-boxes'>
          <div className = 'icon-boxes-row1'>

            <div className = 'icon-box'>
              <div className = 'icon'>
                <img src={icon1} alt="icon1" width='44px'/>
              </div>
              <div className = 'icon-text'>
                <p className = 't-big'>Quality and reliability:</p>
                <p className = 't-small'>High standards of work.</p>
              </div>
            </div>

            <div className = 'icon-box'>
              <div className = 'icon'>
                <img src={icon2} alt="icon3" width='44px' />
              </div>
              <div className = 'icon-text'>
                <p className = 't-big'>Comprehensive solutions:</p>
                <p className = 't-small'>We perform work of any complexity, <br />
                from large projects to minor repairs.</p>
              </div>
            </div>
          </div>

          <div className = 'icon-boxes-row2'>
            <div className = 'icon-box'>
              <div className = 'icon'>
                <img src={icon3} alt="icon2" width='44px'/>
              </div>
              <div className = 'icon-text'>
                <p className = 't-big'>Individual approach:</p>
                <p className = 't-small'>We take into account all customer wishes.</p>
              </div>
            </div>

            <div className = 'icon-box'>
              <div className = 'icon'>
                <img src={icon4} alt="icon4" width='44px'/>
              </div>
              <div className = 'icon-text'>
                <p className = 't-big'>Professionalism and experience:</p>
                <p className = 't-small'>More than 20 years of experience in the <br />
                  industry.</p>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default AboutUs;