import Hero from "./UI-Components/index/Hero/page";
import AboutMe from "./UI-Components/index/AboutMe/page";
import Achievements from "./UI-Components/index/Achivements/page";
import PopularTags from "./UI-Components/index/PopularTags/page";
export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Achievements/>
      <PopularTags/>
    </>
  );
}
