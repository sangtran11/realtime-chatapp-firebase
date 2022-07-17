import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "../src/components/Login";
import ChatRoom from "../src/components/ChatRoom";
import AuthProvider from "./Context/AuthProvider";
import AppProvider from "./Context/AppProvider";
import AddRoomModal from "./components/Modals/AddRoomModal";
import InviteMembersModal from "./components/Modals/InviteMembersModal";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <Routes>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/" element={<ChatRoom />}></Route>
          </Routes>
          <AddRoomModal />
          <InviteMembersModal />
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
