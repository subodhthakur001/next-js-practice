import React from "react";
export default function DashboardLayout({
  children,
  notifications,
  users,
}:{
  children: React.ReactNode;
  notifications : React.ReactNode;
  users : React.ReactNode;
}) {
  return (
    <>
    {children}
    <div>{notifications}</div>
    <div>{users}</div>
    </>
  );
}
