import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";
import Row from "../../components/Row/Row";
import { requests, titles } from "../../requests";

import "./homepage.css";

const Homepage = () => {
  return (
    <div className="homescreen">
      <Header />
      <Banner />
      {titles.map((title) => (
        <Row key={title} title={title} url={requests[`fetch${title}`]} />
      ))}
    </div>
  );
};

export default Homepage;
