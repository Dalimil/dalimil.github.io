import type { AppProps } from 'next/app';
import { FC } from 'react';

import { AppHead } from 'modules/head';

import 'styles/globals.scss';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <AppHead />
      <Component {...pageProps} />
    </>
  );
};
export default MyApp;
