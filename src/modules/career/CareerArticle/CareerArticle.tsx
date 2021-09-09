import { FC } from 'react';

import { concatClasses } from 'utils/concatClasses';
import { CareerEntry } from '../CareerEntry';

import styles from './CareerArticle.module.scss';

interface CareerArticleProps {
  article: CareerEntry;
}

export const CareerArticle: FC<CareerArticleProps> = ({ article }) => {
  return (
    <article className={styles.root}>
      <header>
        <h3>{article.title}</h3>
        <p className={styles.secondaryTitle}>{article.subTitle}</p>
        <p className={styles.timePeriod}>
          <time>{article.date.from}</time> – <time>{article.date.to}</time>
        </p>
        {article.location && <p className={styles.location}>{article.location}</p>}
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
