import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Create from './Component/Create';
import Read from './Component/Read';

function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <BrowserRouter>
      <Routes>
        <Route path='/cd' element={<Create />} exact/>
        <Route path='/rd' element={<Read />} exact/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
