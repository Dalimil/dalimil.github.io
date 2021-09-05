import styles from './PageTiles.module.scss';

enum SiteId {
  career = 'career',
  photography = 'photo',
  university = 'uni',
}

export const sites = [
  {
    id: SiteId.career,
    title: 'Career',
    className: styles.career,
    imgUrl: '/images/dali-career-profile.jpg',
    imgAlt: 'Dalimil Hajek career profile photo',
    badges: [
      { img: '/images/logos/uoe-blue.jpg' },
      { img: '/images/logos/uoe-white.jpg' },
      { img: '/images/logos/uoe-blue.jpg' },
    ],
    urlLink: '/career',
    urlLinkText: 'Show career site 🡒',
    description: 'See my career highlights and experience...',
    sprites: true,
  },
  {
    id: SiteId.photography,
    title: 'Photography',
    className: styles.photography,
    imgUrl: '/images/dali-photography-profile.jpg',
    imgAlt: 'Dalimil Hajek photography profile photo',
    urlLink: 'https://dali-media.web.app/',
    urlLinkText: 'Visit photography 🡒',
    // backSideImgUrl: '/images/logos/camera.jpg',
    // backSideImgAlt: '',
    description: 'See my photography portfolio...',
    sprites: false,
  },
  {
    id: SiteId.university,
    title: 'University',
    className: styles.university,
    imgUrl: '/images/dali-university-profile.jpg',
    imgAlt: 'Dalimil Hajek profile photo from university years',
    backSideImgUrl: '/images/logos/uoe-white.jpg',
    backSideImgAlt: 'University of Edinburgh logo',
    urlLink: 'https://dalimil.github.io/',
    urlLinkText: 'Visit university page 🡒',
    description: 'See my university hackathon projects...',
    sprites: false,
  },
];
