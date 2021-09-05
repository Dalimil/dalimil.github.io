import { CSSProperties, FC, useCallback, useState } from 'react';

import { Footer } from './Footer';
import { PageTiles } from './PageTiles';

import styles from './Home.module.scss';

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
    <>
      <main
        className={styles.root}
        onMouseMove={onMouseMove}
        onClick={() => setSelected(undefined)}
        style={{ '--x': `${mouse.x}px`, '--y': `${mouse.y}px` } as CSSProperties}
      >
        <PageTiles selected={selected} setSelected={setSelected} />
      </main>
      {/* Footer with social links */}
      <Footer />
    </>
  );
};
