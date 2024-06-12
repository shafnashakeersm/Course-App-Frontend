
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Profile from './components/Profile';
import ViewAll from './components/ViewAll';
import Search from './components/Search';

function App() {
  return (
    <div>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/search' element={<Search/>}/>
    <Route path='/viewall' element={<ViewAll/>}/>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
