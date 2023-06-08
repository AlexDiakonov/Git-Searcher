import React from 'react';
import styles from './userHeader.module.scss';
import { UserDataInterface } from '../../service/getUser/getUser.dto';

interface UserHeaderProps {
  userData: UserDataInterface;
}

const UserHeader: React.FC<UserHeaderProps> = ({ userData }) => {
  return (
    <div className={styles.userHeader} data-testid="user-header">
      <div className={styles.userHeader_imgWrapper}>
        <img
          className={styles.userHeader_imgWrapper_image}
          src={userData?.avatar_url}
          alt="user_avatar"
          data-testid="user-avatar"
        />
      </div>
      <div className={styles.userHeader_userBio}>
        <span
          className={styles.userHeader_userBio_login}
          data-testid="user-login"
        >
          @{userData?.login}
        </span>
        <h1 className={styles.userHeader_userBio_name} data-testid="user-name">
          {userData?.name}
        </h1>
        <span className={styles.userHeader_userBio_bio} data-testid="user-bio">
          {userData?.bio ? `${userData.bio}` : `this is the bio`}
        </span>
      </div>
    </div>
  );
};

export default React.memo(UserHeader);
