import { Button } from "@/components/Button/Button";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import AboutMe from "@/components/AboutMe/AboutMe";
import SocialLinks from "@/components/SocialLinks/SocialLinks";
import MenuLink from "@/components/MenuLink/MenuLink";

export const metadata = {
  title: "Portfolio - About",
  description: "The about page of my portfolio.",
};

//Links for Footer
const links = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Uses",
    url: "/uses",
  },
];

const socialLinks = [
  {
    name: "X",
    link: "#",
    imageSrc: "x.png",
  },
  {
    name: "Github",
    link: "#",
    imageSrc: "github.png",
  },
  {
    name: "Linkedin",
    link: "#",
    imageSrc: "linkedIn.png",
  },
];

export default function About() {
  return (
    <div className="body">
      <header>
        <Navbar
          options={[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/projects", label: "Projects" },
            { path: "/uses", label: "Uses" },
          ]}
        />
        <ThemeSwitcher />
      </header>
      <main>
        <div className="main-container">
          <section className="left-right-container">
            <section className="left-container">
              <AboutMe
                name={
                  'I’m Juan Palomeque.   Student | Future Software Engineer | Lifelong Learner'
                }
                content1={
                  "As a future software engineer currently in school, my journey is marked by a fervent dedication to honing my craft. Possessing a keen analytical mind, I thrive on unraveling complex problems and architecting elegant solutions. Whether it's dissecting algorithms or debugging code, I approach each challenge with tenacity and a hunger for knowledge..."
                }
                content2={
                  "In the classroom, I eagerly immerse myself in the intricacies of various coding languages and frameworks. From mastering the nuances of Java to exploring the versatility of JavaScript, I embrace each opportunity to expand my technical repertoire. Through hands-on projects and assignments, I refine my skills, striving not only for proficiency but also for creativity in my implementations..."
                }
                content3={
                  "Beyond the confines of academia, I am driven by a relentless curiosity to explore the ever-evolving landscape of software engineering. I avidly consume industry news, keeping abreast of emerging technologies and best practices. Whether it's attending hackathons or contributing to open-source projects, I seize every chance to apply my knowledge in real-world scenarios and collaborate with like-minded peers..."
                }
                content4={
                  "Looking to the future, I envision myself as a catalyst for innovation, leveraging my analytical prowess and passion for problem-solving to engineer transformative solutions. With each line of code I write, I am not only shaping my career but also contributing to the advancement of technology and society as a whole.."
                }
              />
            </section>
            <section className="right-image-container">
              <div className="image-container">
                <img src="Me.png" alt="Me" />
              </div>
            </section>
            <section className="right-socials-container">
              <SocialLinks socialLinks={socialLinks} />
              <MenuLink
                email="jup017@ensign.edu"
                imageSrc="email.png"
                link="#"
              />
            </section>
          </section>
        </div>
      </main>
      <footer>
        <Footer links={links} />
      </footer>
    </div>
  );
}
