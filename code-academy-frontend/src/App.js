import '../src/assets/style/App.scss'
import Navigation from './components/Shared/Navigation';
import { Route, BrowserRouter as Router, Routes, } from "react-router-dom";
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
import ErrorPage from './components/Shared/ErrorPage';
import ForgotPassword from './components/Login/ForgotPassword';

function App() {
  
  return (   
    <Router>
      <div className="App">   
      
        <div className='col-lg-2'>     
        {(window.location.href=="http://localhost:3000")?<Navigation />:""} 
        </div>
        <div className='col-lg-10'>
        {(window.location.href=="http://localhost:3000")?<Header />:""}
         
          <Routes>
          {(localStorage.getItem("user")==null)?<Route path='/' element={<Login />} />:<Route path='*' element={<ErrorPage />} />}
          {(localStorage.getItem("user")!=null)?<Route path='/dashboard' element={<Dashboard />} />:<Route path='*' element={<ErrorPage />} />}
          {(localStorage.getItem("user")!=null)?<Route path='/reports' element={<Dashboard />} />:<Route path='*' element={<ErrorPage />} />}
          {(localStorage.getItem("user")!=null)?<Route path='/finance' element={<Finance />}/>:<Route path='*' element={<ErrorPage />} />}
          {(localStorage.getItem("user")!=null)?<Route path='/groups' element={<Group />} />:<Route path='*' element={<ErrorPage />} />}
          {(localStorage.getItem("user")!=null)?<Route path='/education' element={<Education />} />:<Route path='*' element={<ErrorPage />} />}
          {(localStorage.getItem("user")!=null)?<Route path='/teachers' element={<Teacher />} />:<Route path='*' element={<ErrorPage />} />}
          {(localStorage.getItem("user")!=null)?<Route path='/paytype' element={<PayType />} />:<Route path='*' element={<ErrorPage />} />}
          {(localStorage.getItem("user")!=null)?<Route path='/resource' element={<Resource/>} />:<Route path='*' element={<ErrorPage />} />}
          {(localStorage.getItem("user")!=null)?<Route path='/resource/delete-resource' element={<Resource/>} />:<Route path='*' element={<ErrorPage />} />}
          {(localStorage.getItem("user")!=null)?<Route path='/students' element={<Students />} />:<Route path='*' element={<ErrorPage />} />}
          {(localStorage.getItem("user")!=null)?<Route path='/classroom' element={<Classroom />} />:<Route path='*' element={<ErrorPage />} />}
          {(localStorage.getItem("user")!=null)?<Route path='/term' element={<Term />} /> :<Route path='*' element={<ErrorPage />} />}
          <Route path='/forgot-password' element={<ForgotPassword />} />           
          </Routes>
        </div>

      </div>
    </Router>
  );

}

export default App;
