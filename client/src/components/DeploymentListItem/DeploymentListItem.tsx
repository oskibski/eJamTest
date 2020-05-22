import React from 'react';
import { Deployment } from '../../redux/root';

import styles from './DeploymentListItem.module.scss';

interface Props {
  deployment: Deployment;
  onDelete: () => void;
}

export const DeploymentListItem = ({ deployment, onDelete }: Props) => (
  <div className={styles.root}>
    <p className={styles.property}>
      <span className={styles.label}>Deployment URL</span>
      {deployment.url}
    </p>
    <p className={styles.property}>
      <span className={styles.label}>Template Name</span>
      {deployment.templateName}
    </p>
    <p className={styles.property}>
      <span className={styles.label}>Template Version</span>
      {deployment.version}
    </p>
    <p className={styles.property}>
      <span className={styles.label}>Deployment Date</span>
      {deployment.deployedAt}
    </p>
    <button className={styles.button} onClick={onDelete}>
      Delete
    </button>
  </div>
);
