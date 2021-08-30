import { FC } from 'react';

import { concatClasses } from 'utils/concatClasses';
import { Footer } from './Footer';

import styles from './Home.module.scss';

export const Home: FC = () => {
  return (
    // We place the navigation and footer in main because it's the main
    // content of the home page, rather than something that's across all sites.
    <main className={styles.root}>
      <h2 className="screen-reader-text">Select one of the following links to reach the right section.</h2>
      <div className={styles.links} role="region">
        <a className={concatClasses(styles.link, styles.career)} href="#">
          <h2 className="screen-reader-text">Career</h2>
          <div className={styles.add}>Twitter</div>
          <img src="/images/dali-career-profile.jpg" alt="Dalimil Hajek career profile photo" />
        </a>
        <a className={concatClasses(styles.link, styles.photography)} href="https://dali-media.web.app/">
          <h2 className="screen-reader-text">Photography</h2>
          <img src="/images/dali-photography-profile.jpg" alt="Dalimil Hajek photography profile photo" />
        </a>
        <a className={concatClasses(styles.link, styles.university)} href="https://dalimil.github.io/">
          <h2 className="screen-reader-text">University</h2>
          <img src="/images/dali-university-profile.jpg" alt="Dalimil Hajek profile photo from university years." />
        </a>
      </div>
      <Footer />
    </main>
  );
};
