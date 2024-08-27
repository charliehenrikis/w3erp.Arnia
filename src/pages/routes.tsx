import { BrowserRouter, Routes, Route } from "react-router-dom";
import SidebarComponent from '../components/sidebar/sidebar'
import GlobalStyles from "../global/globalStyles";
import LoginForm from "../components/form/formLogin";
import ProductsTable from "../components/table/productsTable";
import CustomersTable from "../components/table/customersTable";

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
        <GlobalStyles />
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/dashboard" element={<SidebarComponent />} />
                <Route path="/predicoes" element={<ProductsTable />} />
                <Route path="/customers" element={<CustomersTable />} />

            </Routes>
            
        </BrowserRouter>
    );
};

export default AppRoutes;