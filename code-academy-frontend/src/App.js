import '../src/assets/style/App.scss'
import Navigation from './components/Shared/Navigation';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Header from './components/Shared/Header';
import Finance from './pages/Finance';
import './assets/fonts/Ubuntu-Light.ttf';
import './assets/fonts/Ubuntu-Bold.ttf';
import Group from './pages/Group';
import Education from './pages/Education';
import Teacher from './pages/Teacher';
import PayType from './pages/PayType';
import Resource from './pages/Resource';
import Students from './pages/Students';
import Classroom from './pages/Classroom';
import Term from './pages/Term';
import Login from './pages/Login';


function App() {
  return (
    <Router>
      <div className="App">   
      
        <div className='col-lg-2'>
          
          {(localStorage.getItem("login")!=null)?<Navigation />:""}
          
        </div>
          
        

        <div className='col-lg-10'>
         
          {(localStorage.getItem("login")!=null)?<Header />:""}
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/reports' element={<Dashboard />} />
            <Route path='/finance' element={<Finance />} />            
            <Route path='/groups' element={<Group />} />
            <Route path='/education' element={<Education />} />
            <Route path='/teachers' element={<Teacher />} />
            <Route path='/paytype' element={<PayType />} />
            <Route path='/resource' element={<Resource/>} />
            <Route path='/resource/delete-resource' element={<Resource/>} />
            <Route path='/students' element={<Students />} />
            <Route path='/classroom' element={<Classroom />} />
            <Route path='/term' element={<Term />} />            
          </Routes>
        </div>

      </div>
    </Router>
  );

}

export default App;
