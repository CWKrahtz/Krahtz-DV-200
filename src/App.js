
import './App.css';
import Landing from './pages/landing';
import Compare from './pages/compare';
import Timeline from './pages/timeline'
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicNavbar from './componants/navbar';

function App() {
  return (
    <div className="App">
      <BasicNavbar />
      <Routes>

        <Route path='/' element={<Landing />} />
        <Route path='/time' element={<Timeline />} />
        <Route path='/compare' element={<Compare />} />

      </Routes>

    </div>
  );
}

export default App;
