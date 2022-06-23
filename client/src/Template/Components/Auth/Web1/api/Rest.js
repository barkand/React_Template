import axios from "axios";

let apiURL = `${
  process.env.REACT_APP_SERVER_URL
}/api/${process.env.REACT_APP_API_VERSION.toLowerCase()}/`;

let queryString = function (params, prefix) {
  const query = Object.keys(params).map((key) => {
    const value = params[key];

    if (params.constructor === Array) key = `${prefix}`;
    else if (params.constructor === Object)
      key = prefix ? `${prefix}[${key}]` : key;

    if (typeof value === "object") return queryString(value, key);
    else return `${key}=${encodeURIComponent(value)}`;
  });

  return [].concat.apply([], query).join("&");
};

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
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export const GetRestApi = (api_name, query) => {
  return new Promise((resolve, reject) => {
    api()
      .get(api_name, {
        params: query,
        paramsSerializer: (params) => queryString(params),
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const PostRestApi = (api_name, params) => {
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
