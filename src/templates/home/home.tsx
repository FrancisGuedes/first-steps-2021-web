import { Label } from '../../lib/types';
import { strings } from '../../utils/strings';

import './home.scss';

/* Example Template */

const Home = () => {
  const homeLabels: Label = {...strings.homePage}

  return (
    <>
      <h1 className='home-title'>{homeLabels.text}</h1>
    </>
  );
}

export default Home;