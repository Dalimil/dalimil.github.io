import { StaticImageData } from 'next/image';

export interface CareerEntry {
  id: string;
  title: string;
  subTitle: string;
  date?: {
    from: string;
    to: string;
  };
  location?: string;
  img: StaticImageData;
  imgEnlarge?: boolean;
  content: string;
  additionalLink?: {
    text: string;
    href: string;
  };
}
