import axios from "axios"
const backendDeployAPI = axios.create({
  baseURL: "https://testapp-0407-dev-21421.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})

function api_v1_login_create(payload) {
  return backendDeployAPI.post(`/api/v1/login/`)
}
function api_v1_product_list(payload) {
  return backendDeployAPI.get(`/api/v1/product/`)
}
function api_v1_product_create(payload) {
  return backendDeployAPI.post(`/api/v1/product/`, payload.data)
}
function api_v1_product_read(payload) {
  return backendDeployAPI.get(`/api/v1/product/${payload.id}/`)
}
function api_v1_product_update(payload) {
  return backendDeployAPI.put(`/api/v1/product/${payload.id}/`, payload.data)
}
function api_v1_product_partial_update(payload) {
  return backendDeployAPI.patch(`/api/v1/product/${payload.id}/`, payload.data)
}
function api_v1_product_delete(payload) {
  return backendDeployAPI.delete(`/api/v1/product/${payload.id}/`)
}
function api_v1_user_list(payload) {
  return backendDeployAPI.get(`/api/v1/user/`)
}
function api_v1_user_create(payload) {
  return backendDeployAPI.post(`/api/v1/user/`, payload.data)
}
function api_v1_user_read(payload) {
  return backendDeployAPI.get(`/api/v1/user/${payload.id}/`)
}
function api_v1_user_update(payload) {
  return backendDeployAPI.put(`/api/v1/user/${payload.id}/`, payload.data)
}
function api_v1_user_partial_update(payload) {
  return backendDeployAPI.patch(`/api/v1/user/${payload.id}/`, payload.data)
}
function api_v1_user_delete(payload) {
  return backendDeployAPI.delete(`/api/v1/user/${payload.id}/`)
}
export const apiService = {
  api_v1_login_create,
  api_v1_product_list,
  api_v1_product_create,
  api_v1_product_read,
  api_v1_product_update,
  api_v1_product_partial_update,
  api_v1_product_delete,
  api_v1_user_list,
  api_v1_user_create,
  api_v1_user_read,
  api_v1_user_update,
  api_v1_user_partial_update,
  api_v1_user_delete
}
