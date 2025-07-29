import React from "react";
export default function DashboardLayout({
  children,
  notifications,
  users,
  login,
}:{
  children: React.ReactNode;
  notifications : React.ReactNode;
  users : React.ReactNode;
  login : React.ReactNode;
}) {
  const isLoggedIn = false;
  return isLoggedIn ? 
  (
    <>
    {children}
    <div>{notifications}</div>
    <div>{users}</div>
    </>
  ) 
  : 
  (
    <div>{login}</div>
  )
}
