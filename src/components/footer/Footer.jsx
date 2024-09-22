
import './footer.css';
import emailIcon from '../../icons/mailIcon.png';
import mapIcon from '../../icons/mapIcon.png';
import phoneIcon from '../../icons/phoneIcon.png';


const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <a href="mailto: info@emailgroup.com" target='_blank'>
          <img src={ emailIcon } alt="email icon" width="36"/>
        </a>
        <a
         href="https://www.google.com/maps/search/?api=1&query=13509+Feldspar+Dr,+Austin,+TX+78729" 
          target='_blank' 
          rel="noopener noreferrer"
        >
          <img src={ mapIcon } alt="map icon"/>
        </a>
        <a href="tel:=17373473987" target='_blank'>
          <img src={ phoneIcon } alt="phone icon"/>
        </a>
      </div>
    </div>
  )
}

export default Footer;
