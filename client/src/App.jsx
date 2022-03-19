import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './Pages/Home';
import Users from './Pages/Users';
import Profile from './Pages/Profile';
import ErrorPage from './Pages/ErrorPage';
import CreateUser from './Pages/UsersPages/CreateUser';
import LoginUser from './Pages/UsersPages/LoginUser';
import ShowUsers from './Pages/UsersPages/ShowUsers';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/users"> Users</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/profile/:id" element={<Profile/>}/>
        <Route path="*" element={<ErrorPage/>}/>

        <Route path="/users/create" element={<CreateUser/>}/>
        <Route path="/users/login" element={<LoginUser/>}/>
        <Route path="/users/show" element={<ShowUsers/>}/>
      </Routes>
    </Router>
  );
}

export default App;

// instalações
// react-router-dom, axios
// cors (no lado server)