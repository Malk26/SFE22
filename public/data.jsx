import { CiMap } from "react-icons/ci";
import { FaImages, FaCreditCard } from "react-icons/fa";
import graphicDesignImg from "/src/assets/graphic-design.jpg";
import softwareImg from "/src/assets/software.jpg";
import webDevImg from "/src/assets/web-development.jpg";
// import photo1 from "/src/assets/photo1.jpg";
// import photo22 from "/src/assets/photo22.jpg";
// import photo3 from "/src/assets/photo3.jpg";
export const cardData = [
{
    id: 1,
    img: <CiMap />,
    title: "Books Library",
    description: "The gradual accumulation of information about atomic and small-scale behaviour...",
    color: "#E74040",
    bgColor: "#FFDCD1",
},
{
    id: 2,
    img: <FaImages />,
    title: "Market Analysis",
    description: "The gradual accumulation of information about atomic and small-scale behaviour...",
    color: "#2DC071",
    bgColor: "#B9EAA8",
},
{
    id: 3,
    img: <FaCreditCard />,
    title: "50+ online courses",
    description: "The gradual accumulation of information about atomic and small-scale behaviour...",
    color: "#23A6F0", // لون مقترح للثالث
    bgColor: "#B2E3FF",
}
];
export const coursesData = [
  {
    id: 1,
    img: graphicDesignImg,
    department: "Graphic Design",
    title: "UI & UX Design",
    rating: "4.7",
    description: "Unlock your creativity with our UI & UX course! Learn essential design principles, master industry-leading tools, and create stunning visuals to bring your ideas to life.",
    sales: "80",
    price: "$11.99",
    discount: "$4.99",
    duration: "22hr 30min",
    lessons: "64 Lessons",
  },
  {
    id: 2,
    img: softwareImg,
    department: "Software Development",
    title: "Project Design",
    rating: "4.8",
    description: "Learn to structure, organize, and execute projects effectively using professional tools and techniques.",
    sales: "160",
    price: "$15.99",
    discount: "$7.99",
    duration: "30hr 30min",
    lessons: "121 Lessons",
  },
  {
    id: 3,
    img: webDevImg,
    department: "Web development",
    title: "HTML & CSS",
    rating: "4.9",
    description: "Build the foundation of web development with our HTML & CSS course! Learn to create stunning, responsive websites from scratch with hands-on projects and practical skills.",
    sales: "288",
    price: "$10.99",
    discount: "$8.99",
    duration: "16hr 40min",
    lessons: "107 Lessons",
  },
];
export const ratingData = [
  {
    id: 1,
    stars: "⭐⭐⭐⭐⭐",
    img: "./photo1.jpg",
    description:"This course exceeded my expectations! The content was well-organized, the explanations were clear, and the hands-on projects helped me build real-world skills. Highly recommend it to anyone looking to learn!" ,
    name:"Gamal Mahmoud" ,
    jop:"Software Engineer" ,
  },
  {
    id: 2,
    stars: "⭐⭐⭐⭐⭐",
    img: "./photo22.jpg",
    description:"This course exceeded my expectations! The conterit was well-organized, the explanations were clear, and the hands-on projects helped me build real-world skills. Highly recommend it to anyone looking to learn",
    name:"Omar Mohamed" ,
    jop:"developer" ,
  },
  {
    id: 3,
    stars: "⭐⭐⭐⭐⭐",
    img: "./photo3.jpg",
    description:"This course exceeded my expectations! The content was well-organized, the explanations were clear, and the hands-on projects helped me build real-world skills. Highly recommend it to anyone looking to learn!" ,
    name:"Islam Tarek" ,
    jop:"Designer" ,
  },
];
