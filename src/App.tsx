import React, { useState, useEffect } from "react";
import Card, { CardVariant } from "./components/Card";
import UserList from "./components/UserList";
import { IUser } from "./types/types";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers()
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data)
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div>
      <Card
        onClick={() => {
          console.log("функция работает");
        }}
        variant={CardVariant.primary}
        width="200px"
        height="200px"
      >
        <button>Кнопка</button>
      </Card>
      <UserList users={users} />
    </div>
  );
};

export default App;
