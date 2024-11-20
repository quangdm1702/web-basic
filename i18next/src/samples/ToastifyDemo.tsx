import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// Custom Toast Component to force re-render on language change
function InfoToast() {
  const { t } = useTranslation();
  return <div>{t("toastify.messages.info")}</div>;
}


function SuccessToast() {
  const { t } = useTranslation();
  return <div>{t("toastify.messages.success")}</div>;
}


function ErrorToast() {
  const { t } = useTranslation();
  return <div>{t("toastify.messages.error")}</div>;
}


function WarningToast() {
  const { t } = useTranslation();
  return <div>{t("toastify.messages.warning")}</div>;
}


export default function I18nDemo() {
  const { t } = useTranslation();


  // Trigger toasts with custom components
  const showInfoToast = () => toast.info(<InfoToast />);
  const showSuccessToast = () => toast.success(<SuccessToast />);
  const showErrorToast = () => toast.error(<ErrorToast />);
  const showWarningToast = () => toast.warn(<WarningToast />);


  return (
    <div className="bg-amber-100 w-96 rounded-sm shadow-sm p-4 flex flex-col items-center space-y-2">
      <button
        onClick={showInfoToast}
        className="w-64 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        {t("toastify.button.info")}
      </button>
      <button
        onClick={showSuccessToast}
        className="w-64 px-4 py-2 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
      >
        {t("toastify.button.success")}
      </button>
      <button
        onClick={showErrorToast}
        className="w-64 px-4 py-2 bg-red-500 text-white font-semibold rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
      >
        {t("toastify.button.error")}
      </button>
      <button
        onClick={showWarningToast}
        className="w-64 px-4 py-2 bg-yellow-500 text-white font-semibold rounded-md shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300"
      >
        {t("toastify.button.warning")}
      </button>
    </div>
  );
}

