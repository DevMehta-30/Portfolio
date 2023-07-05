import './App.css';
import Landing from "./components/landing"
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
          <Route path='/' element={<Landing />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

