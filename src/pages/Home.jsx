import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import AboutSection from '../components/About';
import Works from '../components/Works';
import Services from '../components/Services';

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <AboutSection />
      <Works />
      <Services />
    </main>
  );
}
