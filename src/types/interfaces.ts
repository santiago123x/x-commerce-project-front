interface CardProps {
    description: string;
    image: string;
    price: number;
    bought: number;
    review: number;
    category?: string;
    specialStyle?: boolean;
  }

  interface BannerSlide {
      imgSrc: string;
      title: string;
      description: string;
      categories: string[];
  }


export type {
    CardProps,
    BannerSlide
}