import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./services"
const api_v1_user_list = createAsyncThunk(
  "users/api_v1_user_list",
  async payload => {
    const response = await apiService.api_v1_user_list(payload)
    return response.data
  }
)
const api_v1_user_create = createAsyncThunk(
  "users/api_v1_user_create",
  async payload => {
    const response = await apiService.api_v1_user_create(payload)
    return response.data
  }
)
const api_v1_user_read = createAsyncThunk(
  "users/api_v1_user_read",
  async payload => {
    const response = await apiService.api_v1_user_read(payload)
    return response.data
  }
)
const api_v1_user_update = createAsyncThunk(
  "users/api_v1_user_update",
  async payload => {
    const response = await apiService.api_v1_user_update(payload)
    return response.data
  }
)
const api_v1_user_partial_update = createAsyncThunk(
  "users/api_v1_user_partial_update",
  async payload => {
    const response = await apiService.api_v1_user_partial_update(payload)
    return response.data
  }
)
const api_v1_user_delete = createAsyncThunk(
  "users/api_v1_user_delete",
  async payload => {
    const response = await apiService.api_v1_user_delete(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [api_v1_user_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_user_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities, ...action.payload]
        state.api.loading = "idle"
      }
    },
    [api_v1_user_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_user_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_user_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_user_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_user_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_user_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_user_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_user_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_user_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_user_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_user_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_user_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_user_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_user_delete.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_user_delete.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.starter.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_user_delete.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_user_list,
  api_v1_user_create,
  api_v1_user_read,
  api_v1_user_update,
  api_v1_user_partial_update,
  api_v1_user_delete,
  slice: usersSlice
}
