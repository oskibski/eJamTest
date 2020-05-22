import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/root';
import { addDeployment } from '../../redux/thunks/deployments';

import styles from '../DeploymentListItem/DeploymentListItem.module.scss';

export const DeploymentForm = () => {
  const [url, setUrl] = useState('');
  const [templateId, setTemplateId] = useState<string>('');
  const [templateVersion, setTemplateVersion] = useState<string>('');
  const dispatch = useDispatch();

  const { data: templates } = useSelector(
    (state: RootState) => state.templates,
  );

  const selectedTemplate =
    templates.find((template) => template._id === templateId) || undefined;

  const handleUrlChange = (event: ChangeEvent<HTMLInputElement>) =>
    setUrl(event.target.value);

  const handleTemplateChange = (event: ChangeEvent<HTMLSelectElement>) =>
    setTemplateId(event.target.value);

  const handleTemplateVersionChange = (event: ChangeEvent<HTMLSelectElement>) =>
    setTemplateVersion(event.target.value);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(
      addDeployment({
        url,
        templateName: selectedTemplate?.name || '',
        version: templateVersion,
      }),
    );
  };

  return (
    <form className={styles.root} onSubmit={handleSubmit}>
      <label>
        <span className={styles.label}>Deployment URL</span>
        <input type="text" name="url" value={url} onChange={handleUrlChange} />
      </label>
      <label>
        <span className={styles.label}>Template Name</span>
        <select value={templateId} onChange={handleTemplateChange}>
          <option value={''} disabled></option>
          {templates.map((template) => (
            <option key={template._id} value={template._id}>
              {template.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        <span className={styles.label}>Template Version</span>
        <select value={templateVersion} onChange={handleTemplateVersionChange}>
          <option value={''} disabled></option>
          {selectedTemplate?.versions.map((version) => (
            <option key={version} value={version}>
              {version}
            </option>
          ))}
        </select>
      </label>
      <button className={styles.button}>Add Deployment</button>
    </form>
  );
};
