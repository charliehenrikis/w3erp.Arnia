import React from 'react';
import SidebarComponent from '../components/sidebar/sidebar';
import ProductsTable from '../components/table/productsTable';
import CustomersTable from '../components/table/customersTable';
import BlueBoxComponent from '../components/boxHeaders/boxHeaders';

const DashboardPage: React.FC = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <div style={{ display: 'flex', flex: 1 }}>
                {/* Sidebar e BlueBoxComponent lado a lado */}
                <SidebarComponent />
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                    {/* Novo componente adicionado acima da BlueBoxComponent */}
                    <div style={{ height: '80px', backgroundColor: '#f0f0f0', padding: '10px' }}>
                        {/* Adicione o novo componente aqui */}
                        Novo Componente
                    </div>
                    {/* Ajuste o tamanho do BlueBoxComponent para garantir que haja espaço para as tabelas */}
                    <div style={{ height: '150px', overflow: 'hidden' }}>
                        <BlueBoxComponent />
                    </div>
                    <div style={{ flex: 1, display: 'flex', padding: '20px' }}>
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
