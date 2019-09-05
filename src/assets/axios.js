import axios from "axios";
import router from "../router"

export const instance = axios.create({
  baseURL:'http://127.0.0.1:3000',
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    timeout: 30000,
    withCredentials: true, //请求头带cookie
})


instance.interceptors.request.use(
  request=>{
    return request;
  }
)

instance.interceptors.response.use(
  response => {
    switch (response.data.code)
    {
      case -1 :
        router.push("/login");
      return;
      default : return response;
    }
  },
  error => {
    return Promise.reject(error);
  }

);
