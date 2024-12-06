import { Navbar, Footer, Faqs, GetStarted, Services, Hero } from "./_fragments";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Faqs />
      <GetStarted />
      <Footer />
    </div>
  );
}
