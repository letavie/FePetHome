import React from "react";
import AdminHeader from "./components/AdminHeader";
import AdminSidebar from "./components/AdminSidebar";
export default function AdminPage({ children }) {
  return (
    <div className="h-screen flex flex-col overflow-y-hidden no-scrollbar">
      <AdminHeader />
      <div className="flex h-[calc(100vh-60px)] overflow-y-hidden no-scrollbar bg-mainColer">
        <AdminSidebar />
        <div className="flex-1 overflow-y-scroll bg-white rounded-md">
          <div className="p-4 ">{children}</div>
        </div>
      </div>
    </div>
  );
}
