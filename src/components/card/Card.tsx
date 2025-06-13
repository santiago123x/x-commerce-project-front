import React from "react";
import { CardProps } from "@/types/interfaces";
import styles from "./Card.module.css";

const Card: React.FC<CardProps> = ({
  description,
  image,
  price,
  bought,
  review,
  specialStyle,
}) => {
  const money_symbol: string = "US$";

  const renderStars = () => {
    return "★".repeat(Math.floor(review)) + "☆".repeat(5 - Math.floor(review));
  };

  return (
    <div className={`${styles.card_container} ${specialStyle ? styles.card_max_width : ''}`}>
      <div className={styles.container_image}>
        <img
          alt={`${description.slice(0, 10)}${
            description.length > 10 ? "..." : ""
          }`}
          src={image}
          loading="lazy"
        />
      </div>

      <div className={styles.container_description}>
        <p>{description}</p>
      </div>

      <div className={styles.container_reviews}>
        <div className={styles.reviews_stars}>{renderStars()}</div>
        <div className={styles.reviews_bought}>{bought} vendidos</div>
      </div>

      <div className={styles.container_price}>
        <span>{money_symbol}</span>
        <span>{price.toFixed(2)}</span>
      </div>

      <div className={styles.container_buttons}>
        <button className={styles.car_button}>Carrito</button>
        <button className={styles.buy_button}>Comprar</button>
      </div>
    </div>
  );
};

export default Card;
