import React from "react";
import { Card, CardVariant } from "./components/Card";
import { UserList } from "./components/UserList";
import { IUser } from "./types/types";

function App() {
  const users: IUser[] = [
    {
      id: 1,
      name: "Tom",
      email: "Tom Email",
      adress: { city: "Chicago", street: "one", zeepcode: "Tom zeepcode" },
    },
    {
      id: 2,
      name: "Jackie",
      email: "Jackie Email",
      adress: { city: "New York", street: "five", zeepcode: "Jackie zeepcode" },
    },
  ];
  return (
    <div className="App">
      <Card
        onclick={(num) => console.log("click", num)}
        variant={CardVariant.primary}
        width="200px"
        height="200px"
      >
        <button>Кнопка</button>
      </Card>
      <UserList users={users} />
    </div>
  );
}

export default App;
