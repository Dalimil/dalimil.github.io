import { FC } from 'react';

import { concatClasses } from 'utils/concatClasses';
import { emailIcon, githubIcon, instagramIcon, linkedInIcon } from './icons';

import styles from './SocialLinks.module.scss';

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/dalimil',
    icon: linkedInIcon,
    className: styles.linkedIn,
    title: 'LinkedIn',
  },
  {
    href: 'mailto:dalimilhajek@gmail.com',
    icon: emailIcon,
    className: styles.email,
    title: 'Email',
  },
  {
    href: 'https://github.com/Dalimil',
    icon: githubIcon,
    className: styles.github,
    title: 'GitHub',
  },
  {
    href: 'https://www.instagram.com/dali_hiking/',
    icon: instagramIcon,
    className: styles.instagram,
    title: 'Instagram',
    rel: 'nofollow',
  },
];

export interface SocialLinksProps {
  linkClassName?: string;
}

export const SocialLinks: FC<SocialLinksProps> = ({ linkClassName: externalClassName }) => {
  return (
    <>
      {socialLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          data-title={link.title}
          aria-label={link.title}
          className={concatClasses(styles.socialLink, link.className, externalClassName)}
          rel={link.rel}
        >
          {link.icon}
        </a>
      ))}
    </>
  );
};
