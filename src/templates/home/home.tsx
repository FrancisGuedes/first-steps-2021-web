import { Label } from '../../lib/types';
import { strings } from '../../utils/strings';

import './home.scss';

/* Example Component */

const Home = () => {
  const homeLabels: Label = {...strings.homePage}

  return (
    <>
      <h1>{homeLabels.text}</h1>
    </>
  );
}

export default Home;