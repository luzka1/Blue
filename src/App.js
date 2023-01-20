import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home/index';
import Modalidades from './pages/Modalidades/index';
 
function App() {
  return (
    <Router>
      <Routes>
       <Route path='/' element={<Home />} /> 
       <Route path='/Modalidades' element={<Modalidades />} /> 
      </Routes>
    </Router>
  );
}

export default App;
