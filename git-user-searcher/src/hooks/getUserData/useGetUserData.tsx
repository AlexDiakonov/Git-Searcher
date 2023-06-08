import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getUserRepositories } from '../../service/GetUserRepos/getUserRepos';
import { getUserData } from '../../service/getUser/getUserData';
import { UserRepository } from '../../service/GetUserRepos/userRepos.dto';
import { UserDataInterface } from '../../service/getUser/getUser.dto';

const useGetUserData = () => {
  const [userName, setUserName] = useState('');

  const queryKeyRepo = ['fetchUserRepo-', userName];
  const queryKeyUser = ['fetchUser-', userName];

  const {
    data: repositories,
    refetch: refetchRepositories,
    isLoading: repoLoading,
  } = useQuery<UserRepository[]>(
    queryKeyRepo,
    () => getUserRepositories(userName || ''),
    { enabled: false, staleTime: 600000 }
  );

  const {
    data: userData,
    refetch: refetchUserData,
    isError: userError,
    isLoading: userLoading,
  } = useQuery<UserDataInterface>(
    queryKeyUser,
    () => getUserData(userName || ''),
    { enabled: false, staleTime: 600000 }
  );

  const requestHandler = (inputValue: string) => {
    setUserName(inputValue);
  };

  useEffect(() => {
    if (userName.length > 0) {
      refetchRepositories();
      refetchUserData();
    }
  }, [userName, refetchRepositories, refetchUserData]);

  return {
    requestHandler,
    repositories,
    userData,
    userError,
    isLoading: userLoading || repoLoading,
  };
};

export default useGetUserData;
