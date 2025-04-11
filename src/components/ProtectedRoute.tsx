import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {

    const isAuthenticated = localStorage.getItem("authenticated") === "true";

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;