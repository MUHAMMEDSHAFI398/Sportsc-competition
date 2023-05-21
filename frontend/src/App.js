import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Registration from './Pages/Registration';
import Result from './Pages/Result';
import NoticaBoard from './Pages/NoticaBoard';

function App() {
  return (
    <>
    <Router>
      
      <Routes>

        <Route path='/'  element={<Home/>}></Route>
        <Route path='/register'  element={<Registration/>}></Route>
        <Route path='/result'  element={<Result/>}></Route>
        <Route path='/notice-board'  element={<NoticaBoard/>}></Route>
        
      </Routes>

    </Router>
    </>
  );
}

export default App;
