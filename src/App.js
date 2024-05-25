import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import SignupDoctor from './screens/SignupDoctor';
import SignupPatient from './screens/SignupPatient';
import Dashboard from './screens/Dashboard';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/signup-doctor" element={<SignupDoctor/>} />
          <Route exact path="/signup-patient" element={<SignupPatient />} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
