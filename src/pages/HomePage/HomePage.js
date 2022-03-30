import "./HomePage.scss";
import { Link } from "react-router-dom";
import { Component } from "react";
import { BASE_URL } from "../../utils/apiCall";

class HomePage extends Component {
  audio = new Audio(`${BASE_URL}audio/Mall.mp3`);

  componentDidMount() {
    this.audio.play();
    this.audio.volume = 0.005;
    this.audio.loop = true;
  }

  componentWillUnmount() {
    this.audio.pause();
  }

  render() {
    return (
      <main className="homepage">
        <h1 className="homepage__heading">Jojo's Adventure</h1>
        <div className="homepage__jojo"></div>
        <p>Tell Jojo what he should do!</p>
        <Link className="homepage__start" to="/story">
          <p className="homepage__start-button">START GAME</p>
          <p className="homepage__start-seriously">SERIOUSLY?</p>
        </Link>
        {/* <div className="homepage__authors">
          <p className="homepage__firm">The Sexy Web Development Firm</p>
          <p className="homepage__author">Ceci Martinez</p>
          <p className="homepage__author">Jek Iquin</p>
        </div> */}
      </main>
    );
  }
}

export default HomePage;
