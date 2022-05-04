
import { Route, Router, Routes } from 'react-router-dom';
import '../src/assets/style/App.scss'
import Navigate from './components/Navigate';
import Dashboard from './pages/Dashboard';
function App() {
  return (
     <Router>
      <div className="App">
        <Navigate />

         <Routes>
          <Route path='/' element={<Dashboard/>}/>
        </Routes>
      </div>
     </Router>
     

  );
}

export default App;
