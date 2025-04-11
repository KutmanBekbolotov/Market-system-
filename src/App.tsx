import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./pages/LoginPage";
import Home from "./pages/HomePage";
import AddProduct from "./pages/AddProduct";
import History from "./pages/HistoryTables";
import ReferencePage from "./pages/ReferencePage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    if (storedAuth) {
      setIsAuthenticated(storedAuth === "true");
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
        <Route path="/add" element={isAuthenticated ? <AddProduct /> : <Navigate to="/login" />} />
        <Route path="/history" element={isAuthenticated ? <History /> : <Navigate to="/login" />} />
        <Route path="/reference" element={isAuthenticated ? <ReferencePage /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;