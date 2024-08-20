import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./formLogin";
import DashboardComponent from "./dashboad";

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/dashboard" element={<DashboardComponent />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
