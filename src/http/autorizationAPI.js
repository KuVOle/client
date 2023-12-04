import { $host } from "./axiosConfiguration";
import { loginPointAPI } from "./authorizationPoints";

export const loginAPI = async (user) => {
  const { data } = await $host.post(loginPointAPI, user);
  if (data?.jwtToken) {
    localStorage.setItem(data.jwtToken);
  }
  return data;
};
