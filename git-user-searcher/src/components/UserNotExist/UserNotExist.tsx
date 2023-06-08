import React from 'react';
import styles from './noUser.module.scss';

const UserNotExist: React.FC = () => {
  return (
    <div className={styles.errorWrapper} data-testid="user-not-exist">
      <span className={styles.errorWrapper_message}>Does not exist</span>
    </div>
  );
};

export default UserNotExist;
