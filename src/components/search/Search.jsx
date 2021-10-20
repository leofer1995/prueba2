
import React, { useEffect, useState } from 'react';
import styles from './Search.module.css';
import {connect} from 'react-redux';
import { getUsers } from '../../actions';

const Search = ({getUsers,page}) => {

    const [input, setInput] = useState('');
 

    useEffect(() => {    
        getUsers(input, page)       
    },[page,getUsers,input]); 

    
    const handleChange = ({target}) => { 
       
        setInput(target.value); 
    }
 
    return (
        <div className={styles.container}>
            <input 
                type="text" 
                onChange={handleChange}
            />
            <div>
                <button onClick={()=>getUsers(input, page)}>Search</button>
            </div>
        </div>
    )

}
const mapStateToProps = (state) => {
    return{
        page:state.page,
    }
}
export default connect(mapStateToProps, {getUsers})(Search)