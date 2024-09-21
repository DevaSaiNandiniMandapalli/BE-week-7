// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import ChangePassword from './components/ChangePassword';
import DeleteAccount from './components/DeleteAccount';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/change-password" element={<ChangePassword />} />
                <Route path="/delete-account" element={<DeleteAccount />} />
            </Routes>
        </Router>
    );
}

export default App;
