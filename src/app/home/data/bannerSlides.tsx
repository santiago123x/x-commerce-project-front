
interface BannerSlide {
    imgSrc: string;
    title: string;
    description: string;
    categories: string[];
}

export const bannerSlides: BannerSlide[] = [
    {
        imgSrc: "./images/slide1.jpg",
        title: "Venice: The Floating City",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quas deleniti voluptas nulla optio. Quos tempora, cum quibusdam, veniam corporis fugiat itaque magni quae perspiciatis delectus praesentium quia. Quam, repellat!"
        ,
        categories: ["Travel", "History"],
    },
    {
        imgSrc: "./images/slide2.jpg",
        title: "Top 10 Hidden Beaches",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci laudantium commodi, minus natus error omnis illo eius exercitationem modi aspernatur?",
        categories: ["Celulares", "PCs"],
    },
    {
        imgSrc: "./images/slide3.jpg",
        title: "Top 10 Hidden Beaches",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam in sequi culpa adipisci maiores iusto? Itaque, nostrum. Ducimus adipisci, repellendus expedita dolorem voluptatibus a mollitia deserunt. Saepe cupiditate in architecto!",
        categories: ["Travel", "Nature"],
    },
];
