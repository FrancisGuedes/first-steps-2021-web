import { Route, Routes } from 'react-router-dom';
import { urlHome } from './lib/endpoints';
import Error404 from './components/error/error404';
import Home from './templates/home/home';
import Navbar from './templates/navbar/navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={urlHome} element={<Home />} />
      </Routes>
    </>
  );
}

export default App;