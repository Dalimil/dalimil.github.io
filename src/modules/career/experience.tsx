import Img from 'react-optimized-image';

import { CustomImgProps } from 'modules/common/CustomImgProps';
import AvastLogo from 'public/images/career/avast.png';
import CherryLogo from 'public/images/career/cherry.png';
import EdinburghLogo from 'public/images/career/edinburgh.png';
import ExpediaLogo from 'public/images/career/expedia.jpg';
import GoogleLogo from 'public/images/career/google.png';
import HackerRankLogo from 'public/images/career/hackerrank.jpg';
import MicrosoftLogo from 'public/images/career/microsoft.jpg';
import MozillaLogo from 'public/images/career/mozilla.png';
import SumdogLogo from 'public/images/career/sumdog.png';
import { CareerEntry } from './CareerEntry';

// Disable eslint and create Img components already here because of:
// https://github.com/cyrilwanner/react-optimized-image/issues/19
/* eslint-disable react/display-name */

const universityPageUrl = 'https://dalimil.github.io/university';

/** Education experience to be displayed in the career page */
export const education: CareerEntry[] = [
  {
    id: 'edinburgh',
    title: 'The University of Edinburgh',
    subTitle: 'BSc Computer Science, First Class with Honours',
    date: {
      from: '2015',
      to: '2018',
    },
    location: 'Edinburgh, United Kingdom',
    img: (props: CustomImgProps) => <Img src={EdinburghLogo} {...props} />,
    imgEnlarge: true,
    content:
      '• Worked as a Tutor in 2017/2018 (Teaching Support Contract).<br />' +
      '• My dissertation project reached 30,000 active users and got acquired.',
    additionalLink: {
      text: 'Visit university page 🡒',
      href: universityPageUrl,
    },
  },
];

/** Work experience to be displayed in the career page */
export const experience: CareerEntry[] = [
  {
    id: 'microsoft',
    title: 'Software Engineer II',
    subTitle: 'Microsoft',
    date: {
      from: 'Oct 2018',
      to: 'Present',
    },
    location: 'Vancouver, British Columbia, Canada',
    img: (props: CustomImgProps) => <Img src={MicrosoftLogo} {...props} />,
    imgEnlarge: true,
    content:
      '• Modernized Office Online front-end by replacing old framework with modern React components across all Office apps.<br />' +
      '• Currently in Microsoft WebXT, working on the latest Web Experiences for Microsoft users.',
  },
  {
    id: 'one-cherry',
    title: 'Tech Lead at a student startup',
    subTitle: 'One Cherry Ltd',
    date: {
      from: 'Feb 2018',
      to: 'Jul 2018',
    },
    location: 'Edinburgh, United Kingdom',
    img: (props: CustomImgProps) => <Img src={CherryLogo} {...props} />,
    content:
      '• Led a development team with two direct reports.<br />' +
      '• Managed tasks, code reviews, and developed company&apos;s core-product mobile web app.',
  },
  {
    id: 'google',
    title: 'Software Engineering Intern',
    subTitle: 'Google',
    date: {
      from: 'Jun 2017',
      to: 'Sep 2017',
    },
    location: 'Mountain View, California',
    img: (props: CustomImgProps) => <Img src={GoogleLogo} {...props} />,
    imgEnlarge: true,
    content: '• Developed web application front-end features of Google Hangouts Chat.',
  },
  {
    id: 'expedia',
    title: 'Application Security Engineer',
    subTitle: 'Expedia',
    date: {
      from: 'Jun 2016',
      to: 'Sep 2016',
    },
    location: 'London, United Kingdom',
    img: (props: CustomImgProps) => <Img src={ExpediaLogo} {...props} />,
    content: '• Integrated a web app security scanner into the testing pipeline of Hotels.com',
  },
  {
    id: 'hackerrank',
    title: 'Software Contractor',
    subTitle: 'HackerRank',
    date: {
      from: 'Mar 2016',
      to: 'Jun 2016',
    },
    location: 'Remote',
    img: (props: CustomImgProps) => <Img src={HackerRankLogo} {...props} />,
    content: '• Worked closely with HackerRank engineers to create new programming challenges and weekly contests.',
  },
  {
    id: 'sumdog',
    title: 'Junior Scala Developer',
    subTitle: 'Sumdog',
    date: {
      from: 'Feb 2016',
      to: 'May 2016',
    },
    location: 'Edinburgh, United Kingdom',
    img: (props: CustomImgProps) => <Img src={SumdogLogo} {...props} />,
    content: '• Wrote Scala code for company’s web backend services.',
  },
  {
    id: 'avast',
    title: 'Junior Software Developer',
    subTitle: 'Avast Software',
    date: {
      from: 'Jul 2015',
      to: 'Sep 2015',
    },
    location: 'Prague, Czech Republic',
    img: (props: CustomImgProps) => <Img src={AvastLogo} {...props} />,
    content: '• Worked on the Android team on apps such as Antivirus & Security.',
  },
];

/** Open source experience to be displayed on the career page */
export const openSource: CareerEntry[] = [
  {
    id: 'mozilla',
    title: 'Open Source Contributor',
    subTitle: 'Mozilla Firefox',
    date: {
      from: 'Jun 2016',
      to: 'Feb 2017',
    },
    img: (props: CustomImgProps) => <Img src={MozillaLogo} {...props} />,
    content: '• Fixed bugs in Mozilla Firefox, primarily in Firefox Developer Tools.',
  },
  {
    id: 'microsoft-fluent',
    title: 'Open Source Contributor',
    subTitle: 'Microsoft Fluent UI',
    date: {
      from: 'Feb 2019',
      to: 'Apr 2021',
    },
    img: (props: CustomImgProps) => <Img src={MicrosoftLogo} {...props} />,
    content: '• Contributed multiple improvements to Microsoft&apos;s leading UI/UX framework.',
  },
];
