import "../styles.css";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Features from "./features";
import FeatureSection from "./features-2";
import Blog from "./blog";
import Section3 from "./section-3";
import Section4 from "./section-4";
import Section5 from "./section5";
import Section6 from "./section-6";
import Footer from "./footer";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Features />
      <FeatureSection />
      <Blog />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </div>
  );
}
