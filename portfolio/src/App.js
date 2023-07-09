import './App.css';
import Home from "./pages/home/index"
import Data from "./pages/data/index"
import DD from "./components/DropDown"

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
          <Route path='/prac' element={<DD />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

