import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";

function AppContent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Sidebar />} >
            
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppContent;
