import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./services"
export const api_v1_product_list = createAsyncThunk(
  "products/api_v1_product_list",
  async payload => {
    const response = await apiService.api_v1_product_list(payload)
    return response.data
  }
)
export const api_v1_product_create = createAsyncThunk(
  "products/api_v1_product_create",
  async payload => {
    const response = await apiService.api_v1_product_create(payload)
    return response.data
  }
)
export const api_v1_product_read = createAsyncThunk(
  "products/api_v1_product_read",
  async payload => {
    const response = await apiService.api_v1_product_read(payload)
    return response.data
  }
)
export const api_v1_product_update = createAsyncThunk(
  "products/api_v1_product_update",
  async payload => {
    const response = await apiService.api_v1_product_update(payload)
    return response.data
  }
)
export const api_v1_product_partial_update = createAsyncThunk(
  "products/api_v1_product_partial_update",
  async payload => {
    const response = await apiService.api_v1_product_partial_update(payload)
    return response.data
  }
)
export const api_v1_product_delete = createAsyncThunk(
  "products/api_v1_product_delete",
  async payload => {
    const response = await apiService.api_v1_product_delete(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [api_v1_product_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_product_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities, ...action.payload]
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
        state.entities.push(action.payload)
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
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
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
          record.id === action.payload.id ? action.payload : record
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
          record.id === action.payload.id ? action.payload : record
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
          record => record.id !== action.starter.id
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