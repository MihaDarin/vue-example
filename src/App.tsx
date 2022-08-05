import axios from "axios";
import { Link } from "react-router-dom";
// import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { TodoItemPage } from "./components/TodoItemPage";
import TodosPage from "./components/TodosPage";
import { UserItemPage } from "./components/UserItemPage";
import { UsersPage } from "./components/UsersPage";
// import { Card, CardVariant } from "./components/Card";
// import EventsExample from "./components/EventsExample";
// import List from "./components/List";
// import TodoItem from "./components/TodoItem";
// import { UserItem } from "./components/UserItem";
// import { UserList } from "./components/UserList";
// import { ITodo, IUser } from "./types/types";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Link to="/users">Пользователи</Link>
          <Link to="/todos">Список дел</Link>
        </div>
        <Routes>
          <Route path="/users" element={<UsersPage />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/users/:id" element={<UserItemPage />} />
          {/* <Route path="/todos/:id" element={<TodoItemPage />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
