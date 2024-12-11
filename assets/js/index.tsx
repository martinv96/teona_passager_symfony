import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

console.log("React démarre..."); // Message de débogage

const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("Erreur : élément avec id 'root' introuvable !");
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
