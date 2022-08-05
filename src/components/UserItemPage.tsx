import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IUser } from "../types/types";
import List from "./List";
import { UserItem } from "./UserItem";

type UserItemPageParams = {
  id: string;
};

export const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams<UserItemPageParams>();
  const navigate = useNavigate();
  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(
        "https://jsonplaceholder.typicode.com/users/" + params.id
      );
      setUser(response.data);
    } catch (error) {
      alert(error);
    }
  }
  return (
    <div>
      <button onClick={() => navigate("/users")}>Back</button>
      <h1>Страница пользователя {user?.name}</h1>
      <div>{user?.email}</div>
      <div>
        {user?.address.city} {user?.address.street} {user?.address.zeepcode}
      </div>
    </div>
  );
};
