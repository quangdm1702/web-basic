import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./services/i18n/index.ts";
import { RecoilRoot } from "recoil";
import RecoilDemo from "./samples/RecoilDemo.tsx";
import I18nDemo from "./samples/I18nDemo.tsx";
import { ToastContainer } from "react-toastify";
import ToastifyDemo from "./samples/ToastifyDemo.tsx";
import AxiosDemo from "./samples/AxiosDemo.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RecoilRoot>
      <I18nDemo />
      <RecoilDemo />
      <ToastifyDemo />
      <AxiosDemo />
    </RecoilRoot>
    <ToastContainer />
  </StrictMode>
);
