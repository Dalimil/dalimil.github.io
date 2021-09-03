import { FC } from 'react';

import { Header } from './Header';

import styles from './Career.module.scss';

export const Career: FC = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>Career</main>
    </>
  );
};
