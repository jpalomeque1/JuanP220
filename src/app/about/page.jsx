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
                  'I’m Mr. Bean. I live in your heart. I make you laugh so hard, I’m considering adding "Comedian" to my resume!'
                }
                content1={
                  "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.."
                }
                content2={
                  "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.."
                }
                content3={
                  "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.."
                }
                content4={
                  "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.."
                }
              />
            </section>
            <section className="right-image-container">
              <div className="image-container">
                <img src="mrbean.png" alt="Mr. Bean" />
              </div>
            </section>
            <section className="right-socials-container">
              <SocialLinks socialLinks={socialLinks} />
              <MenuLink
                email="mrbean@gmail.com"
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
