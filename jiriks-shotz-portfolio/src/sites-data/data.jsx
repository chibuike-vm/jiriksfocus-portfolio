import { nanoid } from "nanoid";
import fashionImg from "../assets/images/fashion_photoshoot.svg";
import groupImg from "../assets/images/group_selfie.svg";
import productImg from "../assets/images/product_photography.svg";
import tripImg from "../assets/images/trip.svg";
import landscapeImg from "../assets/images/landscape_photographer.svg";
import {
    FaGithubSquare,
    FaFacebook,
    FaLinkedin,
    FaTwitter,
} from "react-icons/fa";

import { FaCameraRetro } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { IoMdPhotos } from "react-icons/io";

export const links = [
    { id: nanoid(), text: "home", href: "#home", icon: <FaHome /> },
    { id: nanoid(), text: "about", href: "#about", icon: <FcAbout /> },
    {
        id: nanoid(),
        text: "services",
        href: "#services",
        icon: <FaCameraRetro />,
    },
    { id: nanoid(), text: "gallery", href: "#gallery", icon: <IoMdPhotos /> },
];

export const descriptiveText =
    "I am Ihejirika, an astute and a professional photographer with lots of feathers on my cap.";

export const services = [
    {
        id: nanoid(),
        img: fashionImg,
        alt: "Fashion Photo",
        title: "fashion photography",
        service:
            "I showcase the latest trends and styles with creativity and elegance. My fashion photography brings fashion to life with striking visuals that capture the essence of style and sophistication. From runway shows and editorial shoots to fashion campaigns and lookbooks, my fashion photography elevates your brand and leaves a lasting impression.",
    },
    {
        id: nanoid(),
        img: groupImg,
        alt: "Group Photo",
        title: "event photography",
        service:
            "I specialize in capturing the essence of your special moments, from weddings and parties to corporate events and celebrations. With a keen eye for detail and a knack for capturing candid moments, I ensure that every event is beautifully documented, leaving you with timeless memories to cherish for years to come.",
    },
    {
        id: nanoid(),
        img: productImg,
        alt: "Product Photo",
        title: "product photography",
        service:
            "I showcase the unique features and characteristics of your products in captivating detail. Whether it's sleek gadgets, stylish fashion accessories, or delectable culinary creations, my product photography brings your products to life, highlighting their quality and craftsmanship with stunning visuals that captivate your audience and drive engagement.",
    },
    {
        id: nanoid(),
        img: tripImg,
        alt: "Trip Photo",
        title: "travel photography",
        service:
            "I showcase the latest trends and styles with creativity and elegance. My fashion photography brings fashion to life with striking visuals that capture the essence of style and sophistication. From runway shows and editorial shoots to fashion campaigns and lookbooks, my fashion photography elevates your brand and leaves a lasting impression.",
    },
    {
        id: nanoid(),
        img: landscapeImg,
        alt: "Landscape Photo",
        title: "landscape photography",
        service:
            "I immerse viewers in the breathtaking beauty of nature's landscapes, from majestic mountains and serene lakes to vast deserts and lush forests. My landscape photography transports you to captivating destinations, evoking a sense of wonder and awe as you explore the wonders of the natural world through my lens.",
    },
];

export const footer = [
    {
        social: <FaFacebook />,
        id: nanoid(),
        href: "https://www.facebook.com/chibuike.mba.94",
    },
    {
        social: <FaGithubSquare />,
        id: nanoid(),
        href: "https://github.com/chibuike-vm/",
    },
    {
        social: <FaLinkedin />,
        id: nanoid(),
        href: "http://www.linkedin.com/in/chibuike-mba-427323177",
    },
    {
        social: <FaTwitter />,
        id: nanoid(),
        href: "https://x.com/dev_chibuike?t=AlB4tSKyhag1nA5i3Ilqhg&s=09",
    },
];
