import { FC } from 'react';

import { concatClasses } from 'utils/concatClasses';
import { emailIcon, githubIcon, instagramIcon, linkedInIcon } from './icons';

import styles from './SocialLinks.module.scss';

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/dalimil',
    icon: linkedInIcon,
    className: styles.linkedIn,
  },
  {
    href: 'mailto:dalimilhajek@gmail.com',
    icon: emailIcon,
    className: styles.email,
  },
  {
    href: 'https://github.com/Dalimil',
    icon: githubIcon,
    className: styles.github,
  },
  {
    href: 'https://www.instagram.com/dali_hiking/',
    icon: instagramIcon,
    className: styles.instagram,
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
          className={concatClasses(styles.socialLink, link.className, externalClassName)}
        >
          {link.icon}
        </a>
      ))}
    </>
  );
};
