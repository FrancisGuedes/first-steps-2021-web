import { Route, Routes } from 'react-router-dom';
import { urlHome } from './lib/endpoints';

import Home from './templates/home/home';

function App() {
  return (
    <>
      <Routes>
        <Route path={urlHome} element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
