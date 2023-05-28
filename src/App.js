import './App.css';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import Single from './pages/single/single';
import Write from './pages/write/Write';
import Setting from './pages/setting/Setting';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Topbar />}>
          <Route index element={<Home />} />
          <Route path="setting" element={<Setting />} />
          <Route path="write" element={<Write />} />
          <Route path="post/:postId" element={<Single />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
