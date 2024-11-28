import React from "react";
import Sidebar from "./components/sideBar";
import Header from "./components/header";
export default function StaffPage({ children }) {
  return (
    <div className="h-screen flex flex-col overflow-y-hidden no-scrollbar">
      <Header />
      <div className="flex h-[calc(100vh-60px)] overflow-y-hidden no-scrollbar bg-mainColer">
        <Sidebar />
        <div className="flex-1 overflow-y-scroll bg-white rounded-md">
          <div className="p-4 ">{children}</div>
        </div>
      </div>
    </div>
  );
}
