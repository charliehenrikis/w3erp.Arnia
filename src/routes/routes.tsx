import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "../global/globalStyles";
import LoginForm from "../components/form/formLogin";
import DashboardPage from "../pages/dashboard";
import BlueBoxComponent from "../components/boxHeaders/boxHeaders";
import PredicoesPage from "../pages/predicoes";

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
        <GlobalStyles />
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/predicoes" element={<PredicoesPage />} />
                <Route path="/customers" element={<BlueBoxComponent />} />

            </Routes>
            
        </BrowserRouter>
    );
};

export default AppRoutes;
