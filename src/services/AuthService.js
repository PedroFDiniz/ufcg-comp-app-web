import axios from "axios";
import API, { handleErrors } from ".";
import { API_ENDPOINT_AUTH_REVIEWER_COORDINATOR, AUTH_ENDPOINT_TOKEN_REQUEST } from "../utils/constants";

export async function login(username, password) {
  try {
    const body = {
      credentials: {
        username,
        password,
      }
    }
    return await axios.post(AUTH_ENDPOINT_TOKEN_REQUEST, body);
  } catch (error) {
    handleErrors(error);
  }
}

export async function authReviewerCoordinator(username, password) {
  try {
    const response = login(username, password);
    const token = response.data[0].token;
    API.defaults.headers.common["Authorization"] = 'Bearer ' + token;
    return await API.post(API_ENDPOINT_AUTH_REVIEWER_COORDINATOR);
  } catch (error) {
    handleErrors(error, "Falha ao realizar login\nVerifique suas credenciais e tente novamente.");
  }
};
