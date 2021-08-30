import type { AppProps } from 'next/app';
import NextProgressBar from 'nextjs-progressbar';
import { FC } from 'react';

import { AppHead } from 'modules/head';

import 'styles/globals.scss';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <AppHead />
      <NextProgressBar color="#29D" startPosition={0.3} stopDelayMs={200} height={3} />
      <Component {...pageProps} />
    </>
  );
};
export default MyApp;
