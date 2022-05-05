// import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/style/App.scss'
import Navigation from './components/Shared/Navigation';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Header from './components/Shared/Header';
import Reports from './pages/Reports';
import Finance from './pages/Finance';
import Email from './pages/Email';
import Chat from './pages/Chat';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='col-lg-2'>
          <Navigation />
        </div>

        <div className='col-lg-10'>
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/reports' element={<Reports />} />
            <Route path='/finance' element={<Finance />} />
            <Route path='/email' element={<Email />} />
            <Route path='/chat' element={<Chat />} />
          </Routes>
        </div>

      </div>
    </Router>
  );

}

export default App;
