import React from 'react';
import UserHeader from '../../components/UserHeader/UserHeader';
import styles from './searchWidget.module.scss';
import { SearchComponent } from '../../components/SearchComponent';
import { RepositoriesList } from '../../components/RepositoriesList';
import { UserNotExist } from '../../components/UserNotExist';
import useGetUserData from '../../hooks/getUserData/useGetUserData';

const SearchWidget: React.FC = () => {
  const { requestHandler, userData, repositories, userError, isLoading } =
    useGetUserData();

  return (
    <div className={styles.searchWidget}>
      <SearchComponent onSearch={requestHandler} />
      {isLoading && <h1 data-testid="loading-indicator">...Loading</h1>}
      {userData && !userError && <UserHeader userData={userData} />}
      {repositories && !userError && (
        <RepositoriesList repositories={repositories} />
      )}
      {userError && <UserNotExist />}
    </div>
  );
};

export default SearchWidget;
