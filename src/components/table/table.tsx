import { useEffect, useState } from 'react';
import styled from 'styled-components';

// Estilização com styled-components
const Container = styled.div`
  font-size: Poppins;
  width: 500px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  background-color: #f5f5f5;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Icon = styled.div`
  font-size: 24px;
  color: #333;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;

const ButtonAlta = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ButtonBaixa = styled.button`
  background-color: #f44336;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: #001C98;
  color: white;
  font-weight: bold;
`;

const TableCell = styled.th`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd
`;

const TableData = styled.td`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const Arrow = styled.span`
  font-size: 16px;
  margin-left: 10px;
  color: #333;
`;

interface Product {
  id: string;
  name: string;
  percentage: string;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Dados falsos para simular uma API
    const fetchProducts = () => {
      const fakeData: Product[] = [
        { id: '001', name: 'Papel higiênico', percentage: '+72%' },
        { id: '002', name: 'Álcool em gel', percentage: '+68%' },
        { id: '003', name: 'Sabonete', percentage: '+64%' },
        { id: '004', name: 'Detergente', percentage: '+56%' },
        { id: '005', name: 'Água sanitária', percentage: '+52%' },
        { id: '006', name: 'Limpador Multiuso', percentage: '+45%' },
        { id: '007', name: 'Perfume', percentage: '+40%' },
        { id: '008', name: 'Cloro', percentage: '+32%' },
        { id: '009', name: 'Limpa piso', percentage: '+26%' },
        { id: '010', name: 'Alvejante', percentage: '+20%' },
      ];
      setProducts(fakeData);
    };

    fetchProducts();
  }, []);

  return (
    <Container>
      <Header>
        <Icon>💡</Icon>
        <Title>Produtos</Title>
        <Buttons>
          <ButtonAlta>Em alta</ButtonAlta>
          <ButtonBaixa>Em baixa</ButtonBaixa>
        </Buttons>
      </Header>
      <Table>
        <TableHead>
          <tr>
            <TableCell>ID</TableCell>
            <TableCell>Produto</TableCell>
            <TableCell>Percentual</TableCell>
          </tr>
        </TableHead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <TableData>{product.id}</TableData>
              <TableData>{product.name}</TableData>
              <TableData>
                {product.percentage}
                <Arrow></Arrow>
              </TableData>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Products;
