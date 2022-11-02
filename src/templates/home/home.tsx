import { Label } from '../../lib/types';
import { strings } from '../../utils/strings';
import HeroSection from '../heroSection/heroSection';

import './home.scss';

/* Example Template */

const Home = () => {
  const homeLabels: Label = { ...strings.homePage }

  return (
  
    <div>
      <HeroSection />
      <h1 className='home-title'>{homeLabels.text}</h1>
    </div>
  );
}

export default Home;