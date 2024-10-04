import { useState } from "react";
import { CircularProgress } from "@mui/material";

// CONTEXT
import { useAuth } from "../../context/AuthContext";

// SERVICES
import { authReviewerCoordinator } from "../../services/AuthService";

// STYLES
import {
  LoginContainer,
  LoginBox,
  UsernameView,
  PasswordView,
  ButtonView,
  InputHeader,
  Button,
} from './style.login';

export const LoginPage = () => {
  const { handleAuthSuccess, handleAuthFailure } = useAuth();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // const handleSuccess = async (googleData) => {
  //   setIsLoading(true);
  //   const response = await authReviewerCoordinator(googleData.credential);
  //   if (response?.status === 200) {
  //     const userData = response.data.user;
  //     handleAuthSuccess(googleData, userData);
  //   } else {
  //     handleAuthFailure();
  //   }
  //   setIsLoading(false);
  // }

  const handleAuthUser = async (username, password) => {
    setIsLoading(true);
    try {
      const response = await authReviewerCoordinator(username, password);
      const authentication = response.status;
      const userData = { name: response.body[0]?.name, email: response.body[0]?.email };
      handleAuthSuccess(authentication, userData);
    } catch (error) {
      console.error(error);
      handleAuthFailure();
    }
    setIsLoading(false);
  }

  return (
    <LoginContainer>
      <img src={require("../../assets/retangular-name.png")} alt="Computação@UFCG" />
      {isLoading ?
        <CircularProgress /> :
        <LoginBox>
          <UsernameView>
            <InputHeader>Email</InputHeader>
            <input name='userInput' placeholder='Digite seu email CCC' value={username} onChangeText={setUsername} autoCorrect={false} autoCapitalize='none' />
          </UsernameView>
          <PasswordView>
            <InputHeader>Senha</InputHeader>
            <input name='passwordInput' placeholder='Digite sua senha' secureTextEntry value={password} onChangeText={setPassword} autoCorrect={false} autoCapitalize='none' />
          </PasswordView>
          <ButtonView>
            <Button title='Login' onPress={handleAuthUser}>
              Login
            </Button>
          </ButtonView>
        </LoginBox>
      }
    </LoginContainer>
  )
}