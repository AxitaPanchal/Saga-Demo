import * as types from '../Type/Types'


export const  fetchUsers =() =>{
    return{
        type: types.GET_USERS_REQUEST,
        payload: {
          loading: true
        }
    }
}