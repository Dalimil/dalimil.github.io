import { FC } from 'react';

import { SocialLinks } from 'modules/common';

import styles from './Footer.module.scss';

export const Footer: FC = () => {
  return (
    <>
      <footer className={styles.root}>
        <SocialLinks />
      </footer>
      <div style={{ position: 'absolute', top: 0, left: 0 }}>
        This website is aiming to meet Web Content Accessibility Guidelines (
        <a rel="nofollow" href="https://www.w3.org/WAI/standards-guidelines/wcag/">
          WCAG
        </a>
        ) Level AA, following the latest <abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> authoring
        practices.
      </div>
    </>
  );
};
