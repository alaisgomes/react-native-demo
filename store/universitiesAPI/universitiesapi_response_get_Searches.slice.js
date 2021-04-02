import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./services"

export const universitiesapi_get_search_list = createAsyncThunk(
  "universitiesapi_response_get_Searches/universitiesapi_get_search_list",
  async payload => {
    const response = await apiService.universitiesapi_get_search_list(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const universitiesapi_response_get_SearchesSlice = createSlice({
  name: "universitiesapi_response_get_Searches",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [universitiesapi_get_search_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [universitiesapi_get_search_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities, ...action.payload]
        state.api.loading = "idle"
      }
    },
    [universitiesapi_get_search_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
// console.log(universitiesapi_get_search_list)
export default {
  universitiesapi_get_search_list,
  slice: universitiesapi_response_get_SearchesSlice
}