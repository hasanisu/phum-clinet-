import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/v1",
  credentials: "include", // credentials add for backend cookies
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("authorization", `${token}`);
    }
    return headers;
  },
});

//get error for unauthorization and will send refresh token for success request
const BaseWueryWIthRefreshToken = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  console.log(result);
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: BaseWueryWIthRefreshToken,
  endpoints: () => ({}),
});
