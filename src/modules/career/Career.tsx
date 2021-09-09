import { FC } from 'react';

import { CareerArticle } from './CareerArticle';
import { education, experience, openSource } from './experience';
import { Header } from './Header';

import styles from './Career.module.scss';

const careerSections = [
  {
    id: 'experience',
    title: 'Experience',
    articles: experience,
  },
  {
    id: 'education',
    title: 'Education',
    articles: education,
  },
  {
    id: 'open-source',
    title: 'Volunteer experience',
    articles: openSource,
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
        {careerSections.map((section) => (
          <section key={section.id} className={styles.profileSection}>
            <header>
              <h2>{section.title}</h2>
            </header>
            {section.articles.map((article) => (
              <CareerArticle key={article.id} article={article} />
            ))}
          </section>
        ))}
        <footer>© 2021 Dalimil Hajek</footer>
      </main>
    </>
  );
};
