import { LOGIN } from 'api/constant'
import { request } from 'api/request'


const APIEndpoints = {
    TENANTACCOUNT: 'TenantAccount'
  }

// Tenant Account
// Login
export const login = (payload) => request({
  url: `${APIEndpoints.TENANTACCOUNT}/Login`,
  method: 'POST',
  data: payload,
  type: LOGIN
})

