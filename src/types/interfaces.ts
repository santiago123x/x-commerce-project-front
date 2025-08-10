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

  interface SummaryItem {
    name: string;
    price: number;
    quantity: number;
  }
  
  interface PurchaseSummaryProps {
    items: SummaryItem[];
    total: number;
    onContinue?: () => void;
  }

export type {
    CardProps,
    BannerSlide,
    PurchaseSummaryProps,
    SummaryItem
}