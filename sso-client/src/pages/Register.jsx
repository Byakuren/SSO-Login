import { useState } from "react";
import { register } from "../api";

export default function Register({ onBack }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  async function handleRegister() {
    setMsg("");
    const res = await register(username, password);
    setMsg(res.message || "Error");
  }

  return (
    <div>
      <h1>Registrar Usuario</h1>
      <input placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input placeholder="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      {msg && <p>{msg}</p>}
      <button onClick={handleRegister}>Crear Usuario</button>
      <button onClick={onBack}>Salir</button>
    </div>
  );
}
