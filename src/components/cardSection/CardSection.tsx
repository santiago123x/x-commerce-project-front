import React, { useState, useEffect } from "react";
import Card from "@/components/card/Card";
import products from "@/mocks/products";
import styles from "./cardSection.module.css";
import { CardProps } from "@/types/interfaces";

const CardSection = () => {
  const categories = ["Celulares", "PCs", "Audio", "Accesorios"];
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [displayProducts, setDisplayProducts] = useState<CardProps[]>([]);

  useEffect(() => {
    const filtered = products.filter((p) => p.category === currentCategory);
    const shuffled = [...filtered].sort(() => 0.5 - Math.random());
    setDisplayProducts(shuffled.slice(0, 3));
  }, [currentCategory]);

  return (
    <div className={styles.container}>
      <h1>Lo más vendido en:</h1>

      <div className={styles.categorySelector}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.categoryButton} ${
              currentCategory === category ? styles.active : ""
            }`}
            onClick={() => setCurrentCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <section className={styles.cardGrid}>
        {displayProducts.map((product, index) => (
          <Card key={index} {...product} />
        ))}
      </section>
    </div>
  );
};

export default CardSection;
