const initialState = {
    data:[],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action){
    switch(action.type){
        default: return {
            ...state,
            data:action.payload
        }
    }
}