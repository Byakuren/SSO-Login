import { useState } from "react";
import { login } from "../api";

export default function Login({ onLogin, onRegisterClick }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin() {
    setError("");
    const res = await login(username, password);
    if (res.token) {
      onLogin(res.username, res.token);
    } else {
      setError(res.message || "Error al iniciar sesión");
    }
  }

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <input placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input placeholder="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleLogin}>Iniciar Sesión</button>
      <button onClick={onRegisterClick}>Registrar Usuario</button>
    </div>
  );
}
