/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import {
  Container, Content, Background, AnimetedContainer,
} from './styles';
import { useAuth } from '../../hooks/AuthContext';
import { useToast } from '../../hooks/toast';
import logo from '../../assets/vector.svg';
import { ImgEmail, ImgPassword, Viewpassword } from '../../components/icons/email';
import getValidationErrors from '../../util/getValidationErrors';
import Input from '../../components/input';
import Button from '../../components/button';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { /* user, */ signIn } = useAuth();
  const { addToast } = useToast();
  /* console.log(user); */

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleSubmitd = useCallback(async (data: SignInFormData) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().required('E-mail Obrogaratório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await signIn({
        email: data.email,
        password: data.password,
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }
    }
    addToast({
      type: 'error',
      title: 'Erro na autenticação',
      description: 'Ocorreu um erro ao fazer login, verifique seu email e senha',
    });
  }, [signIn, addToast]);
  return (
    <Container>
      <Content>
        <AnimetedContainer>
          <div className="header">
            <div className="logotype">
              <img src={logo} alt="logo" />
            </div>

            <h1>Olá, Bem vindo de volta!</h1>
            <p>Comece agora mesmo os seus 7 dias grátis</p>
          </div>

          <Form ref={formRef} onSubmit={handleSubmitd}>
            <strong>Email</strong>
            <Input name="email" icon={ImgEmail} placeholder="Digite seu email" />

            <strong>Senha</strong>
            <Input
              icon={ImgPassword}
              buttonPassword={Viewpassword}
              name="password"
              placeholder="Digite sua senha"
              autoComplete="current-password"
            />

            <div className="checkPassword">
              <div>

                <label htmlFor="password">
                  <input type="checkbox" name="password" placeholder="Lembrar senha" defaultChecked />
                  Lembrar senha
                </label>

              </div>

              <a href="test">Esqueceu sua senha?</a>
            </div>

            <Button type="submit">Login</Button>
            <Link to="/signUp"><small>Não está registrado?</small><small>Crie sua conta agora</small> </Link>

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
