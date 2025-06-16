import { useState } from "react";
import type { NotificationType } from "./components/types/NotificationType";
import { NotificationFactory } from "./components/notifications/NotificationFactory";

export default function App() {
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [notificationType, setNotificationType] = useState<NotificationType>("success");
  const [notificationMessage, setNotificationMessage] = useState<string>("");

  function handleShowNotification() {
    setShowNotification(true);
  }

  function handleCloseNotification() {
    setShowNotification(false);
    setNotificationMessage("");
  }

  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <div className="pt-16 flex flex-col items-center justify-center gap-4 w-full max-w-80">
        <select
          value={notificationType}
          onChange={(e) => setNotificationType(e.target.value as NotificationType)}
          className="w-full border-2 border-slate-800 outline-0 p-2 rounded text-lg"
        >
          <option value="success">Sucesso</option>
          <option value="error">Erro</option>
          <option value="warning">Aviso</option>
          <option value="info">Informação</option>
        </select>
        <input 
          type="text" 
          className="w-full border-2 border-slate-800 outline-0 p-2 rounded text-lg" 
          placeholder="Mensagem da notificação"
          value={notificationMessage}
          onChange={(e) => setNotificationMessage(e.target.value)}
        />
        <button onClick={handleShowNotification} className="cursor-pointer bg-blue-600 text-lg w-full text-slate-100 font-medium rounded px-6 py-3 transition ease-in-out hover:bg-blue-700">Mostrar Notificação</button>
      </div>

      {showNotification && (
        NotificationFactory({
          type: notificationType,
          message: notificationMessage,
          closeModal: handleCloseNotification,
        })
      )}
    </div>
  )
}