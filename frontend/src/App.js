import { Route, Routes } from 'react-router-dom';
import AdminHome from './admin/Admin';
import Login from './admin/login/Login';
import Contact from './components/contact/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  const {pathname} = window.location
  return (
    <>
      {pathname !== '/admin/login' && <Header />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='admin/login' element={<Login />} />
        <Route path="/admin?/*" element={<AdminHome />} />

        <Route
          path="*"
          element={
            <h1
              style={{
                textAlign: 'center',
                color: '#ffffff',
                marginTop: '10rem',
              }}
            >
              404 Page not found
            </h1>
          }
        />
      </Routes>
    </>
  );
}

export default App;
