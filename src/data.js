import image1 from "./images/tour-1.jpeg";
import image2 from "./images/tour-2.jpeg";
import image3 from "./images/tour-3.jpeg";
import image4 from "./images/tour-4.jpeg";

export const pagelinks = [
  { id: 1, href: "#home", description: "home" },
  { id: 2, href: "#about", description: "about" },
  { id: 3, href: "#services", description: "services" },
  { id: 4, href: "#tours", description: "tours" },
];
export const sitelinks = [
  { id: 1, href: "https://www.facebook.com", classname: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", classname: "fab fa-twitter" },
  {
    id: 3,
    href: "https://www.squarespace.com",
    classname: "fab fa-squarespace",
  },
];
export const service = [
  {
    id: 1,
    classnameicon: "fas fa-wallet fa-fw",
    service: "Saving Money",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores officia.",
  },
  {
    id: 2,
    classnameicon: "fas fa-tree fa-fw",
    service: "Endless Hiking",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores officia.",
  },
  {
    id: 3,
    classnameicon: "fas fa-socks fa-fw",
    service: "Amazing Comfort",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores officia.",
  },
];

export const tour = [
  {
    id: 1,
    image: image1,
    date: "august 26th, 2020",
    price: "$2100",
    duration: "6 Days",
    title: "Tibet Adventure",
    country: "China",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  },
  {
    id: 2,
    image: image2,
    date: "october 1th, 2020",
    price: "$1400",
    duration: "11 Days",
    title: "Best of Java",
    country: "Indonesia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  },
  {
    id: 3,
    image: image3,
    date: "september 15th, 2020",
    price: "$5000",
    duration: "8 Days",
    title: "Explore Hong Kong",
    country: "Hong Kong",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  },
  {
    id: 4,
    image: image4,
    date: "december 5th, 2019",
    price: "$3300",
    duration: "20 Days",
    title: "Kenya Highlights",
    country: "Kenya",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  },
];
