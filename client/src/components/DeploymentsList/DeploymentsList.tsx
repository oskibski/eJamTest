import React from 'react';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';

import { Deployment } from '../../redux/root';
import { DeploymentListItem } from '../DeploymentListItem';
import { RootState } from '../../redux/root';
import { deleteDeployment } from '../../redux/thunks';

import styles from './DeploymentsList.module.scss';

export const DeploymentsList = () => {
  const { data, status } = useSelector((state: RootState) => state.deployments);
  const dispatch = useDispatch();

  const rootClasses = classNames(
    styles.root,
    status === 'loading' && styles.loading,
  );

  return (
    <div className={rootClasses}>
      {data.map((deployment: Deployment) => (
        <DeploymentListItem
          key={deployment._id}
          deployment={deployment}
          onDelete={() => dispatch(deleteDeployment(deployment._id!))}
        />
      ))}
    </div>
  );
};
