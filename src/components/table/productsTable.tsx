import React from 'react';
import LampadaImg from '../../assets/facial-cleanser.png';
import DataSection from './tableCode';

const ProductsTable: React.FC = () => (
  <DataSection
    iconSrc={LampadaImg}
    title="Produtos"
    fetchUrl="http://localhost:3000/products"
    filterPercentage={50}
    columnTitles={{ id: 'ID', name: 'Produto', percentage: 'Porcentagem' }}
    percentageField="percentage"
  />
);

export default ProductsTable;
