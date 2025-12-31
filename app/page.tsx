import dynamic from "next/dynamic";
import Index from "./UI-Components/index";

const AboutMe = dynamic(() => import("./UI-Components/index/AboutMe/page"), {
  loading: () => <div className="min-h-screen" />,
});
const Achievements = dynamic(
  () => import("./UI-Components/index/Achivements/page"),
  {
    loading: () => <div className="min-h-screen" />,
  }
);
const PopularTags = dynamic(
  () => import("./UI-Components/index/PopularTags/page"),
  {
    loading: () => <div className="min-h-screen" />,
  }
);

export default function Home() {
  return (
    <>
      <Index />
      <AboutMe />
      <Achievements />
      <PopularTags />
    </>
  );
}
