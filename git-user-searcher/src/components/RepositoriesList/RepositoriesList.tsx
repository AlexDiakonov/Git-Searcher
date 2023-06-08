import React from 'react';
import styles from './repoList.module.scss';
import { UserRepository } from '../../service/GetUserRepos/userRepos.dto';
import { RepoListItem } from '../RepoListItem';

interface RepositoriesListProps {
  repositories: UserRepository[];
}

const RepositoriesList: React.FC<RepositoriesListProps> = ({
  repositories,
}) => {
  return (
    <div className={styles.repoList} data-testid="repositories-list">
      <div className={styles.repoList_titleWrapper}>
        <h2 className={styles.repoList_titleWrapper_title}>Repositories</h2>
      </div>
      <ul className={styles.repoList_listItems} data-testid="repo-list-items">
        {repositories.length > 0
          ? repositories.map(repo => (
              <RepoListItem
                key={repo.id}
                repository={repo}
                data-testid={`repo-list-item-${repo.id}`}
              />
            ))
          : 'User have no repositories'}
      </ul>
    </div>
  );
};

export default RepositoriesList;
