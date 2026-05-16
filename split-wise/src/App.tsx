import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import Dashboard from "./pages/Dashboard";
import ProfilePage  from "./pages/profile";
import ProfileSettings from "./pages/setting";
import HomePage from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/setting" element={<ProfileSettings/>}/>
        <Route path ="/Home"element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
