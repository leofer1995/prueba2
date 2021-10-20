import React from "react";
import styles from './Repo.module.css'

const Repo = ({name, privat, url, description}) => {
    return(
        <div className={styles.containert}>
            <a href={url} target='_blank' className={styles.link} rel="noreferrer">
                <div>
                    <span>{name}</span>
                    <span>{privat ? '(Private)' : '(Public)'}</span>
                </div>
            </a>         
        </div>
    )

}

export default Repo