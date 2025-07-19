import careersImg from "../../../assets/about_us/careers.jpg";
import AboutCardsSection from "./AboutCardsSection";

const aboutCards = [
  {
    title: "Why Join Us",
    smallDesc: "We strive to lead sustainable aquaculture practices in India, focusing on innovation, education, and community empowerment. We strive to lead sustainable aquaculture practices in India,",
    largeDesc: "We are always looking for passionate individuals to join our mission. Discover roles in research, operations, and more.",
    img: careersImg
  },
  {
    title: "Current Openings",
    smallDesc: "To be a global leader in responsible aquaculture, enriching livelihoods while protecting aquatic ecosystems.. We strive to lead sustainable aquaculture practices in India,",
    largeDesc: "Uday Aqua offers training, mentorship, and growth opportunities for all employees.",
  },{
    title : "Internship Opportunities",
    smallDesc: "To be a global leader in responsible aquaculture, enriching livelihoods while protecting aquatic ecosystems.. We strive to lead sustainable aquaculture practices in India,",
    largeDesc: "Uday Aqua offers training, mentorship, and growth opportunities for all employees.",
  }
];

const Careers = () => {
  return (
    <AboutCardsSection
      headerTitle="Careers"
      headerSubtitle="Grow With Uday Aqua"
      headerImg={careersImg}
      cards={aboutCards}
    />
  );
};
export default Careers; 