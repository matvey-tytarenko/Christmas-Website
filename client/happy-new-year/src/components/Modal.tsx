import React from "react";
import '../stylesheet/Modal.scss'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modal = () => {
  const CustomToast = () => (
    <div className="app-modal">
      <h3>🎄 У нас появилось приложение! 🎁</h3>
      <p>Скачайте наше приложение для Windows</p>
      <div className="app-modal__buttons">
        <a href="https://download1529.mediafire.com/kode6yd9cvfgQiJVi-9S5GGgFNLO8GQox7bXG3C0oVba0CTv9fN26AZb-Qt8WCbTj7i492RzHzjOYZTw3jOaami34zuZtDgyuoegktfoHVwLoEY-gheCqLkwc4rolvqw9QDj4MPxidSouugwX88URXn9ZDGrSfdfDFN2-6Lboag/4b4tpdhh74jqfvw/christmass.exe" className="download-button">
          Скачать прямо сейчас
        </a>
      </div>
    </div>
  );

  const handleDownload = async () => {
    try {
      const fileUrl = "/files/app-setup.exe"; // Путь к вашему файлу
      const fileName = "app-setup.exe";

      const response = await fetch(fileUrl);

      if (!response.ok) {
        throw new Error("Ошибка при загрузке файла");
      }

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = fileName;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);

      toast.success("Скачивание началось!", {
        position: "top-center",
        autoClose: 3000,
      });
    } catch (error) {
      console.error("Ошибка при скачивании:", error);
      toast.error("Ошибка при скачивании файла", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return toast(<CustomToast />, {
    position: "bottom-center",
    autoClose: false,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    className: "app-modal-container",
  });
};

export default Modal;
