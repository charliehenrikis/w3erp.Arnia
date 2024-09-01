import React from 'react';
import PeopleImg from '../../assets/prabaixo.png';
import DataSection from '../table/tableCode';

const ProductDetailDown: React.FC = () => (
  <DataSection
    iconSrc={PeopleImg}
    title="Produtos em baixa"
    fetchUrl="http://localhost:3000/products"
    columnTitles={{ id: 'ID', name: 'Produto', percentage: 'Percentual', amount: 'QTD' }}
    percentageField="percentage"
    amountField="amount" // Adiciona o campo de quantidade para ordenação
    sortOrder="asc" // Define a ordem de ordenação para decrescente
    showToggle={false}
    filterPercentage={-10} 
  />
);

export default ProductDetailDown;
