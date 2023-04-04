import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Journal from './Components/Journal';
import BottleForm from './Components/BottleForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/distilleries" element={<Journal />} />
        <Route exact path="/bottles/new" element={<BottleForm />} />
      </Routes>
    </div>
  );
}

export default App;
