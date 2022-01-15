import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  display: flex;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgb(0 0 0 / 10%);
  width: 85%;
  min-height: 80vh;
`;

const LoginContent = styled.main`
  -webkit-box-flex: 2;
  flex: 2 2;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-flow: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  min-height: 100%;
`;

const Header = styled.span`
  font-size: 2.5rem;
  display: block;
  margin-bottom: 2rem;
  color: #0c1066;
  letter-spacing: .2rem;
  font-weight: 700;
`;

const Form = styled.form`
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-flow: column;
  width: 80%;
  -webkit-box-align: center;
  align-items: center;
`;

const LoginInput = styled.input`
  margin: 1rem 0;
  padding: 1.5rem;
  border-radius: 2rem;
  outline: 0;
  border: none;
  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.3);
  width: 80%;
`;

const LoginBtn = styled.input`
  background-color: #00ff9b;
  padding: 1rem;
  border-radius: 2rem;
  outline: 0;
  border: none;
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 1.5rem;
  width: 50%;
  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);
`;

const SignupWrapper = styled.div`
  margin-top: 3rem;
`;

const SignupLink = styled.a`
  text-transform: uppercase;
  margin-top: 1rem;
  text-decoration: none;
  color: #ff3a82;
  margin-left: 1rem;
`;

const NonmemberLink = styled.a`
  color: lightgray;
  margin-top: 1rem;
  margin-left: 1rem;
`;

const Aside = styled.aside`
  -webkit-animation: 2.25s ease-in-out fadein;
  animation: 2.25s ease-in-out fadein;
  -webkit-box-flex: 3;
  flex: 3 3;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-flow: column;
  min-height: 100%;
  border-radius: 0 10px 10px 0;
  background: url(https://source.unsplash.com/random/1200x900?mountain) center
    center/cover no-repeat;
  position: relative;
`;

const AsideOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 0 10px 10px 0;
`;

const Login = () => {
  return (<Card>
    <LoginContent>
    <Header>Login</Header>
    <Form>
      <LoginInput name="email" placeholder="Email"></LoginInput>
      <LoginInput name="password" placeholder="Password"></LoginInput>
      <LoginBtn name="submit" type="submit" value="Login"></LoginBtn>
    </Form>
    <SignupWrapper>
      Don't have an account?
      <SignupLink router-link="/signup" href="/signup">Sign up</SignupLink>
    </SignupWrapper>
    <NonmemberLink>비회원으로 로그인</NonmemberLink>
    </LoginContent>
    <Aside>
      <AsideOverlay />
    </Aside>
  </Card>);
}

export default Login;