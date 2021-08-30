import { FC } from 'react';

import { Footer } from './Footer';

import styles from './Home.module.scss';

export const Home: FC = () => {
  return (
    <>
      {/* role=navigation */}
      <nav className={styles.root}>
        <ul>
          <li className={styles.link}>Current</li>
          <li className={styles.link}>
            <a href="https://dali-media.web.app/">Photography</a>
          </li>
          <li className={styles.link}>
            <a href="https://dalimil.github.io/">University</a>
          </li>
        </ul>
      </nav>
      <main>Main</main>
      <Footer />
    </>
  );
};
