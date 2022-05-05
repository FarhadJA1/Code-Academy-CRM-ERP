import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/style/App.scss'
import Navigation from './components/Shared/Navigation';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from './pages/Dashboard';
function App() {
  return (
    <Router>
      <div className="App row">
        <Navigation />

        <div className="col-10">
          <Routes>
            <Route path='/' element={<Dashboard />} />
          </Routes>
        </div>

      </div>
    </Router>
  );

}

export default App;
