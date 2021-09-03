import Link from 'next/link';
import { FC } from 'react';

import { SocialLinks } from 'modules/common';

import styles from './Header.module.scss';

export const Header: FC = () => {
  return (
    <header className={styles.root}>
      <nav>
        <Link href="/">
          <a className={styles.back}>
            <span aria-hidden="true">🡐 </span>
            <span className="screen-reader-text">Return to home page</span>
          </a>
        </Link>
      </nav>
      <div className={styles.links}>
        <SocialLinks linkClassName={styles.link} />
      </div>
    </header>
  );
};
