import { FC } from 'react';

import { SocialLinks } from 'modules/common';

import styles from './Footer.module.scss';

export const Footer: FC = () => {
  return (
    <footer className={styles.root}>
      <SocialLinks />
    </footer>
  );
};
