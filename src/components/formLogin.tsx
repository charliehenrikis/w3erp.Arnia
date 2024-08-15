import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import ImagemLadoFormulario from '../assets/Frame 61.svg';

// Estilizando o contêiner principal
const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

// Estilizando o contêiner do formulário
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
  max-width: 400px;
`;

// Estilizando o formulário
const Form = styled.form`
  width: 100%;
`;

// Estilizando o contêiner do campo de entrada
const InputContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 8px 0;
`;

// Estilizando o campo de entrada
const Input = styled.input<{ type: string }>`
  padding: 12px;
  padding-right: 40px; /* Espaço para o ícone */
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box; /* Inclui padding e border no tamanho total */
`;

// Estilizando o ícone de visibilidade da senha
const Icon = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  color: #3f51b5;
  z-index: 1; /* Garante que o ícone esteja acima do campo de entrada */
`;

// Estilizando o botão
const Button = styled.button`
  padding: 12px;
  margin-top: 16px;
  width: 100%;
  border: none;
  border-radius: 4px;
  background-color: #3f51b5;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #303f9f;
  }
`;

// Estilizando o contêiner de texto
const TextContainer = styled.div`
  width: 100%;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h4`
  margin-bottom: 16px;
`;

const Subtitle = styled.h5`
  margin-bottom: 16px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const LoginForm: React.FC = () => {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [dadosFormulario, setDadosFormulario] = useState({ nome: '', senha: '' });

  const lidarComMudanca = (evento: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evento.target;
    setDadosFormulario({ ...dadosFormulario, [name]: value });
  };

  const alternarVisibilidadeSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const lidarComEnvio = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    console.log('Dados do formulário:', dadosFormulario);
  };

  return (
    <Container>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TextContainer>
            <Title>Seja bem vindo</Title>
            <Subtitle>Realize seu login</Subtitle>
          </TextContainer>
          <FormContainer>
            <Form onSubmit={lidarComEnvio}>
              <Input
                type="text"
                name="nome"
                placeholder="Nome"
                value={dadosFormulario.nome}
                onChange={lidarComMudanca}
              />
              <InputContainer>
                <Input
                  type={mostrarSenha ? 'text' : 'password'}
                  name="senha"
                  placeholder="Senha"
                  value={dadosFormulario.senha}
                  onChange={lidarComMudanca}
                />
                <Icon onClick={alternarVisibilidadeSenha}>
                  {mostrarSenha ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                </Icon>
              </InputContainer>
              <Button type="submit">Entrar</Button>
            </Form>
          </FormContainer>
        </div>
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image src={ImagemLadoFormulario} alt="Imagem SVG" />
      </div>
    </Container>
  );
};

export default LoginForm;
