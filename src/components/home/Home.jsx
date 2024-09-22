import './home.css';
import location from '..//..//images/location.png';





const Home = () => {
return (
<main className="main-page" id='home'>
   <section className='main'>
      <div className='block'>
      <div className='block-text'>
         <h1>Your reliable assistant at home</h1>
         <h2>Handyman service near you</h2>
         <img className='location' src={location}  alt='location'/>  
         </div>  
      </div>
   </section>
   </main>
)
}
export default Home;