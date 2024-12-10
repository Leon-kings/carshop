import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import PrivateRoute from './components/privateRoute/PrivateRoutes'
// pages
import Dashboard from './components/dashboard/admin/Dashboard';
import Login from './pages/form/login/Login';
// import Register from './pages/form/register/Register';
// home pages components
import Home from './pages/home/Home';
import StickyNavbar from './components/nav/Nav';
import FooterWithSitemap from './components/footer/Footer';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <BrowserRouter>
      <StickyNavbar/>
      <Routes>
        
        {/* Public Routes */}
        <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
        <Route path="/" element={<Home />} />

        {/* Private Route */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
      <FooterWithSitemap/>
    </BrowserRouter>
  );
}

export default App
