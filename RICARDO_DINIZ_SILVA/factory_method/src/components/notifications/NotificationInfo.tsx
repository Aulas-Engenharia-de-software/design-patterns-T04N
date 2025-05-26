import { Info, X } from "lucide-react";

interface NotificationInfoProps {
  message: string;
  closeNotification: () => void;
}

export function NotificationInfo({ message, closeNotification }: NotificationInfoProps) {
  return (
    <div className="fixed bg-black/80 w-full h-full flex items-center justify-center">
      <div className="relative bg-blue-50 w-full max-w-2xl h-full max-h-80 rounded-lg p-8 flex flex-col items-center justify-center border-2 border-blue-600">
        <div className="absolute top-0 left-0 flex items-center justify-between w-full p-4">
          <div className="flex items-center gap-1">
            <p className="font-medium text-blue-600 text-lg">Informação</p>
            <Info className="text-blue-600" />
          </div>
          <X className="cursor-pointer" onClick={closeNotification} />
        </div>
        <h2 className="text-2xl font-normal text-center">{message}</h2>
      </div>
    </div>
  );
}
