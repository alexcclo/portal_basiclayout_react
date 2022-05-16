export const STORAGE_DATA = 'STORAGE_DATA'
export const CLEAR_STORAGE_DATA = 'CLEAR_STORAGE_DATA'

export const storageData = (obj) => {
    return {
      type: STORAGE_DATA,
      payload: {
        data: obj.data
      }
    }
  }
  
  export const clearstorageData = () => {
    return {
      type: CLEAR_STORAGE_DATA,
      payload: {}
    }
  }
  
  const storageDataInit = {
    data: {
      service:{
      }
    }
  }
  
  function storeData(state = storageDataInit, action) {
    switch (action.type) {
    case STORAGE_DATA:
      return { ...state,
        data: action.payload.data
      }
    case CLEAR_STORAGE_DATA:
      return {...state, 
        data: null
      }
    default:
      return state
    }
  }
  export default storeData