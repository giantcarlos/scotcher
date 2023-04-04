import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import NavBar from './Components/NavBar';
import Journal from './Components/Journal';
import BottleForm from './Components/BottleForm';
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/distilleries" element={<Journal />} />
        <Route exact path="/bottles/new" element={<BottleForm />} />
      </Routes>
    </div>
  );
}

export default App;
