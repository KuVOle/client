import axios from "axios";

const interceptor = (config) => {
  config.headers.Authorization = `${localStorage.getItem("token")}`;
  return config;
};

const $host = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:8833/",
});

const $administratorHost = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:8833/administrator",
});

$administratorHost.interceptors.request.use(interceptor);

const $materialAccounting = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:8833/materialAccounting",
});
$materialAccounting.interceptors.request.use(interceptor);

const $globalMaterialAccounting = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:8833/globalMaterialAccounting",
});
$globalMaterialAccounting.interceptors.request.use(interceptor);

export {
  $host,
  $administratorHost,
  $materialAccounting,
  $globalMaterialAccounting,
};
