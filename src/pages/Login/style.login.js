import styled from "styled-components";

export const LoginContainer = styled.div`
  background-color: #F0F1F7;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const LoginBox = styled.div`

`;

export const UsernameView = styled.div`
  gap: 15;
  width: 100%;
  padding-horizontal: 30;
  padding-top: 30;
  margin-bottom: 5;
`;

export const PasswordView = styled.div`
  gap: 15;
  width: 100%;
  padding-horizontal: 30;
  padding-top: 30;
  margin-bottom: 5;
`;

export const ButtonView = styled.div`
  width: 100%;
  padding-horizontal:30;
`;

export const InputHeader = styled.p`
  font-size: 16;
`;

export const Button = styled.button`
  backgroundColor: '#2194F3';
  height: 45;
  border-color: "gray";
  border-width: 1;
  border-radius: 3;
  padding-vertical: 25;
  align-items: "center";
  justify-content: "center";
  title-style: color: white, font-size: 16;
`;
