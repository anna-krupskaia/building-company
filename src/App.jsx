
import './App.css';
import AboutUs from "./components/aboutus/AboutUs";
import Home from "./components/home/Home";
import Service from "./components/service/Service";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Review from './components/review/Review';


function App() {

  return (
    <div className="App">
      <Header/>
      <Home />
      <AboutUs/>
      <Service />
      <Review />
      <Contact />
      <Footer />
    </div>
    
  );
}

export default App
