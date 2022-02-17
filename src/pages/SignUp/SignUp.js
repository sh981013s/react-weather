import React, { useState } from 'react';
import styled from 'styled-components';
// import { auth, signInWithGoogle } from '../../firebase/firebaseConfig';
import { Link } from 'react-router-dom';
import { useSignup } from '../../hooks/useSignup';

const Box = styled.div`
  position: relative;
  width: 100%;
  height: 95vh;
  margin-top: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.background};
`;

const Card = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 10px;
  width: 65%;
  min-height: 80vh;
  box-shadow: 0 0 2rem rgb(0 0 255 / 60%);
`;

const LoginContent = styled.main`
  flex: 2 2;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  padding: 0 1rem;
`;

const Header = styled.span`
  font-size: 2.5rem;
  display: block;
  margin-bottom: 2rem;
  color: #0c1066;
  letter-spacing: 0.2rem;
  font-weight: 700;
`;

const Form = styled.form`
  display: flex;
  flex-flow: column;
  width: 80%;
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

const LoginBtn = styled.button`
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

const SignupLink = styled(Link)`
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
  animation: 2.25s ease-in-out fadein;
  flex: 3 3;
  display: -webkit-box;
  display: flex;
  justify-content: flex-end;
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

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const { signup, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName);
  };

  return (
    <Box>
      <Card>
        <LoginContent>
          <Header>SignUp</Header>
          <Form>
            <LoginInput
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <LoginInput
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <LoginInput
              name="displayName"
              placeholder="Nickname"
              onChange={(e) => setDisplayName(e.target.value)}
            />
            {/*{!isPending && <LoginBtn onClick={handleSubmit}>Signup</LoginBtn>}*/}
            {/*{isPending && <LoginBtn disabled>Signup Processing...</LoginBtn>}*/}
            <LoginBtn onClick={handleSubmit}>Signup</LoginBtn>
            {error && <p>{error}</p>}
          </Form>
          <SignupWrapper>
            Already have an account?
            <SignupLink to="/login">Log in</SignupLink>
          </SignupWrapper>
        </LoginContent>
        <Aside>
          <AsideOverlay />
        </Aside>
      </Card>
    </Box>
  );
};

export default SignUp;
