import { Route, Routes } from 'react-router-dom';

import { urlHome } from './lib/endpoints';

import Error404 from './components/error/error404';
import Home from './templates/home/home';

function App() {
  return (
    <>
      <Routes>
        <Route path={urlHome} element={<Home/>}/>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
