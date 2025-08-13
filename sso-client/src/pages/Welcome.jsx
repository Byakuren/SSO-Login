import { logout } from "../api";

export default function Welcome({ user, token, onLogout }) {
  async function handleLogout() {
    await logout(token);
    onLogout();
  }

  return (
    <div>
      <h1>Bienvenido {user}</h1>
      <button onClick={handleLogout}>Salir</button>
    </div>
  );
}
