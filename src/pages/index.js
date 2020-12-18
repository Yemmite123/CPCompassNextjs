import Carousel from '../components/Home/Carousel';
import ReactImage from '../assets/mdb-react-small.png';
import MeetCompass from '../components/Home/MeetCompass';
import Autopilot from '../components/Home/ Autopilot';
import InvestmentCalculator from '../components/Home/InvestmentCalculator';
import AppDownlod from '../components/AppDownlod';

const WelcomePage = () => (
  <>
    <Carousel />
    <MeetCompass/>
    <Autopilot/>
    <InvestmentCalculator/>
    <AppDownlod/>
  </>
);

export default WelcomePage;
