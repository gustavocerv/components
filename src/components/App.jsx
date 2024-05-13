import Navbar from "./Navbar/Navbar.jsx";
import Footer from "./Footer/Footer.jsx";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher.jsx";
import SignupWidget from "./SignupWidget/SignupWidget.jsx";
import WorkWidget from "./WorkWidget/WorkWidget.jsx";
import SkillsWidget from "./SkillsWidget/SkillsWidget.jsx";
import ArticleCard from "./ArticleCard/ArticleCard.jsx";
import Dropdown from "./Dropdown/Dropdown.jsx";
import ProjectCard from "./ProjectCard/ProjectCard.jsx";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/uses", label: "Uses" },
];

const footerLinks = [
  { title: "Home", url: "/home" },
  { title: "About", url: "/about" },
  { title: "Projects", url: "/projects" },
  { title: "Uses", url: "/uses" },
];

const skills = [
  { name: "HTML", proficiency: 60, icon: "html5.png" },
  { name: "CSS", proficiency: 50, icon: "css3.png" },
  { name: "JavaScript", proficiency: 75, icon: "javascript.png" },
];

const articles = [
  {
    date: "Nov 15, 2021",
    title: "Everything you need to know about React",
    content:
      "The ability to build stuff in React is one of the hottest skills to have today in software engineering. There is a lot of demand for React developers among startups as well as MNCs.",
    link: "https://medium.com/the-research-nest/everything-you-need-to-know-about-react-ab24da4275ea",
  },
  {
    date: "Sep 2, 2020",
    title: "The Missing Introduction to React",
    content:
      "React is the world’s most popular JavaScript framework, but it’s not cool because it’s popular. It’s popular because it’s cool. Most React introductions jump right into showing you examples of how to use React, and skip the “why”.",
    link: "https://medium.com/javascript-scene/the-missing-introduction-to-react-62837cb2fd76",
  },
];

function App() {
  const handlePreview = () => {
    console.log("Preview");
  };

  const handleEdit = () => {
    console.log("Edit");
  };

  const handleClone = () => {
    console.log("Clone");
  };

  const handleDelete = () => {
    console.log("Delete");
  };

  return (
    <>
      <div className={"page"}>
        <Navbar options={navLinks} />
        <ThemeSwitcher />
        <header>{/* Add your header content here if needed */}</header>
        <main>
          {/* Add your main content here */}
          <WorkWidget
            title={"Work"}
            content={"My work experience."}
            experiences={[
              {
                logo: "/slack.png",
                organization: "Slack",
                jobTitle: "Software Engineer",
                startYear: 2016,
                endYear: null,
              },
              {
                logo: "/spotify.png",
                organization: "Spotify",
                jobTitle: "Software Engineer",
                startYear: 2014,
                endYear: 2015,
              },
              {
                logo: "/audible.png",
                organization: "Audible",
                jobTitle: "Software Engineer",
                startYear: 2012,
                endYear: 2013,
              },
              {
                logo: "/microsoft.png",
                organization: "Microsoft",
                jobTitle: "Software Engineer",
                startYear: 2010,
                endYear: 2011,
              },
            ]}
          />
          <SkillsWidget
            title={"Skills"}
            content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi."}
            skills={skills}
          />
          <div className={"articles"}>
            {articles.map((article, index) => (
              <ArticleCard
                key={index}
                date={article.date}
                title={article.title}
                content={article.content}
                link={article.link}
              />
            ))}
          </div>
          {/* Integrate Dropdown component here */}
          <Dropdown onPreview={handlePreview} onEdit={handleEdit} onClone={handleClone} onDelete={handleDelete} />
          {/* Add ProjectCard component */}
          <ProjectCard
            name={"Sam O"}
            logo={"/female.png"}
            content={
              "Working with the Product Team to discover strong solutions for a digital product to support hourly-based external recruiting services. Our platform is built on top of firebase technologies, including Firestore, Cloud Functions (NodeJS + Typescript), Sveltekit, and Typesense."
            }
            link={"https://www.forbes.com/power-women/list/"}
          />
        </main>
        <SignupWidget
          title={"Stay up to date"}
          content={"Get notified when I publish something new, and unsubscribe at any time."}
        />
        <Footer links={footerLinks} />
      </div>
    </>
  );
}

export default App;
