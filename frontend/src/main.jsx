import { render } from "preact";
import "./index.css";
import { App } from "./app.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { SocketContextProvider } from "./context/SocketContext.jsx";

render(
  <AuthContextProvider>
    <SocketContextProvider>
      <App />
    </SocketContextProvider>
  </AuthContextProvider>,
  document.getElementById("app")
);
