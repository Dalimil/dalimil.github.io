import Link from 'next/link';
import { FC } from 'react';

import { SocialLinks } from 'modules/common';

import styles from './Header.module.scss';

export const Header: FC = () => {
  return (
    <header className={styles.root}>
      <Link href="/">
        <a className={styles.back}>🡐</a>
      </Link>
      <div className={styles.links}>
        <SocialLinks linkClassName={styles.link} />
      </div>
    </header>
  );
};
