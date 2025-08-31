import CardCategory from "../cardCategory/CardCategory";
import { SectionCategoryProps } from "@/types/types";

const SectionCategory = ({
  title,
  categories,
  backgroundColor = "#f9f9f9",
}: SectionCategoryProps) => {
  return (
    <section className="mx-auto w-[90%] rounded-lg p-6" style={{ backgroundColor }}>
      <h1 className="mb-4 pl-0 text-left font-urbanist text-2xl font-bold text-[#121212]">
        {title}
      </h1>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((category) => (
          <CardCategory
            key={category.id}
            image={category.image}
            title={category.title}
            href={category.href}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionCategory;
