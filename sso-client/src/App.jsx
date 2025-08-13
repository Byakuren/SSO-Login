import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Welcome from "./pages/Welcome";

export default function App() {
  const [page, setPage] = useState("login");
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  return (
    <>
      {page === "login" && <Login onLogin={(u, t) => { setUser(u); setToken(t); setPage("welcome"); }} onRegisterClick={() => setPage("register")} />}
      {page === "register" && <Register onBack={() => setPage("login")} />}
      {page === "welcome" && <Welcome user={user} token={token} onLogout={() => { setUser(null); setToken(null); setPage("login"); }} />}
    </>
  );
}
