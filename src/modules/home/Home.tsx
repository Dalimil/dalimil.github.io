import { CSSProperties, FC, useCallback, useState } from 'react';

import { concatClasses } from 'utils/concatClasses';
import { Footer } from './Footer';

import styles from './Home.module.scss';

const sites = [
  {
    title: 'Career',
    className: styles.career,
    imgUrl: '/images/dali-career-profile.jpg',
    imgAlt: 'Dalimil Hajek career profile photo',
    adds: [{ name: 'MS' }],
    urlLink: '/career',
  },
  {
    title: 'Photography',
    className: styles.photography,
    imgUrl: '/images/dali-photography-profile.jpg',
    imgAlt: 'Dalimil Hajek photography profile photo',
    urlLink: 'https://dali-media.web.app/',
  },
  {
    title: 'University',
    className: styles.university,
    imgUrl: '/images/dali-university-profile.jpg',
    imgAlt: 'Dalimil Hajek profile photo from university years',
    urlLink: 'https://dalimil.github.io/',
  },
];

export const Home: FC = () => {
  const [pressed, setPressed] = useState<number | undefined>(undefined);
  const [mouse, setMouse] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  // Shine effect variables
  const onMouseMove = useCallback((e) => {
    setMouse({ x: e.pageX, y: e.pageY });
  }, []);

  return (
    // We place the navigation and footer in main because it's the main
    // content of the home page, rather than something that's across all sites.
    <main
      className={styles.root}
      onMouseMove={onMouseMove}
      onClick={() => setPressed(undefined)}
      style={{ '--x': `${mouse.x}px`, '--y': `${mouse.y}px` } as CSSProperties}
    >
      <section className={styles.sites} aria-labelledby="main-section">
        <h2 id="main-section" className="screen-reader-text">
          List of Dali&apos;s portfolio sites.
        </h2>
        {sites.map((site, index) => (
          <button
            key={site.className}
            aria-pressed={pressed === index}
            onClick={(e) => {
              setPressed(pressed === index ? undefined : index);
              e.stopPropagation();
            }}
            className={concatClasses(styles.site, site.className, pressed === index && styles.pressed)}
          >
            {site.adds && <div className={styles.add}>{site.adds[0].name}</div>}
            <div className={styles.cardBox} aria-hidden="true">
              <div className={styles.cardBackground} />
            </div>
            <img src={site.imgUrl} alt={site.imgAlt} />
            <h2>{site.title}</h2>
            <p>Hello hello</p>
          </button>
        ))}
      </section>
      <Footer />
    </main>
  );
};
