/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import {
  Container, Content, Background, AnimetedContainer,
} from './styles';
import logo from '../../assets/vector.svg';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';
import {
  ImgEmail, ImgPassword, Viewpassword, Users,
} from '../../components/icons/email';
import getValidationErrors from '../../util/getValidationErrors';
import Input from '../../components/input';
import Button from '../../components/button';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleSubmitd = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome Obrigatório'),
        email: Yup.string().required('E-mail Obrogaratório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post('/users', data);
      history.push('/');

      addToast({
        type: 'success',
        title: 'Cadastro realizado!',
        description: 'Você já pode realizar o logon no GoBarber!',
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description:
            'Ocorreu um erro ao realizar o cadastro, verifique seus dados e tente novamente.',
        });
      }
    }
  }, [addToast, history]);
  return (
    <Container>
      <Content>
        <AnimetedContainer>

          <div className="header">
            <div className="logotype">
              <img src={logo} alt="logo" />
            </div>

            <h1>Crie sua conta</h1>
            <p>Comece agora mesmo os seus 7 dias grátis</p>
          </div>

          <Form ref={formRef} onSubmit={handleSubmitd}>
            <strong>Nome</strong>
            <Input name="name" icon={Users} placeholder="Digite seu nome" />
            <strong>Email</strong>
            <Input name="email" icon={ImgEmail} placeholder="Digite seu email" />

            <strong>Senha</strong>
            <Input icon={ImgPassword} buttonPassword={Viewpassword} name="password" type="password" placeholder="Digite sua senha" />

            <Button type="submit">Cadastrar</Button>
            <Link to="/"><small>Já possui uma conta?</small><small>Entrar</small> </Link>

            <div className="copy">
              <p> &copy; 2021 - Todos os direitos reservados </p>
            </div>
          </Form>
        </AnimetedContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
