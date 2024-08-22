import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./formLogin";
import SidebarComponent from '../components/sidebar/sidebar'

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/dashboard" element={<SidebarComponent />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
