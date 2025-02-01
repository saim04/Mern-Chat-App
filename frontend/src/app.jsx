import "./app.css";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/Signup/Signup";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

export function App() {
  const { authUser } = useAuthContext();
  return (
    <div className="flex h-screen p-4 items-center justify-center">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={authUser ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={authUser ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={authUser ? <Navigate to="/" /> : <SignUp />}
          />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}
