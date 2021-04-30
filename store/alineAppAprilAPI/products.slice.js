import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_product_list = createAsyncThunk(
  "products/api_v1_product_list",
  async payload => await apiService.api_v1_product_list(payload)
)
export const api_v1_product_create = createAsyncThunk(
  "products/api_v1_product_create",
  async payload => await apiService.api_v1_product_create(payload)
)
export const api_v1_product_read = createAsyncThunk(
  "products/api_v1_product_read",
  async payload => await apiService.api_v1_product_read(payload)
)
export const api_v1_product_update = createAsyncThunk(
  "products/api_v1_product_update",
  async payload => await apiService.api_v1_product_update(payload)
)
export const api_v1_product_partial_update = createAsyncThunk(
  "products/api_v1_product_partial_update",
  async payload => await apiService.api_v1_product_partial_update(payload)
)
export const api_v1_product_delete = createAsyncThunk(
  "products/api_v1_product_delete",
  async payload => await apiService.api_v1_product_delete(payload)
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_product_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_product_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload.data
        state.api.loading = "idle"
      }
    },
    [api_v1_product_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_product_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_product_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload.data)
        state.api.loading = "idle"
      }
    },
    [api_v1_product_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_product_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_product_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(
            record => record.id !== action.payload.data.id
          ),
          action.payload.data
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_product_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_product_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_product_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.data.id ? action.payload.data : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_product_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_product_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_product_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.data.id ? action.payload.data : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_product_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_product_delete.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_product_delete.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_product_delete.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_product_list,
  api_v1_product_create,
  api_v1_product_read,
  api_v1_product_update,
  api_v1_product_partial_update,
  api_v1_product_delete,
  slice: productsSlice
}
