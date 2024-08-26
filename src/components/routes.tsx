import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./formLogin";
import SidebarComponent from '../components/sidebar/sidebar'
import TableProdocts from "./table/table";
import GlobalStyles from "../global/globalStyles";

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/dashboard" element={<SidebarComponent />} />
                <Route path="/predicoes" element={<TableProdocts />} />
            </Routes>
            <GlobalStyles />
        </BrowserRouter>
    );
};

export default AppRoutes;
