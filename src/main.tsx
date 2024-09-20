import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";

import { store } from "./store";
import { App } from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ConfigProvider theme={{ token: { colorPrimary: "#1DA57A" } }}>
        <App />
      </ConfigProvider>
    </Provider>
  </StrictMode>
);
