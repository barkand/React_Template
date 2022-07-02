import axios from "axios";

let apiURL = process.env.REACT_APP_SERVER_URL;
if (process.env.REACT_APP_API_TYPE === "REST") {
  apiURL = `${apiURL}/api/${process.env.REACT_APP_API_VERSION.toLowerCase()}/`;
}

let axiosInstance;

const api = () => {
  let token = JSON.parse(localStorage.getItem("auth"))?.token;

  if (
    !axiosInstance ||
    axiosInstance.defaults.headers.common.Authorization !== token
  ) {
    axiosInstance = axios.create({
      baseURL: apiURL,
      headers: { "Content-Type": "application/json" },
    });
  }

  axiosInstance.interceptors.request.use((config) => {
    config.headers["User-Lang"] = "en-US";

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
  );

  return axiosInstance;
};

export const GetAxiosApi = (api_name, params) => {
  return new Promise((resolve, reject) => {
    api()
      .get(api_name, params)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const PostAxiosApi = (api_name, params) => {
  return new Promise((resolve, reject) => {
    api()
      .post(api_name, params)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
