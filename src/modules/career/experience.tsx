import AvastLogo from 'public/images/career/avast.png';
import CherryLogo from 'public/images/career/cherry.png';
import EdgeDeltaLogo from 'public/images/career/edgedelta.jpg';
import EdinburghLogo from 'public/images/career/edinburgh.png';
import ExpediaLogo from 'public/images/career/expedia.jpg';
import GoogleLogo from 'public/images/career/google.png';
import HackerRankLogo from 'public/images/career/hackerrank.jpg';
import MicrosoftLogo from 'public/images/career/microsoft.jpg';
import MozillaLogo from 'public/images/career/mozilla.png';
import SumdogLogo from 'public/images/career/sumdog.png';
import TwitterLogo from 'public/images/career/twitter.jpg';
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
    location: 'Edinburgh, United Kingdom',
    img: EdinburghLogo,
    imgEnlarge: true,
    content:
      '• Worked as a Tutor in my senior year (Teaching Support Contract).<br />' +
      '• My dissertation project reached 30,000 active users and got acquired.',
    additionalLink: {
      text: 'Visit university page ›',
      href: universityPageUrl,
    },
  },
];

/** Work experience to be displayed in the career page */
export const experience: CareerEntry[] = [
  {
    id: 'edgedelta',
    title: 'Senior Software Engineer',
    subTitle: 'Edge Delta',
    date: {
      from: 'Apr 2023',
      to: 'Present',
    },
    location: 'Vancouver, Canada',
    img: EdgeDeltaLogo,
    content: '• Currently building web frontend at Edge Delta...',
  },
  {
    id: 'twitter',
    title: 'Senior Software Engineer',
    subTitle: 'Twitter',
    date: {
      from: 'Oct 2021',
      to: 'Jan 2023',
    },
    location: 'Vancouver, Canada',
    img: TwitterLogo,
    content:
      "• Driving web development of Twitter's Ads Exp Platform.<br />" +
      '• Leading frontend (React, Redux, TypeScript) and application server (Node.js, Twitter services) parts of the platform.<br />' +
      '• Integrating with Google Cloud and Big Data Systems worked on by data science and data engineering teams.',
  },
  {
    id: 'microsoft',
    title: 'Software Engineer II',
    subTitle: 'Microsoft',
    date: {
      from: 'Oct 2018',
      to: 'Oct 2021',
    },
    location: 'Vancouver, Canada',
    img: MicrosoftLogo,
    imgEnlarge: true,
    content:
      '• Modernized Office Online front-end by replacing old framework with modern React components across all Office apps.<br />' +
      "• Implemented the booking system and homepage of Microsoft's TakeLessons.",
  },
  {
    id: 'one-cherry',
    title: 'Software Engineer',
    subTitle: 'One Cherry Ltd',
    date: {
      from: 'Sep 2017',
      to: 'Sep 2018',
    },
    location: 'Edinburgh, United Kingdom',
    img: CherryLogo,
    content:
      '• Led a startup development team with two direct reports.<br />' +
      '• Managed tasks, code reviews, and developed company&apos;s core-product web app.',
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
    img: GoogleLogo,
    imgEnlarge: true,
    content: '• Developed web application front-end features of Google Hangouts Chat.',
  },
  {
    id: 'expedia',
    title: 'Software Engineering Intern',
    subTitle: 'Expedia',
    date: {
      from: 'Jun 2016',
      to: 'Sep 2016',
    },
    location: 'London, United Kingdom',
    img: ExpediaLogo,
    content: '• Integrated Zed Attack Proxy (a web application security scanner) into Hotels.com',
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
    img: HackerRankLogo,
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
    img: SumdogLogo,
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
    img: AvastLogo,
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
    img: MozillaLogo,
    content: '• Contributions to Mozilla Firefox, primarily Firefox Developer Tools.',
  },
  {
    id: 'microsoft-fluent',
    title: 'Open Source Contributor',
    subTitle: 'Microsoft Fluent UI',
    date: {
      from: 'Feb 2019',
      to: 'Apr 2021',
    },
    img: MicrosoftLogo,
    content: '• Contributed multiple improvements to Microsoft&apos;s leading UI/UX framework.',
  },
];
