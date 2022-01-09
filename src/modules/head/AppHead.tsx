import Head from 'next/head';
import { FC } from 'react';

import personSchema from './person-schema.json';

const meta = {
  url: 'https://dalimil.github.io/',
  imageUrl: 'https://dalimil.github.io/images/career/banner.jpg',
  author: 'Dalimil Hajek',
  title: 'Dalimil Hajek - Personal Website and Portfolio',
  description:
    'Software Engineering Portfolio of Dalimil Hajek. This is a software engineering portfolio page containing a selection of technical projects, built apps, and relevant experience.',
  keywords:
    'Dalimil, Hajek, Dali, Dalimil Hajek, portfolio, JavaScript, React, software engineer, developer, hackathon, University of Edinburgh, Computer Science',
};

export const AppHead: FC = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="language" content="en" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#ffffff" />
      <title>{meta.title}</title>
      <meta name="author" content={meta.author} />
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      {/* Open Graph */}
      <meta property="og:url" content={meta.url} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:site_name" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.imageUrl} />
      {/* Twitter Graph (the non-existent fallback to open graph) */}
      <meta name="twitter:card" content="app" />
      {/* Icons and Manifest */}
      <link rel="icon" type="image/png" href="/images/icons/suitcase16.png" sizes="16x16" />
      <link rel="icon" type="image/png" href="/images/icons/suitcase32.png" sizes="32x32" />
      <link rel="apple-touch-icon" href="/images/icons/suitcase256.png" sizes="256x256" />
      <link href="/manifest.json" rel="manifest" />
      <link rel="canonical" href={meta.url} />
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
    </Head>
  );
};
