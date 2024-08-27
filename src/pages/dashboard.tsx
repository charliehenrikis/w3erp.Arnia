import React from 'react';
import SidebarComponent from '../components/sidebar/sidebar';
import ProductsTable from '../components/table/productsTable';
import CustomersTable from '../components/table/customersTable';

const DashboardPage: React.FC = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            {/* Espaço reservado para os headers */}
            <div style={{ flexShrink: 0 }}>
                {/* Adicione os componentes de header aqui */}
            </div>
            <div style={{ display: 'flex', flex: 1 }}>
                <SidebarComponent />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    {/* Espaço flexível que ocupa o restante da altura */}
                    <div style={{ flex: 1 }} />
                    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                        <div style={{ width: '49%', marginRight: '2%' }}>
                            <ProductsTable />
                        </div>
                        <div style={{ width: '49%' }}>
                            <CustomersTable />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
