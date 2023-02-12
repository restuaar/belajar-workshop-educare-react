import React from 'react';

import styles from './AboutMe.module.css';

const AboutMe = ({ user }) => {
    return (
        <div className={styles.wrapper}>
            <h1>My Profile</h1>
            <div className={styles.headerContainer}>
                <div className={styles.header}>
                <img className={styles.profileImage} alt="profileImg" src={user.picture} />
                    <div>
                        <h2>{user.name}</h2>
                        <p>{user.description}</p>
                    </div>
                </div>
            </div>
        </div>
 );
};


export default AboutMe;
