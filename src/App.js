import './App.css';
import Navigation from './components/Navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './components/TopBar/TopBar';
import Slider from './components/Home/Slider/Slider'
import Course from './components/Home/Course/Course';
import About from './components/Home/About/About';
import Footer from './components/Home/Footer/Footer';
import BottomFooter from './components/Home/BottomFooter/BottomFooter';

function App() {
  return (
    <div className="App">
      <TopBar></TopBar>
       <Navigation></Navigation>
       <Slider />
       <Course />
       <About />
       <Footer></Footer>
       <BottomFooter></BottomFooter>
    </div>
  );
}

export default App;
