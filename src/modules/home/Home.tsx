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
    badges: [
      { img: '/images/logos/uoe-blue.jpg' },
      { img: '/images/logos/uoe-white.jpg' },
      { img: '/images/logos/uoe-blue.jpg' },
    ],
    urlLink: '/career',
    urlLinkText: 'Show career site 🡒',
    description: 'See my career highlights and experience...',
    sprites: true,
  },
  {
    id: SiteId.photography,
    title: 'Photography',
    className: styles.photography,
    imgUrl: '/images/dali-photography-profile.jpg',
    imgAlt: 'Dalimil Hajek photography profile photo',
    urlLink: 'https://dali-media.web.app/',
    urlLinkText: 'Visit photography 🡒',
    description: 'See my photography portfolio...',
    sprites: false,
  },
  {
    id: SiteId.university,
    title: 'University',
    className: styles.university,
    imgUrl: '/images/dali-university-profile.jpg',
    imgAlt: 'Dalimil Hajek profile photo from university years',
    badges: [{ img: '/images/logos/uoe-blue.jpg' }, { img: '/images/logos/uoe-white.jpg' }],
    urlLink: 'https://dalimil.github.io/',
    urlLinkText: 'Visit university page 🡒',
    description: 'See my university hackathon projects...',
    sprites: false,
  },
];

export const Home: FC = () => {
  const [selected, setSelected] = useState<string | undefined>(undefined);
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
      onClick={() => setSelected(undefined)}
      style={{ '--x': `${mouse.x}px`, '--y': `${mouse.y}px` } as CSSProperties}
    >
      {/* ACCORDION (a11y) of Sites that expand with more info.
        (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion) */}
      <section className={styles.sites} aria-labelledby="main-section">
        <h1 id="main-section" className="screen-reader-text">
          List of Dalimil Hajek&apos;s portfolio sites.
        </h1>
        {sites.map((site) => {
          const isExpanded = selected === site.id;
          const titleId = `${site.id}-title`;
          const buttonId = `${site.id}-button`;
          const panelId = `${site.id}-panel`;
          const spriteCount = 30;
          return (
            // We use DIV here as it has no a11y meaning, just wrapper for our accordion pieces.
            <div
              key={site.className}
              className={concatClasses(
                styles.site,
                site.className,
                isExpanded && styles.isExpanded,
                !isExpanded && selected !== undefined && styles.otherSiteSelected
              )}
            >
              <h2>
                <button
                  id={buttonId}
                  aria-expanded={isExpanded}
                  aria-controls={panelId}
                  aria-labelledby={titleId}
                  onClick={(e) => {
                    setSelected(isExpanded ? undefined : site.id);
                    e.stopPropagation();
                  }}
                >
                  <img src={site.imgUrl} alt={site.imgAlt} className={styles.avatar} />
                  {site.badges?.map((badge, index) => (
                    <img key={index} className={styles.badge} src={badge.img} alt="" />
                  ))}
                  <div className={styles.title} id={titleId}>
                    {site.title}
                  </div>
                </button>
              </h2>
              {/* Expandable content */}
              <div role="region" aria-labelledby={buttonId} id={panelId}>
                {site.sprites && (
                  <div className={styles.sprites} aria-hidden="true">
                    {[...Array(spriteCount)].map((_, i) => (
                      <div key={i} className={styles.sprite} />
                    ))}
                  </div>
                )}
                <div className={styles.cardBox} aria-hidden="true">
                  <div className={styles.cardBackground} />
                </div>
                <p aria-hidden={!isExpanded} onClick={(e) => e.stopPropagation()}>
                  <span>{site.description}</span>
                  <span className={styles.innerLink}>
                    {site.urlLink.startsWith('/') ? (
                      <Link href={site.urlLink}>
                        <a tabIndex={isExpanded ? undefined : -1}>{site.urlLinkText}</a>
                      </Link>
                    ) : (
                      <a href={site.urlLink} tabIndex={isExpanded ? undefined : -1}>
                        {site.urlLinkText}
                      </a>
                    )}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </section>
      <Footer />
    </main>
  );
};
