import { FC } from 'react';

import { concatClasses } from 'utils/concatClasses';

import styles from './Sprites.module.scss';

interface SpritesProps {
  count: number;
  hidden: boolean;
}

export const Sprites: FC<SpritesProps> = ({ count, hidden }) => {
  return (
    <div className={concatClasses(styles.sprites, !hidden && styles.isShown)} aria-hidden="true">
      {[...Array(count)].map((_, i) => (
        <div key={i} className={styles.sprite} />
      ))}
    </div>
  );
};
