import { FC } from 'react';

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
    content:
      '• Modernized Office Online front-end by replacing old framework with modern React components across all Office apps.<br />' +
      '• Currently in Microsoft WebXT, working on the latest Web Experiences for Microsoft users.',
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
    content: '• Integrated a web app security scanner into the testing pipeline of Hotels.com',
  },
];

export const Career: FC = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <header>
          <img src="/images/dali-career-profile.jpg" alt="Dalimil Hajek career profile photo" />
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
