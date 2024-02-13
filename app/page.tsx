import { Header } from "../components/Header";
import { Landing_Card } from "../components/Landing_Card";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className='h-full w-full'>
      <Header/>
      <Landing_Card />
      <Projects />
      <About />
      <Skills />
      <br/><br/>
      <Contact/>
    </main>
  );
}
