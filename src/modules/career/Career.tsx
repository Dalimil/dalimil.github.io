import { FC } from 'react';

import { concatClasses } from 'utils/concatClasses';
import { CareerEntry } from './CareerEntry';
import { education, experience } from './experience';
import { Header } from './Header';

import styles from './Career.module.scss';

export const CareerArticle: FC<{ article: CareerEntry }> = ({ article }) => {
  return (
    <article>
      <header>
        <h3>{article.title}</h3>
        <p className={styles.secondaryTitle}>{article.subTitle}</p>
        <p className={styles.timePeriod}>
          <time>{article.date.from}</time> – <time>{article.date.to}</time>
        </p>
        <p className={styles.location}>{article.location}</p>
        <img
          className={concatClasses(styles.logo, article.imgEnlarge && styles.larger)}
          src={article.img}
          alt={article.subTitle}
        />
      </header>
      <section className={styles.content}>
        <p dangerouslySetInnerHTML={{ __html: article.content }} />
        {article.additionalLink && <a href={article.additionalLink.href}>{article.additionalLink.text}</a>}
      </section>
    </article>
  );
};

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
            <CareerArticle key={exp.id} article={exp} />
          ))}
        </section>
        {/* EDUCATION */}
        <section className={styles.profileSection}>
          <header>
            <h2>Education</h2>
          </header>
          {education.map((exp) => (
            <CareerArticle key={exp.id} article={exp} />
          ))}
        </section>
      </main>
    </>
  );
};
