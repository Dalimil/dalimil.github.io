import styles from './PageTiles.module.scss';

enum SiteId {
  career = 'career',
  photography = 'photo',
  university = 'uni',
}

interface Site {
  id: SiteId;
  title: string;
  className: string;
  imgUrl: string;
  imgAlt: string;
  urlLink: string;
  urlLinkText: string;
  description: string;
  sprites: boolean;
  backSideImgUrl?: string;
  backSideImgAlt?: string;
  badges?: { img: string }[];
}

export const sites: Site[] = [
  {
    id: SiteId.career,
    title: 'Career',
    className: styles.career,
    imgUrl: '/images/dali-career-profile.jpg',
    imgAlt: 'Dalimil Hajek career profile photo',
    urlLink: '/career',
    urlLinkText: 'Show career site 🡒',
    description: 'See my career highlights and experience...',
    sprites: true,
  },
  {
    id: SiteId.photography,
    title: 'Photography',
    className: styles.photography,
    imgUrl: '/images/logos/camera.jpg',
    imgAlt: '',
    urlLink: 'https://dali-media.web.app/',
    urlLinkText: 'Visit photography 🡒',
    backSideImgUrl: '/images/dali-photography-profile.jpg',
    backSideImgAlt: 'Dalimil Hajek photography profile photo',
    description: 'See my photography portfolio...',
    sprites: false,
  },
  {
    id: SiteId.university,
    title: 'University',
    className: styles.university,
    imgUrl: '/images/logos/uoe-white.jpg',
    imgAlt: 'University of Edinburgh logo',
    backSideImgUrl: '/images/dali-university-profile.jpg',
    backSideImgAlt: 'Dalimil Hajek profile photo from university years',
    urlLink: 'https://dalimil.github.io/university',
    urlLinkText: 'Visit university page 🡒',
    description: 'See my university hackathon projects...',
    sprites: false,
  },
];
