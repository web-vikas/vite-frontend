import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";

import App from "./App.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "hsla(208, 83%, 37%, 1)",
          borderRadius: 3,
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
