import axios from "axios";

const api = axios.create({
  baseURL: "https://422a-203-190-154-106.ngrok-free.app",
});

export const getData = () => {
  return api.get(
    "/api/v1/amfi_mf_list/"
  );
};
export const getCategoryData = () => {
  return api.get(
    "/api/v1/amfi_mf_list/"
  );
};