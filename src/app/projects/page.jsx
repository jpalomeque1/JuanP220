import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import AboutMe from "@/components/AboutMe/AboutMe";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import React from "react";
import ProjectPageIntro from "@/components/ProjectPageIntro/ProjectPageIntro"; // Added React import

export const metadata = {
  title: "Portfolio - Projects",
  description: "The projects page of my portfolio.",
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

export default function Projects() {
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
          <section className="intro">
            <ProjectPageIntro
              name={"Things I look forward to working on"}
              content={
                "Once I graduate, I eagerly anticipate delving into projects that align with both my professional aspirations and personal interests. Specifically, I am excited about the prospect of merging my passion for shooting, camping, and golf with my expertise in web development. This intersection presents a unique opportunity to not only contribute to the field of software engineering but also to indulge in activities that bring me joy and fulfillment. By immersing myself in projects that cater to these hobbies, I envision a holistic approach to my work, where creativity and innovation thrive alongside technical proficiency. Through these endeavors, I aim to cultivate a fulfilling career that seamlessly integrates my professional skills with my personal passions, thereby enriching both my professional and personal life..."
              }
            />
          </section>
          <section className="project-card-container">
              <ProjectCard
                logo="logo.png"
                name="D.O.P.E."
                content="Data On Previous Engagement includes factors like bullet trajectory, wind conditions, and insights from previous engagements, meticulously recorded and analyzed to facilitate precise and effective long-range shots. "
                link="https://ensign.edu"
              />
              <ProjectCard
                logo="logo.png"
                name="Maintenance tracker "
                content="Keep Track of oyu cars maintenance and repairs"
                link="https://ensign.edu"
              />
              <ProjectCard
                logo="logo.png"
                name="Camp review"
                content="Create a community of campers to share their experience and review campsites"
                link="https://ensign.edu"
              />
              <ProjectCard
                logo="logo.png"
                name="Golf Buddy"
                content="Create a community of golfers to share their experience and review"
                link="https://www.ensign.edu/"
              />
              <ProjectCard
                logo="linkedIn.png"
                name="LinkedIn "
                content="Creating technology to empower civilians to explore space on their own terms"
                link="https://ensign.edu"
              />
              <ProjectCard
                logo="spotify.png"
                name="Spotify"
                content="Creating technology to empower civilians to explore space on their own terms"
                link="https://www.ensign.edu/"
              />
          </section>
        </div>
      </main>
      <footer>
        <Footer links={links} />
      </footer>
    </div>
  );
}
