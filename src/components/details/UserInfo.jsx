
import React from "react";
import styles from './UserInfo.module.css'

const  UserInfo= ({avatar,bio,blog,company,followers,following,url,location,name,tw}) => {
    return (
        <div className={styles.container}>
                <div className={styles.containerImg}>
                    <img className={styles.img} src={avatar} alt="" />
                </div>
                <div className={styles.info}>
                    <span>{name}</span>
                    <span>{location}</span>
                    <div className={styles.contFoll}>
                        <div className={styles.foll}>
                            <span>{following}</span>
                            <span>Following</span>
                        </div>
                        <div className={styles.foll}>
                            <span>{followers}</span>
                            <span>Follwers</span>
                        </div>
                    </div>
                    <div className={styles.contBio}>
                        <p>{bio}</p>
                    </div>
                    <div className={styles.social}>
                        <span>blog: {blog}</span>
                        <span>company: {company}</span>
                        <span>twitter: {tw}</span>
                        <span>url: 
                            <a href={url} target='_blank' rel="noreferrer">{url}</a>
                        </span>
                    </div>
                </div>
            </div>           
    );
}

export default UserInfo