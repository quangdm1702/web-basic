import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./services/i18n/index.ts";
import I18nDemo from "./samples/I18nDemo.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nDemo />
  </StrictMode>
);

// Import components I18nDemo vào thẻ div có id là root để render ra giao diện
// Import "./services/i18n/index.ts"; cấu hình i18next để hỗ trợ đa ngôn ngữ , đảm bảo rằng i18next được kích hoạt trước khi ứng dụng render
