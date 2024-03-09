import Login from './pages/Login';
import Signup from './pages/Signup';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Posts from './pages/Posts';
import UserProvider from "./context/UserProvider";
import FullPostView from './pages/FullPostView';
import PublicPosts from './pages/PublicPosts';
import Profile from './pages/Profile';
import Home from './pages/Home';


function App() {
  return (
    <UserProvider>
      <div className="App">
        <BrowserRouter>
          <ToastContainer position="bottom-right" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/postview" element={<FullPostView />} />
            <Route path="/*" element={<h1>NOT FOUND</h1>} />
            <Route
              path="/posts/category"
              element={<PublicPosts />}
            />
          <Route path="profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;