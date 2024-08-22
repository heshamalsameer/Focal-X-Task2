import "./App.css";
import Featured from "./components/Featured/Featured";
import NavBar from "./components/NavBar/NavBar";
import Slider from "./components/Slider/Slider";
import VideoView from "./components/VideoView/VideoView";
import BestDeal from "./components/bestDeal/BestDeal";
import ContectUs from "./components/contect/ContectUs";
import Properties from "./components/properties/Properties";
import Footer from "./components/footer/Footer";
import Top from "./components/top/Top";
function App() {
  return (
    <div className="container">
      <Top />
      <NavBar />
      <Slider />
      <Featured />
      <VideoView />
      <BestDeal />
      <Properties />
      <ContectUs />
      <Footer />
    </div>
  );
}

export default App;
