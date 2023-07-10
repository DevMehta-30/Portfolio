import './App.css';
import Home from "./pages/home/index"
import Data from "./pages/data/index"
import MyProjects from "./pages/MyProjects/index";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/data' element={<Data />}></Route>
          <Route path='/projects' element={<MyProjects />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

