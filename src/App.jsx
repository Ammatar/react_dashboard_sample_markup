import './css/App.css';
import { Routes, Route } from 'react-router-dom';
import { Login, Overview, Tickets } from './components';

function App() {
  return (
    <div className='app__container'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='dashboard'>
          <Route path='overview' element={<Overview />} />
          <Route path='tickets' element={<Tickets />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
