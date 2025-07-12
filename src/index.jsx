import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ConfigProvider, AdaptivityProvider, AppRoot } from "@vkontakte/vkui";

// Инициализация Telegram WebApp
const tgWebApp = window.Telegram?.WebApp;
if (tgWebApp) {
  tgWebApp.expand();
  tgWebApp.enableClosingConfirmation();
}

ReactDOM.render(
  <ConfigProvider platform="ios" appearance="dark">
    <AdaptivityProvider>
      <AppRoot>
        <App />
      </AppRoot>
    </AdaptivityProvider>
  </ConfigProvider>,
  document.getElementById("app")
);