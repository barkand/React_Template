import { GetAxiosApi, PostAxiosApi } from "./AxiosApi";
import QueryString from "../Rest/QueryString";
import AuthSchema from "../Graphql/Schema/Auth";

export const GetApi = (api_name, params) => {
  if (process.env.REACT_APP_API_TYPE === "REST") {
    return GetAxiosApi(api_name, {
      params: params,
      paramsSerializer: (params) => QueryString(params),
    });
  } else {
    return GetAxiosApi(api_name, {
      query: AuthSchema(params)[api_name].query,
    }).then((response) => {
      return response.data.data[api_name];
    });
  }
};

export const PostApi = (api_name, params) => {
  if (process.env.REACT_APP_API_TYPE === "REST") {
    return PostAxiosApi(api_name, params);
  } else {
    return PostAxiosApi(api_name, {
      query: AuthSchema(params)[api_name].query,
      variables: params,
    })
      .then((response) => {
        return { data: response.data.data[api_name], status: response.status };
      })
      .catch((error) => {
        return {
          data: error.response.data.errors,
          status: error.response.status,
        };
      });
  }
};
