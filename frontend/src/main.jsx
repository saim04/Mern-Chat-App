import { render } from "preact";
import "./index.css";
import { App } from "./app.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";

render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById("app")
);
