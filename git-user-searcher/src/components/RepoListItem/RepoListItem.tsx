import React from 'react';
import { UserRepository } from '../../service/GetUserRepos/userRepos.dto';
import styles from './repoListItem.module.scss';
import { StarFillIcon, RepoForkedIcon } from '@primer/octicons-react';

interface RepoListItemProps {
  repository: UserRepository;
}

const RepoListItem: React.FC<RepoListItemProps> = ({ repository }) => {
  return (
    <li
      className={styles.repoContainer}
      data-testid={`repo-list-item-${repository.id}`}
    >
      <a
        className={styles.repoItem}
        href={repository.html_url}
        target="_blank"
        rel="noopener noreferrer"
        data-testid={`repo-item-link-${repository.id}`}
      >
        <h2 data-testid={`repo-item-name-${repository.id}`}>
          {repository.name}
        </h2>
        <div
          className={styles.repoItem_info}
          data-testid={`repo-item-info-${repository.id}`}
        >
          <StarFillIcon
            className={styles.repoItem_info_icon}
            size={16}
            data-testid={`repo-item-star-icon-${repository.id}`}
          />
          <span
            className={styles.repoItem_info_counter}
            data-testid={`repo-item-star-count-${repository.id}`}
          >
            {repository.stargazers_count}
          </span>
          <RepoForkedIcon
            className={styles.repoItem_info_icon}
            size={16}
            data-testid={`repo-item-fork-icon-${repository.id}`}
          />
          <span
            className={styles.repoItem_info_counter}
            data-testid={`repo-item-fork-count-${repository.id}`}
          >
            {repository.forks_count}
          </span>
        </div>
      </a>
    </li>
  );
};

export default RepoListItem;
