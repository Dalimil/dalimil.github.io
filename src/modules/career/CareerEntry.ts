import { CustomImgProps } from 'modules/common/CustomImgProps';

export interface CareerEntry {
  id: string;
  title: string;
  subTitle: string;
  date?: {
    from: string;
    to: string;
  };
  location?: string;
  img: React.FC<CustomImgProps>;
  imgEnlarge?: boolean;
  content: string;
  additionalLink?: {
    text: string;
    href: string;
  };
}
