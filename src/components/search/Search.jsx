
import React, { useEffect, useState } from 'react';
import styles from './Search.module.css';
import {connect} from 'react-redux';
import { getUsers } from '../../actions';

const Search = ({getUsers,page}) => {

    const [input, setInput] = useState('');
 

    useEffect(() => { 
        if(input){   
        getUsers(input, page)   
        }    
    },[page,getUsers,input]); 

    
    const handleChange = ({target}) => {        
        setInput(target.value); 
    }
 
    return (
        <div className={styles.container}>
            <input 
                type="text" 
                onChange={handleChange}
                placeholder='username'
            />
            <div>
                
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
