import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import ImagemLadoFormulario from '../assets/Rectangle 3953.png';
import GenericButton from './button/button';

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const FormSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50vw;
  height: 100vh;
  box-sizing: border-box;
`;

const ImageSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50vw;
  height: 100vh;
  box-sizing: border-box;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 8px 0;
`;

const Input = styled.input`
  border-radius: 15px;
  padding: 12px;
  padding-right: 40px;
  width: 100%;
  border: 1px solid #ccc;
  box-sizing: border-box;
`;

const Icon = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  color: #3f51b5;
  z-index: 1;
`;

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

const ErrorMessage = styled.p`
  color: red;
  margin: 8px 0 0 0;
  font-size: 12px;
`;

const ButtonContainer = styled.div`
  margin-top: 16px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const LoginForm: React.FC = () => {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [dadosFormulario, setDadosFormulario] = useState({ nome: '', senha: '' });
  const [erros, setErros] = useState({ nome: '', senha: '' });

  const lidarComMudanca = (evento: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evento.target;
    setDadosFormulario({ ...dadosFormulario, [name]: value });
  };

  const alternarVisibilidadeSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const validarFormulario = () => {
    const erros = { nome: '', senha: '' };
    if (!dadosFormulario.nome) {
      erros.nome = 'Nome é obrigatório';
    }
    if (!dadosFormulario.senha) {
      erros.senha = 'Senha é obrigatória';
    } else if (dadosFormulario.nome !== 'usuario' || dadosFormulario.senha !== 'senha123') {
      erros.senha = 'Nome ou senha incorretos';
    }
    setErros(erros);
    return !erros.nome && !erros.senha;
  };

  const lidarComEnvio = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    if (validarFormulario()) {
      console.log('Login bem-sucedido:', dadosFormulario);
      // Aqui você pode adicionar lógica adicional após o login, se necessário
    }
  };

  return (
    <Container>
      <FormSection>
        <Form onSubmit={lidarComEnvio}>
          <TextContainer>
            <Title>Seja bem vindo</Title>
            <Subtitle>Realize seu login</Subtitle>
          </TextContainer>
          <InputContainer>
            <Input
              type="text"
              name="nome"
              placeholder="Nome"
              value={dadosFormulario.nome}
              onChange={lidarComMudanca}
            />
            {erros.nome && <ErrorMessage>{erros.nome}</ErrorMessage>}
          </InputContainer>
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
            {erros.senha && <ErrorMessage>{erros.senha}</ErrorMessage>}
          </InputContainer>
          <ButtonContainer>
            <GenericButton label="Entrar" path="/dashboard" />
          </ButtonContainer>
        </Form>
      </FormSection>
      <ImageSection>
        <Image src={ImagemLadoFormulario} alt="Imagem PNG" />
      </ImageSection>
    </Container>
  );
};

export default LoginForm;
