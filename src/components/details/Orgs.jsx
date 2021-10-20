import React from "react";
import styles from './Orgs.module.css'

const Orgs = ({avatar, login}) => {
    return (
        <div className={styles.container}>
            <div className={styles.contImg}>
                <img className={styles.img} src={avatar} alt="" />
            </div>
            <div>
                <span>
                    {login}
                </span>
            </div>
        </div>
    )
}

export default Orgs