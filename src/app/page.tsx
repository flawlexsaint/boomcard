import { Fragment } from "react";
import {
  Navbar,
  Footer,
  Faqs,
  GetStarted,
  Services,
  Hero,
} from "./_fragments";

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Services />
      <Faqs />
      <GetStarted />
      <Footer />
    </Fragment>
  );
}
