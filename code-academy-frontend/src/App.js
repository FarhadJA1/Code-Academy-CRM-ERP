
import '../src/assets/style/App.scss'
import Navigation from './components/Shared/Navigation';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Header from './components/Shared/Header';
import Finance from './pages/Finance';
import Email from './pages/Email';
import Chat from './pages/Chat';
import './assets/fonts/Ubuntu-Light.ttf';
import './assets/fonts/Ubuntu-Bold.ttf';
import Group from './pages/Group';
import Education from './pages/Education';
import Teacher from './pages/Teacher';


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
            <Route path='/reports' element={<Dashboard />} />
            <Route path='/finance' element={<Finance />} />
            <Route path='/email' element={<Email />} />
            <Route path='/chat' element={<Chat />} />
            <Route path='/groups' element={<Group />} />
            <Route path='/education' element={<Education />} />
            <Route path='/teachers' element={<Teacher />} />
          </Routes>
        </div>

      </div>
    </Router>
  );

}

export default App;
