import autoEmailerImage from "../assets/images/autoemailer.png";
import jobifyImage from "../assets/images/jobify.png";
import fraudCatchImage from "../assets/images/fraudcatch.png";
import travelMateImage from "../assets/images/travelmate.png";
import weatherNowImage from "../assets/images/weathernow.png";
import foodZoneImage from "../assets/images/foodzone.png";
import translateHubImage from "../assets/images/translatehub.png";
// import sitaraImage from "../assets/images/translatehub.png";
import haircutImage from "../assets/images/haircutshop.png";

const projectData = [
  {
    title: "Jobify - Job Portal (Ongoing)",
    image: jobifyImage,
    description:
      "Jobify is a job portal connecting job seekers and recruiters. Users can create profiles, upload resumes, and apply for jobs, while recruiters can post jobs, set candidate hiring status, and update it for candidates to view. So far, I’ve implemented user authentication, profile display, and CSS styling.",
    techStack: ["Node.js", "Express", "MongoDB", "React.js", "CSS"],
    github: "https://github.com/humsarika/jobify",
    demo: "",
  },
  {
    title: "Auto Emailer (Ongoing)",
    image: autoEmailerImage,
    description:
      "Auto Emailer is a Flask-based web app that automates sending personalized job application emails to HRs. It includes user authentication, file uploads via Google Cloud Storage, and ensures secure data handling. Files are deleted after emails are sent. Error handling and logging are implemented for smooth functionality.",
    techStack: ["Flask", "HTML", "CSS", "Python", "Google Cloud Storage"],
    github: "https://github.com/humsarika/Auto-emailer",
    demo: "auto-emailer-gamma.vercel.app",
  },
  {
    title: "Travel Mate",
    image: travelMateImage,
    description:
      "Travel Mate is an e-commerce website for travel bags and accessories, featuring secure user authentication, a shopping cart system, and product filtering based on product categories. I implemented user sessions for maintaining a logged-in state and preserving cart data.",
    techStack: ["MongoDB", "Express.js", "Node.js", "Templating engine - Handlebars", "CSS", "Figma"],
    github: "https://github.com/yourusername/travelmate",
    demo: "https://yourdemo.com/travelmate",
  },
  {
    title: "FraudCatch",
    image: fraudCatchImage,
    description:
      "FraudCatch is a credit card fraud detection model built using Random Forest Classifier, achieving 99.96% accuracy. I was responsible for developing and optimizing the ML model, using Python, Pandas, and Sklearn. The project showcases my ability to handle data, model building.",
    techStack: ["Python", "Pandas", "Sklearn", "Matplotlib", "Seaborn"],
    github: "",
    demo: "https://colab.research.google.com/drive/17bMXlyTphgjMuWx3Ir0z5ni-pcvnJEpk?usp=sharing",
  },
  {
    title: "Translate Hub",
    image: translateHubImage,
    description:
      "Translate Hub is a language translator app built using Neural Machine Translation (NMT) to support accurate translations across multiple languages. I was responsible for the frontend development, working with HTML and CSS. The project was a team effort, where we integrated Python and Flask for the backend.",
    techStack: ["Python", "NMT", "Flask", "HTML", "CSS"],
    github: "https://github.com/humsarika/language-translator-frontend",
    demo: "https://humsarika.github.io/language-translator-frontend/",
  },
  // {
  //   title: "Sitara - Jewelry E-Commerce",
  //   image: sitaraImage,
  //   description:
  //     "A jewelry website built with the MERN stack featuring product listings, authentication, and cart management.",
  //   techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Handlebars", "CSS"],
  //   github: "https://github.com/yourusername/sitara",
  //   demo: "https://yourdemo.com/sitara",
  // },
  {
    title: "Weather Now",
    image: weatherNowImage,
    description:
      "Weather Now is a real-time weather app that shows temperature, humidity, and conditions for any city using OpenWeatherMap and OpenCage APIs. I learned API integration, documentation, and software development practices. A great experience that built my teamwork and frontend skills.",
    techStack: ["HTML", "CSS", "JavaScript", "API"],
    github: "https://github.com/humsarika/Weather-Now",
    demo: "https://weather-now-sarika.vercel.app/",
  },
  {
    title: "Hair Cut Shop UI",
    image: haircutImage,
    description:
      "Hair Cut Shop UI is a sleek salon booking app design built in Figma. It features face shape detection to recommend hairstyles and offers a smooth, user-friendly booking flow. Shared on Figma Community, it has gained 187+ active users who’ve explored or reused the design for their own projects.",
    techStack: ["Figma"],
    github: "",
    demo: "https://www.figma.com/community/file/1288876133062923878"
  },
  {
    title: "FoodZone",
    image: foodZoneImage,
    description:
      "Food Zone is my first project where I built a food restaurant website using HTML and CSS. Through this project, I not only learned about frontend development but also gained experience in hosting my project and open-source contributions. It was a valuable step in my journey to becoming a web developer.",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/humsarika/FoodZone",
    demo: "https://humsarika.github.io/FoodZone/",
  }
];

export default projectData;
