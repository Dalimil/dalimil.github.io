import Link from 'next/link';
import { CSSProperties, FC, useCallback, useState } from 'react';

import { concatClasses } from 'utils/concatClasses';
import { Footer } from './Footer';

import styles from './Home.module.scss';

enum SiteId {
  career = 'career',
  photography = 'photo',
  university = 'uni',
}
const sites = [
  {
    id: SiteId.career,
    title: 'Career',
    className: styles.career,
    imgUrl: '/images/dali-career-profile.jpg',
    imgAlt: 'Dalimil Hajek career profile photo',
    adds: [{ name: 'MS' }],
    urlLink: '/career',
    description: 'See my career highlights and experience...',
  },
  {
    id: SiteId.photography,
    title: 'Photography',
    className: styles.photography,
    imgUrl: '/images/dali-photography-profile.jpg',
    imgAlt: 'Dalimil Hajek photography profile photo',
    urlLink: 'https://dali-media.web.app/',
    description: 'See my photography portfolio...',
  },
  {
    id: SiteId.university,
    title: 'University',
    className: styles.university,
    imgUrl: '/images/dali-university-profile.jpg',
    imgAlt: 'Dalimil Hajek profile photo from university years',
    urlLink: 'https://dalimil.github.io/',
    description: 'See my university hackathon projects...',
  },
];

export const Home: FC = () => {
  const [pressed, setPressed] = useState<string | undefined>(undefined);
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
        {sites.map((site) => {
          const isSelected = pressed === site.id;
          const titleId = `${site.id}-title`;
          const descriptionId = `${site.id}-description`;
          const spriteCount = 30;
          return (
            <button
              key={site.className}
              aria-pressed={isSelected}
              onClick={(e) => {
                setPressed(isSelected ? undefined : site.id);
                e.stopPropagation();
              }}
              className={concatClasses(styles.site, site.className)}
              aria-labelledby={titleId}
            >
              <div className={styles.sprites} aria-hidden="true">
                {[...Array(spriteCount)].map((_, i) => (
                  <div key={i} className={styles.sprite} />
                ))}
              </div>
              <div className={styles.cardBox} aria-hidden="true">
                <div className={styles.cardBackground} />
              </div>
              {site.adds && <div className={styles.add}>{site.adds[0].name}</div>}
              <img src={site.imgUrl} alt={site.imgAlt} />
              <h2 id={titleId}>{site.title}</h2>
              <p aria-hidden={!isSelected}>
                <span id={descriptionId}>{site.description}</span>
                <div className={styles.innerLink}>
                  {site.urlLink.startsWith('/') ? (
                    <Link href={site.urlLink}>
                      <a tabIndex={isSelected ? undefined : -1}>Show 🡒</a>
                    </Link>
                  ) : (
                    <a href={site.urlLink} tabIndex={isSelected ? undefined : -1}>
                      Visit 🡒
                    </a>
                  )}
                </div>
              </p>
            </button>
          );
        })}
      </section>
      <Footer />
    </main>
  );
};
