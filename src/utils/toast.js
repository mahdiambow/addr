import { useToast } from "vue-toastification";
const toast = useToast();

export const toastSuccess = (message = "عملیات موفقیت آمیز") => {
  toast.success(message, {
    position: "top-right",
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    draggable: true,
    draggablePercent: 1.18,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false,
  });
};

export const toastWarning = (message = "هشدار") => {
  toast.warning(message, {
    position: "top-right",
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    draggable: true,
    draggablePercent: 1.18,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false,
  });
};

export const toastError = (message = "عملیات ناموفق") => {
  toast.error(message, {
    position: "top-right",
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    draggable: true,
    draggablePercent: 1.18,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false,
  });
};
