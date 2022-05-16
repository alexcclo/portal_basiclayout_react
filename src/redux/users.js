export const FETCH_USER = 'FETCH_USER'
export const TENANT_FILTER = 'TENANT_FILTER'

const UserInit = {
    'users':[]
}

//action
//抓取users，目前寫死之後會改成接api

export const fetchUser = () => {
  const users = [
      {
        key: '1',
        userName: 'Royce.Wang',
        Email: 'royce.wang@.com',
        CompanyName: 'wistron',
        CreateTime: '2021-07-15T07:18:30.2694673',
        tenantId:'2',
        Status: '啟用中',
      },
      {
        key: '2',
        userName: 'Ray.Wu',
        Email: 'Ray.Wu@.com',
        CompanyName: '',
        CreateTime: '2021-07-15T07:18:30.2694673',
        tenantId:'1',
        Status: '啟用中',
      },
      {
          key: '3',
          userName: 'Howard.Chou',
          Email: 'Howard.Chou@.com',
          CompanyName: '',
          CreateTime: '2021-07-15T07:18:30.2694673',
          tenantId:'1',
          Status: '啟用中',
        },
        {
          key: '4',
          userName: 'Test',
          Email: 'test@wistron.com',
          CompanyName: 'wistron',
          CreateTime: '2021-07-15T07:18:30.2694673',
          tenantId:'2',
          Status: '啟用中',
        },
    ]
  return { type: FETCH_USER, payload: users }
}

export const tenantFilter = tenantId => {
  return { type: TENANT_FILTER, payload: tenantId }
}

//reduce
//抓取用戶列表與過濾用戶

const Users = (state = UserInit, action) => {
  switch(action.type){
    case FETCH_USER:
      return { "users":action.payload };
    case TENANT_FILTER:
      return { "users":state.users.filter( user => user.tenantId === action.payload )}
    default:
      return state;
  }
}



export default Users