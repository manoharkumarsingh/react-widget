import React from "react";
import { Accordion, Tab, Popup, Autocomplete } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
const RouterComponent = () => {
  return (
    <BrowserRouter>
      <div className="flex gap-8">
        <div className="bg-slate-600">
          <Sidebar />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Accordion />} />
            <Route path="/tab" element={<Tab />} />
            <Route path="/modal" element={<Popup />} />
            <Route path="/autocomplete" element={<Autocomplete />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default RouterComponent;
