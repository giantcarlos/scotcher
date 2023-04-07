import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchSessions } from './features/sessionsSlice';
import { fetchDistilleries } from './features/distilleriesSlice';
import { fetchBottles } from './features/bottlesSlice';
import { fetchAllDistilleries } from './features/allDistilleriesSlice';
import { fetchNotes } from './features/notesSlice';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import NavBar from './Components/NavBar';
import Distilleries from './Components/Distilleries';
import DistilleryPage from './Components/DistilleryPage';
import DistilleriesForm from './Components/DistilleriesForm';
import BottlePage from './Components/BottlePage';
import BottleForm from './Components/BottleForm';
import BottleEdit from './Components/BottleEdit';
import NoteForm from './Components/NoteForm';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect (() => {
    dispatch(fetchSessions())
      .then(dispatch(fetchBottles()))
      .then(dispatch(fetchDistilleries()))
      .then(dispatch(fetchAllDistilleries()))
      .then(dispatch(fetchNotes()))
  });


  return (
    <div className="background" style={{backgroundImage: "url(/scotchbg.png)"}}>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/bottles/:id" element={<BottlePage />} />
        <Route exact path="/bottles/:id/edit" element={<BottleEdit />} />
        <Route exact path="/bottles/:id/notes/new" element={<NoteForm />} />
        <Route exact path="/bottles/new" element={<BottleForm />} />
        <Route exact path="/distilleries" element={<Distilleries />} />
        <Route exact path="/distilleries/new" element={<DistilleriesForm />} />
        <Route exact path="/distilleries/:id" element={<DistilleryPage />} />
      </Routes>
    </div>
  );
}

export default App;
