import AboutMe from "@/components/about";
import Certificates from "@/components/certificates";
import Footer from "@/components/footbar";
import HomePage from "@/components/home";
import Milestones from "@/components/milestone";
import Navbar from "@/components/navbar";
import Quote from "@/components/quote";
import Resume from "@/components/resume";
import MyServices from "@/components/services";
import Skills from "@/components/skills";
import MyWorks from "@/components/works";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <AboutMe />
      <MyServices />
      <Milestones />
      <Resume />
      <Skills />
      <Quote />
      <MyWorks />
      <Certificates />
      <Footer />
    </>
  );
}
