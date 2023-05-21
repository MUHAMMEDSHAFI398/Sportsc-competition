import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Registration from './Pages/Registration';
import Result from './Pages/Result';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/'  element={<Home/>}></Route>
        <Route path='/register'  element={<Registration/>}></Route>
        <Route path='/result'  element={<Result/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
