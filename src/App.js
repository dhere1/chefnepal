import logo from './logo.svg';
import { BrowserRouter, Routes, Route,useParams } from "react-router-dom";
import Upperpart from "./component/upperPart/upperpart";
import Welcome from './component/welcome/welcome';
import About from './component/about/about';
import News from './component/news/news';
import Judges from './component/judges/judges';
import Teams from './component/teams/teams';
import Broadcast from './component/broadcast/broadcast';
import Endorsement from './component/endorsement/endorsement';
import Footer from './component/footer/footer';
import Partners from './component/partners/partners';
import './App.css';

function App() {
  return (
    <div>
    <Upperpart/>
   <Welcome/>
   <About/>
   <News/>
   <Judges/>
   <Teams/>
   <Partners/>
   <Broadcast/>
   <Endorsement/>
   <Footer/>


</div>

  )
}

export default App;
