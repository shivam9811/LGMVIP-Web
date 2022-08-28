import Navbar from "./components/Navbar";
import UsersList from "./components/UsersList";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <Navbar users={users} setUsers={setUsers} setIsLoading={setIsLoading} />
      <UsersList users={users} isLoading={isLoading} />
    </div>
  );
}

export default App;
