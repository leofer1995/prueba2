import React, { useEffect } from "react";
import {connect} from 'react-redux';
import { getUserInfo, getUserOrg, getUserRepos } from "../../actions";
import styles from './Details.module.css';
import Orgs from "./Orgs";
import Repo from "./Repo";
import UserInfo from "./UserInfo";

const Details = ({user, getUserInfo, userInfo, getUserRepos, userRepos, getUserOrg, userOrgs}) => {
    useEffect(()=> {
        getUserInfo(user)
        getUserRepos(user) 
        getUserOrg(user)       
    },[getUserRepos,getUserOrg,getUserInfo,user])

    return(
        <div className={styles.container}>   
            <div>       
                <UserInfo 
                    avatar={userInfo.avatar_url}
                    bio={userInfo.bio}
                    blog={userInfo.blog}
                    company={userInfo.company}
                    followers={userInfo.followers}
                    following={userInfo.following}
                    url={userInfo.html_url}
                    location={userInfo.location}
                    name={userInfo.name}
                    tw={userInfo.twitter_username}
                />
            </div> 
            <div className={styles.infoAdd}>
                <h3>Repos</h3>
                <div className={styles.repos}>
                    {userRepos.map(repo=><Repo key={repo.id} name={repo.name} privat={repo.private} url={repo.html_url} description={repo.description}/>)}
                </div>
                <h3>Organizations</h3>
                <div className={styles.repos}>
                    {userOrgs.map(org => <Orgs key={org.id} login={org.login} avatar={org.avatar_url}/>)}
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo,
        userRepos:state.userRepos,
        userOrgs:state.userOrgs,
    }
}
export default connect(mapStateToProps, {getUserInfo, getUserRepos, getUserOrg})(Details);