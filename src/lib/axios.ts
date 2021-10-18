import Axios from "axios";
import { BASE_URL } from "src/config";

export const axios = Axios.create({
  baseURL: BASE_URL,
});
