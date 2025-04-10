import autoEmailerImage from "../assets/images/translatehub.png";
import jobifyImage from "../assets/images/translatehub.png";
import fraudCatchImage from "../assets/images/translatehub.png";
import travelMateImage from "../assets/images/travelmate.png";
import weatherNowImage from "../assets/images/weathernow.png";
import foodZoneImage from "../assets/images/foodzone.png";
import translateHubImage from "../assets/images/translatehub.png";
import sitaraImage from "../assets/images/translatehub.png";
import haircutImage from "../assets/images/translatehub.png";

const projectData = [
  {
    title: "Auto Emailer",
    image: autoEmailerImage,
    description:
      "A Flask-based tool to automate sending personalized job application emails. Includes user authentication, secure file upload, and future Stripe payment support.",
    techStack: ["Flask", "HTML", "CSS", "Python", "Google Cloud Storage"],
    github: "https://github.com/yourusername/auto-emailer",
    demo: "",
  },
  {
    title: "Jobify - Job Portal",
    image: jobifyImage,
    description:
      "A job portal built with Node.js and React. Includes user and recruiter auth, resume uploads, profile management, job filters, and premium job posts with Razorpay.",
    techStack: ["Node.js", "Express", "MongoDB", "React.js", "JWT", "CSS"],
    github: "https://github.com/yourusername/jobify",
    demo: "https://yourdemo.com/jobify",
  },
  {
    title: "Weather Now",
    image: weatherNowImage,
    description:
      "A real-time weather app showing temperature, humidity, and weather conditions for any city using a weather API.",
    techStack: ["HTML", "CSS", "JavaScript", "API"],
    github: "https://github.com/yourusername/weather-now",
    demo: "https://yourdemo.com/weather-now",
  },
  {
    title: "FoodZone",
    image: foodZoneImage,
    description:
      "An online food delivery app with cart functionality and menu filtering system.",
    techStack: [
      "MongoDB",
      "Express.js",
      "Node.js",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/yourusername/foodzone",
    demo: "https://yourdemo.com/foodzone",
  },
  {
    title: "FraudCatch",
    image: fraudCatchImage,
    description:
      "A credit card fraud detection model using Random Forest Classifier with 99.96% accuracy. Compared with SVM and visualized performance with graphs.",
    techStack: ["Python", "Pandas", "Sklearn", "Matplotlib", "Seaborn"],
    github: "https://github.com/yourusername/fraudcatch",
    demo: "",
  },
  {
    title: "Translate Hub",
    image: translateHubImage,
    description:
      "A language translator app built using neural machine translation to support multiple languages accurately.",
    techStack: ["Python", "TensorFlow", "Flask", "HTML", "CSS"],
    github: "https://github.com/yourusername/translatehub",
    demo: "",
  },
  {
    title: "Travel Mate",
    image: travelMateImage,
    description:
      "E-commerce site for travel accessories with secure user auth, cart system, product filtering, and session management.",
    techStack: ["MongoDB", "Express.js", "Node.js", "HTML", "CSS", "Figma"],
    github: "https://github.com/yourusername/travelmate",
    demo: "https://yourdemo.com/travelmate",
  },
  {
    title: "Sitara - Jewelry E-Commerce",
    image: sitaraImage,
    description:
      "A jewelry website built with the MERN stack featuring product listings, authentication, and cart management.",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "CSS"],
    github: "https://github.com/yourusername/sitara",
    demo: "https://yourdemo.com/sitara",
  },
  {
    title: "Hair Cut Shop UI",
    image: haircutImage,
    description:
      "A sleek salon booking platform UI design crafted on Figma with modern user-centric layouts.",
    techStack: ["Figma"],
    github: "",
    demo: "https://www.figma.com/file/yourfilelink",
  },
];

export default projectData;
