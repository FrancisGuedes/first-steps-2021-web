import { Label } from '../../lib/types';
import { httpError } from '../../utils/strings';

import './error404.scss';

/* Example Component */

const Error404 = () => {
  const homeLabels: Label = {...httpError.notFound}

  return (
    <>
      <h1 className='error-404'>{homeLabels.text}</h1>
    </>
  );
}

export default Error404;