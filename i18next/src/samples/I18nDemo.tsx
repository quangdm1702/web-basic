import { Icon } from "@iconify/react/dist/iconify.js";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useState, useEffect } from "react";

export default function I18nDemo() {
  const { t } = useTranslation(); // sử dụng destructuring để lấy ra hàm t từ useTranslation, t là hàm dịch của i18next
  const [currentLanguage, setCurrentLanguage] = useState(i18next.language);// dùng hook useState để set lại ngôn ngữ 

  const toggleLanguage = () => { // tạo hàm toggleLanguage để set lại state currentLanguage
    const newLanguage = currentLanguage === "vi" ? "en" : "vi";
    i18next.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  useEffect(() => {
    const handleLanguageChange = (lng: string) => setCurrentLanguage(lng);
    i18next.on("languageChanged", handleLanguageChange);

    return () => {
      i18next.off("languageChanged", handleLanguageChange);
    };
  }, []);

  return (
    <div className="bg-amber-100 w-96 rounded-sm shadow-sm p-4 flex flex-col items-center">
      <h1>{t("demo")}</h1>
      <button onClick={toggleLanguage}>
        <Icon
          icon={
            currentLanguage === "en"
              ? "twemoji:flag-vietnam"
              : "twemoji:flag-united-kingdom"
          }
          width="48"
          height="48"
          className="text-black"
        />
      </button>
    </div>
  );
}
