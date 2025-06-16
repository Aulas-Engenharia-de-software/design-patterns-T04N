import type { NotificationType } from "../types/NotificationType";
import { NotificationError } from "./NotificationError";
import { NotificationInfo } from "./NotificationInfo";
import { NotificationSuccess } from "./NotificationSuccess";
import { NotificationWarning } from "./NotificationWarning";

interface NotificationFactoryProps {
  type: NotificationType;
  message: string;
  closeModal: () => void;
}

export function NotificationFactory({ type, message, closeModal }: NotificationFactoryProps) {
  switch (type) {
    case "success":
      return <NotificationSuccess message={message} closeNotification={closeModal} />;
    case "error":
      return <NotificationError message={message} closeNotification={closeModal} />;
    case "warning":
      return <NotificationWarning message={message} closeNotification={closeModal} />;
    case "info":
      return <NotificationInfo message={message} closeNotification={closeModal} />;
    default:
      return null;
  }
}