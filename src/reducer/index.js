const initialState = {
    users:{},
    userInfo:{},
    userRepos:[],
    userOrgs:[],
    page:1,
}

const rootReducer = (state = initialState, action) => {

    if(action.type === 'GET_USERS'){
        console.log(action.payload,'fiuuuuuuuuuuuuuuuuuuuuu')
        return {
            ...state,
            users:action.payload,
        }
    }

    if(action.type === 'GET_USER_INFO'){
        return {
            ...state,
            userInfo:action.payload,
        }
    }

    if(action.type === 'GET_USER_REPOS'){
        return{
            ...state,
            userRepos:[...action.payload.repos]
        }
    }

    if(action.type === 'GET_USER_ORGS'){
        return{
            ...state,
            userOrgs:[...action.payload.orgs]
        }
    }

    if(action.type === 'SET_PAGE_USERS'){
        return {
            ...state,
            page:action.payload
        }
    }

    return state
}

export default rootReducer;