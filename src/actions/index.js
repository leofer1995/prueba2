


export const getUsers = (text, page) => {
    return async function (dispatch) {

        try{
        const response = await fetch(`https://api.github.com/search/users?authorization_request=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&&q=${text}&&per_page=12&&page=${page}`);
        const data = await response.json();
        console.log(data,'cucuuuuuuuuu')
        if(data.items){
            return dispatch({
                type: 'GET_USERS',
                payload:{
                    users : data.items,
                    count : data.total_count,
                }
            });
        }   
        return dispatch({
            type: 'GET_USERS',
            payload:{users : []}
        });
        }catch(error){
            console.log(error)
        }
    }
}

export const getUserInfo = (user) => {
    return async function (dispatch) {

        try{
        const response = await fetch(`https://api.github.com/users/${user}`);
        const {
            avatar_url, 
            bio, 
            blog, 
            company, 
            location, 
            followers, 
            following, 
            name, 
            html_url, 
            twitter_username} = await response.json();
        return dispatch({
            type: 'GET_USER_INFO',
            payload:{
                avatar_url, 
                bio, 
                blog, 
                company, 
                location, 
                followers, 
                following, 
                name, 
                html_url, 
                twitter_username}
        });
        }catch(error){
            console.log(error)
        }
    }
}

export const getUserRepos = (user) => {
    return async function (dispatch) {

        try{
        const response = await fetch(`https://api.github.com/users/${user}/repos?per_page=100`);
        const items = await response.json();
        return dispatch({
            type: 'GET_USER_REPOS',
            payload:{repos : items}
        });
        }catch(error){
            console.log(error)
        }
    }
}

export const getUserOrg = (user) => {
    return async function (dispatch) {

        try{
        const response = await fetch(`https://api.github.com/users/${user}/orgs?per_page=100`);
        const items = await response.json();
        return dispatch({
            type: 'GET_USER_ORGS',
            payload:{orgs : items}
        });
        }catch(error){
            console.log(error)
        }
    }
}

export const setPageUsers = (page) => {
    return {
        type:'SET_PAGE_USERS',
        payload: page,
    }
}