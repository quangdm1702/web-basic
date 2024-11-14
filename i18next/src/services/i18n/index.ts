import i18n from "i18next"; // thư viện chính của i18next giúp quản lí việc dịch ngôn ngữ trong ứng dụng 
import { initReactI18next } from "react-i18next"; // hàm dùng để tích hợp i18next với react , giúp sử dụng các hook như useTranslation

import en from "./locales/en/ns1.json";
import vi from "./locales/vi/ns1.json";


export const defaultNS = "ns1"; // khai báo namespace mặc định


const savedLanguage = localStorage.getItem("language") || "en";  // lấy ngôn ngữ đã lưu trong localStorage , nếu không có thì ngôn ngôn mặc định sẽ là tiếng anh


i18n.use(initReactI18next).init({
  lng: savedLanguage, // ngôn ngữ mặc định
  fallbackLng: "en",// trong trường hợp không xác định được ngôn ngữ thì -> english sẽ là ngôn ngữ được chọn
  defaultNS,
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
  resources: { // khai báo tài nguyên ngôn ngữ
    vi: {
      ns1: vi,
    },
    en: {
      ns1: en,
    },
  },
});


export default i18n;


export const translate = (
  key: string,
  options?: Record<string, unknown>
): string => {
  return i18n.t(key, options);
};
