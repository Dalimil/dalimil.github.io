import Link from 'next/link';
import { FC } from 'react';

import { SocialLinks } from 'modules/common';
import { backArrowIconCircle } from './icons';

import styles from './Header.module.scss';

export const Header: FC = () => {
  return (
    <header className={styles.root}>
      <nav>
        <Link href="/" className={styles.back}>
          {backArrowIconCircle}
          <span className="screen-reader-text">Return to home page</span>
        </Link>
      </nav>
      <div className={styles.links}>
        <SocialLinks linkClassName={styles.link} hideInstagram={true} />
      </div>
    </header>
  );
};
