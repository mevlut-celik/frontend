import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// DON'T EDIT ABOVE

import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider, AuthenticatedRoute } from "./auth/authentication";
import Login from "./pages/Login";

function App() {
  return (
    <AuthProvider >
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;