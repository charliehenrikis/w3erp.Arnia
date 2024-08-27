import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "../global/globalStyles";
import LoginForm from "../components/form/formLogin";
import ProductsTable from "../components/table/productsTable";
import DashboardPage from "../pages/dashboard";
import BlueBoxComponent from "../components/boxHeaders/boxHeaders";

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
        <GlobalStyles />
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/predicoes" element={<ProductsTable />} />
                <Route path="/customers" element={<BlueBoxComponent />} />

            </Routes>
            
        </BrowserRouter>
    );
};

export default AppRoutes;
