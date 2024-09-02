import React from 'react';
import PeopleImg from '../../assets/pracima.png';
import DataSection from '../table/tableCode';

const ProductDetailHigh: React.FC = () => (
  <DataSection
    iconSrc={PeopleImg}
    title="Produtos em alta"
    fetchUrl="http://localhost:3000/products"
    columnTitles={{ id: 'ID', name: 'Produto', percentage: 'Percentual', amount: 'QTD' }}
    percentageField="percentage"
    amountField="amount" // Adiciona o campo de quantidade para ordenação
    sortOrder="desc" // Define a ordem de ordenação para decrescente
    showToggle={false}
    filterPercentage={50} // Define que todos os itens serão exibidos sem filtro adicional
  />
);

export default ProductDetailHigh;
