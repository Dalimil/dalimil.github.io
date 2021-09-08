import { FC } from 'react';

import { concatClasses } from 'utils/concatClasses';
import { Header } from './Header';

import styles from './Career.module.scss';

const universityPageUrl = 'https://dalimil.github.io/';

const experience = [
  {
    id: 'microsoft',
    title: 'Software Engineer II',
    subTitle: 'Microsoft',
    date: {
      from: 'Oct 2018',
      to: 'Present',
    },
    location: 'Vancouver, British Columbia, Canada',
    img: '/images/career/microsoft.jpg',
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
    img: '/images/career/cherry.png',
    content:
      '• Led a development team with two direct reports.<br />' +
      '• Managed tasks, code reviews, and developed company&apos;s core-product mobile-first web app.',
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
    img: '/images/career/google.png',
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
    img: '/images/career/expedia.jpg',
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
    img: '/images/career/hackerrank.jpg',
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
    img: '/images/career/sumdog.png',
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
    img: '/images/career/avast.png',
    content: '• Worked on the Android team on apps such as Antivirus & Security.',
  },
];

export const Career: FC = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <header>
          <img className={styles.banner} src="/images/career/banner.jpg" alt="" />
          <img
            className={styles.avatar}
            src="/images/dali-career-profile.jpg"
            alt="Dalimil Hajek career profile photo"
          />
          <div>
            <h1>Dalimil Hajek</h1>
            <p className={styles.secondaryTitle}>Software Engineer II @ Microsoft</p>
            <p className={styles.location}>Vancouver, Canada</p>
            <p className={styles.info}>Passionate about web and user experience.</p>
          </div>
        </header>
        {/* EXPERIENCE */}
        <section className={styles.profileSection}>
          <header>
            <h2>Experience</h2>
          </header>
          {experience.map((exp) => (
            <article key={exp.id}>
              <header>
                <h3>{exp.title}</h3>
                <p className={styles.secondaryTitle}>{exp.subTitle}</p>
                <p className={styles.timePeriod}>
                  <time>{exp.date.from}</time> – <time>{exp.date.to}</time>
                </p>
                <p className={styles.location}>{exp.location}</p>
                <img
                  className={concatClasses(styles.logo, exp.imgEnlarge && styles.larger)}
                  src={exp.img}
                  alt={exp.subTitle}
                />
              </header>
              <section className={styles.content}>
                <p dangerouslySetInnerHTML={{ __html: exp.content }} />
              </section>
            </article>
          ))}
        </section>
        {/* EDUCATION */}
        <section className={styles.profileSection}>
          <header>
            <h2>Education</h2>
          </header>
          <article>
            <header>
              <h3>The University of Edinburgh</h3>
              <p className={styles.secondaryTitle}>BSc Computer Science, First Class with Honours</p>
              <p className={styles.timePeriod}>
                <time>2015</time> – <time>2018</time>
              </p>
            </header>
            <section className={styles.content}>
              <p>
                • Worked as a Tutor in 2017/2018 (Teaching Support Contract).
                <br />• My dissertation project reached 30,000 active users and got acquired.
              </p>
              <a href={universityPageUrl}>Visit university page 🡒</a>
            </section>
          </article>
        </section>
      </main>
    </>
  );
};
