import { useEffect, useState } from "react";
import ApiClient from "./services/ApiClient";

type User = {
  id: number;
  name: string;
  picture: string;
}

export default function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const api = ApiClient.getInstance().getClient();

    api.get("/users")
    .then(response => setUsers(response.data))
    .catch(error => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center mb-4">Users</h1>
      <div className="border border-gray-300 rounded-lg shadow-md py-6 px-10 flex flex-col items-start gap-4">
        {users.map(user => (
          <div key={user.id} className="flex items-center gap-4 select-none">
            <img src={user.picture} alt={user.name} className="rounded-full w-16 h-16" />
            <p className="text-lg">{user.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
