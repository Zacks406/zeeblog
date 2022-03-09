
import TopBar from "./components/topbar/TopBar";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const user = false;
  return (

    <BrowserRouter>
      <div>Github changes</div>
      <div>
        <TopBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="register" element={user ? <Home /> : <Register />} />
          <Route path="login" element={user ? <Home /> : <Login />} />
          <Route path="write" element={user ? <Write /> : <Register />} />
          <Route path="settings" element={user ? <Settings /> : <Register />} />
          <Route path="post/:postId" element={<Single />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
