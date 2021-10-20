import React from "react";
import styles from './User.module.css';
import {Link} from 'react-router-dom';

const User = ({login, avatar, id}) => {

    return (
        <Link to = {`/user/${login}`} className={styles.link}>
            <div className={styles.container}> 
                <div className={styles.containerImg}>
                    <img className={styles.img} src={avatar} alt="" />
                </div>
                <div className={styles.containerLogin}>
                    <span>Username</span>
                    <span>{login}</span>
                </div>           
            </div>
        </Link>
    )

}

export default User;