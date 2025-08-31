import { CardCategoryProps } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const CardCategory = ({ image, title, href }: CardCategoryProps) => {
  return (
    <Link
      href={href}
      className="relative flex h-[280px] flex-col items-center justify-between transition-opacity duration-200 hover:opacity-90"
    >
      <div className="relative h-[90%] w-full overflow-hidden">
        <Image
          alt={title}
          src={image}
          fill
          className="object-cover"
          sizes="(max-width: 200px) 100vw, 200px"
        />
      </div>

      <div className="w-full text-left">
        <p className="text-base font-medium">{title}</p>
      </div>
    </Link>
  );
};

export default CardCategory;
