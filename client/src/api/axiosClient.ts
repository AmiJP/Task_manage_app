import { baseURL } from "./url";
import axios from "axios";

const axiosConfig = {
  baseURL: baseURL,
  headers: { "content-type": "Application/json" },

  timeout: 10000,
  withCredentials: false,
};

export const axiosClient = axios.create(axiosConfig);
