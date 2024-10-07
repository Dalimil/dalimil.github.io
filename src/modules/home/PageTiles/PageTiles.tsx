import Link from 'next/link';
import ExportedImage from 'next-image-export-optimizer';
import { Dispatch, FC, SetStateAction } from 'react';

import { concatClasses } from 'utils/concatClasses';
import { sites } from './sites';
import { Sprites } from './Sprites';

import styles from './PageTiles.module.scss';

export interface PageTilesProps {
  selected: string | undefined;
  setSelected: Dispatch<SetStateAction<string | undefined>>;
}

export const PageTiles: FC<PageTilesProps> = ({ selected, setSelected }) => {
  return (
    /* ACCORDION (a11y) of Sites that expand with more info.
  (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion) */
    <section className={styles.sites} aria-labelledby="main-section">
      <h1 id="main-section" className="screen-reader-text">
        List of Dalimil Hajek&apos;s portfolio sites.
      </h1>
      {sites.map((site) => {
        const isExpanded = selected === site.id;
        const titleId = `${site.id}-title`;
        const buttonId = `${site.id}-button`;
        const panelId = `${site.id}-panel`;
        const spriteCount = 100;
        const images = site.images;
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
                <ExportedImage
                  src={images.primary}
                  alt={site.imgAlt}
                  priority={true}
                  className={concatClasses(styles.avatar, images.secondary && styles.avatarFrontSide)}
                />
                {images.secondary && (
                  <ExportedImage
                    src={images.secondary}
                    alt={site.backSideImgAlt ?? ''}
                    className={concatClasses(styles.avatar, styles.avatarBackSide)}
                  />
                )}
                {site.badges?.map((badge, index) => (
                  <ExportedImage key={index} className={styles.badge} src={badge.img} alt="" />
                ))}
                <div className={styles.title} id={titleId}>
                  {site.title}
                </div>
              </button>
            </h2>
            {/* Expandable content */}
            <div role="region" aria-labelledby={buttonId} id={panelId}>
              {site.sprites && <Sprites hidden={!isExpanded} count={spriteCount} />}
              <div className={styles.cardBox} aria-hidden="true">
                <div className={styles.cardBackground} />
              </div>
              <p aria-hidden={!isExpanded} onClick={(e) => e.stopPropagation()}>
                <span>{site.description}</span>
                <span className={styles.innerLink}>
                  {site.urlLink.startsWith('/') ? (
                    <Link href={site.urlLink} tabIndex={isExpanded ? undefined : -1}>
                      {site.urlLinkText}
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
  );
};
