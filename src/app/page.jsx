import {Button} from "@/components/Button/Button";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import WorkWidget from "@/components/WorkWidget/WorkWidget";
import SkillsWidget from "@/components/SkillsWidget/SkillsWidget";
import SignupWidget from "@/components/SignupWidget/SignupWidget";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import IntroCard from "@/components/IntroCard/IntroCard";


export const metadata = {
  title: 'Portfolio - Home',
  description: 'Home page of my portfolio.',
}

//Links for Footer
const links = [
  {
    title: 'Home',
    url: '/home',
  },
  {
    title: 'About',
    url: '/about',
  },
  {
    title: 'Projects',
    url: '/projects',
  },
  {
    title: 'Uses',
    url: '/uses',
  },
];

//WorkWidget component needed Array
const experiences = [
  {
    logo: '/slack.png',
    organization: 'Slack',
    jobTitle: 'Software Engineer',
    startYear: 2016,
    endYear: null,
  },
  {
    logo: '/spotify.png',
    organization: 'Spotify',
    jobTitle: 'Software Engineer',
    startYear: 2014,
    endYear: 2015,
  },
  {
    logo: '/audible.png',
    organization: 'Audible',
    jobTitle: 'Software Engineer',
    startYear: 2012,
    endYear: 2013,
  },
  {
    logo: '/microsoft.png',
    organization: 'Microsoft',
    jobTitle: 'Software Engineer',
    startYear: 2010,
    endYear: 2011,
  },
];

//SkillsWidget component needed Array
const skills = [
  { name: 'HTML', proficiency: 60, icon: 'html5.png' },
  { name: 'CSS', proficiency: 50, icon: 'css3.png' },
  { name: 'JavaScript', proficiency: 75, icon: 'javascript.png' },
];

//Project Cards needed Array
const articles = [
  {
    date: 'Nov 15, 2021',
    title: 'Everything you need to know about React',
    content:
      'The ability to build stuff in React is one of the hottest skills to have today in software engineering. There is a lot of demand for React developers among startups as well as MNCs.',
    link: 'https://medium.com/the-research-nest/everything-you-need-to-know-about-react-ab24da4275ea',
  },
  {
    date: 'Sep 2, 2020',
    title: 'The Missing Introduction to React',
    content:
      'React is the world’s most popular JavaScript framework, but it’s not cool because it’s popular. It’s popular because it’s cool. Most React introductions jump right into showing you examples of how to use React, and skip the “why”.',
    link: 'https://medium.com/javascript-scene/the-missing-introduction-to-react-62837cb2fd76',
  },
];


export default function Home() {
  return (
    <div className="body">
      <header>
        <Navbar
          options={[
            {path: '/', label: 'Home'},
            {path: '/about', label: 'About'},
            {path: '/projects', label: 'Projects'},
            {path: '/uses', label: 'Uses'},
          ]}
        />
        <ThemeSwitcher />
      </header>
      <main>
        <div className="main-container">
          <section className="intro">
            <IntroCard
              name={'Software Engineer, Father, and Believer'}
              logo={'mrbean.png'}
              content={'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..'}
            />
          </section>
          <section className="articles-widgets-container">
            <section className="articles-container">
            {articles.map((article, index) => (
              <ArticleCard
                key={index}
                date={article.date}
                title={article.title}
                content={article.content}
                link={article.link}
              />
            ))}
            </section>
            <section className="widgets-container">
              <SignupWidget
                title={'Stay up to date'}
                content={'Get notified when I publish something new, and unsubscribe at any time.'}
              />
              <WorkWidget
                title={'Work'}
                content={'My work experience.'}
                experiences={experiences}
              />
              <SkillsWidget
                title="My Skills"
                content="Here are my skills:"
                skills={skills}
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
