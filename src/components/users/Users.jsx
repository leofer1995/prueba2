import React, { useEffect, useState } from "react";
import {connect} from 'react-redux';
import { setPageUsers } from "../../actions";
import User from "../user/User";
import styles from './Users.module.css';

const Users = ({users,page,setPageUsers}) => {
    const [pages, setPages] = useState(0);


    useEffect(()=> {
        setPages(
            Math.ceil(users.count/12)
        );
    },[users.count]);

    return(
        <>
        <div className={styles.container}>
            {users.users?.map(user => <User 
                                    key={user.id} 
                                    avatar={user.avatar_url}
                                    login={user.login}                                
                                />)}
        </div>
        {pages > 1 &&
            <div>  
                {page === 1 ||
                    <button onClick={()=>setPageUsers(page-1)} >prev</button>
                }
                {page === pages ||
                    <button onClick={()=>setPageUsers(page+1)}>next</button>
                }              
            </div>
        }
        
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        users:state.users,
        page:state.page,
    }
}

export default connect(mapStateToProps,{setPageUsers})(Users)