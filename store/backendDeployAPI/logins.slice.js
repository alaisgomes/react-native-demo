import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./services"
const api_v1_login_create = createAsyncThunk(
  "logins/api_v1_login_create",
  async payload => {
    const response = await apiService.api_v1_login_create(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const loginsSlice = createSlice({
  name: "logins",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [api_v1_login_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_login_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_login_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default { api_v1_login_create, slice: loginsSlice }