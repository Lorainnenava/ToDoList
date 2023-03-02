import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseDatos = createApi({
  reducerPath: "base",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8015" }),
  tagTypes: ["refreshGetMostrar", "refreshPostTaks"],
  keepUnusedDataFor: 3,
  refetchOnMountOrArgChange: true,
  refetchOnFocus: true,
  refetchOnReconnect: true,

  endpoints: (builder) => ({
    getMostrar: builder.query({
      query: (token) => ({
        headers: { "Content-Type": "application/json", token },
        url: "/tasks/list",
        method: "GET",
      }),
      providesTags: ["refreshGetMostrar"],
    }),
    postAgregar: builder.mutation({
      query: ({ dataTask, token }) => ({
        headers: { "Content-Type": "application/json", token },
        url: "/tasks/list",
        method: "POST",
        body: dataTask,
      }),
      invalidatesTags: ["refreshPostTaks", "refreshGetMostrar"],
    }),
    putEditar: builder.mutation({
      query: ({ _id, data, token }) => ({
        headers: { "Content-Type": "application/json", token },
        body: data,
        method: "PUT",
        url: `/tasks/list/${_id}`,
      }),
      invalidatesTags: ["refreshPostTaks", "refreshGetMostrar"],
    }),
    putEditarEstado: builder.mutation({
      query: ({ _id, dataEstado, token }) => ({
        headers: { "Content-Type": "application/json", token },
        body: dataEstado,
        method: "PUT",
        url: `/tasks/listEstado/${_id}`,
      }),
      invalidatesTags: ["refreshPostTaks", "refreshGetMostrar"],
    }),
    deleteEliminar: builder.mutation({
      query: ({ _id, token }) => ({
        headers: { "Content-Type": "application/json", token },
        method: "DELETE",
        url: `/tasks/list/${_id}`,
      }),
    }),
    agregarUser: builder.mutation({
      query: (data) => ({
        headers: { "Content-Type": "application/json" },
        method: "POST",
        url: "/users",
        body: data,
      }),
    }),
    verUser: builder.query({
      query: (dataLogin) => ({
        headers: { "Content-Type": "application/json" },
        method: "PATCH",
        url: "/users",
        body: dataLogin,
      }),
    }),
  }),
});

export const {
  useGetMostrarQuery,
  usePostAgregarMutation,
  usePutEditarMutation,
  usePutEditarEstadoMutation,
  useDeleteEliminarMutation,
  useAgregarUserMutation,
  useVerUserQuery,
} = baseDatos;
