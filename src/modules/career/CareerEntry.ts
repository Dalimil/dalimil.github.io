export interface CareerEntry {
  id: string;
  title: string;
  subTitle: string;
  date: {
    from: string;
    to: string;
  };
  location?: string;
  img: string;
  imgEnlarge?: boolean;
  content: string;
  additionalLink?: {
    text: string;
    href: string;
  };
}
