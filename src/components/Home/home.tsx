import AsSeen from "../AsSeen/as-seen-on";
import Hero from "../Hero/hero";
import Lead from "../Lead/lead-the-market";
import Love from "../Love/love-in-every";
import News from "../News/news";
import Testimonials from "../Testimonials/testimonials";
import Nvidia from "../Nvidia/nvidia";
import Join from "../Join/join";
import Footer from "../Footer/footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Nvidia />
      <AsSeen />
      <Lead />
      <Love />
      <Testimonials />
      <News />
      <Join />
      <Footer />
    </div>
  );
};

export default Home;
