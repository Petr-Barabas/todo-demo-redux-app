import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Tutorial/common/Header";
import PageNotFound from "./PageNotFound";
import TasksHomePage from "./todoApp/home/TasksHomePage";

export default function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Routes>
        <Route path="/tasks" element={<TasksHomePage />} />
        <Route element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
