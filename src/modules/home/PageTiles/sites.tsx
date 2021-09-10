import Img from 'react-optimized-image';

import { CustomImgProps } from 'modules/common/CustomImgProps';
import CareerAvatar from 'public/images/dali-career-profile.jpg';
import PhotographyAvatar from 'public/images/dali-photography-profile.jpg';
import UniversityAvatar from 'public/images/dali-university-profile.jpg';
import PhotographyIcon from 'public/images/logos/camera-gallery.jpg';
import UniversityIcon from 'public/images/logos/uoe-white.jpg';

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
  imgAlt: string;
  urlLink: string;
  urlLinkText: string;
  description: string;
  sprites: boolean;
  backSideImgAlt?: string;
  badges?: { img: string }[];
}

type SiteImages = {
  [key in SiteId]: {
    primary: React.FC<CustomImgProps>;
    secondary?: React.FC<CustomImgProps>;
  };
};

// Disable eslint and create Img components already here because of:
// https://github.com/cyrilwanner/react-optimized-image/issues/19
/* eslint-disable react/display-name */
export const siteImages: SiteImages = {
  [SiteId.career]: {
    primary: (props: CustomImgProps) => <Img src={CareerAvatar} {...props} />,
  },
  [SiteId.university]: {
    primary: (props: CustomImgProps) => <Img src={UniversityIcon} {...props} />,
    secondary: (props: CustomImgProps) => <Img src={UniversityAvatar} {...props} />,
  },
  [SiteId.photography]: {
    primary: (props: CustomImgProps) => <Img src={PhotographyIcon} {...props} />,
    secondary: (props: CustomImgProps) => <Img src={PhotographyAvatar} {...props} />,
  },
};

export const sites: Site[] = [
  {
    id: SiteId.career,
    title: 'Career',
    className: styles.career,
    imgAlt: 'Dalimil Hajek career profile photo',
    urlLink: '/career',
    urlLinkText: 'Show career site 🡒',
    description: 'See my career highlights and experience...',
    sprites: true,
  },
  {
    id: SiteId.university,
    title: 'University',
    className: styles.university,
    imgAlt: 'University of Edinburgh logo',
    backSideImgAlt: 'Dalimil Hajek profile photo from university years',
    urlLink: 'https://dalimil.github.io/university',
    urlLinkText: 'Visit university page 🡒',
    description: 'See my university hackathon projects...',
    sprites: false,
  },
  {
    id: SiteId.photography,
    title: 'Photography',
    className: styles.photography,
    imgAlt: 'Icon of a collection of photos.',
    urlLink: 'https://dali-media.web.app/',
    urlLinkText: 'Visit photography 🡒',
    backSideImgAlt: 'Dalimil Hajek photography profile photo',
    description: 'See my photography portfolio...',
    sprites: false,
  },
];
