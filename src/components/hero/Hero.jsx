import Mainvideo from "../../assets/video.mp4";

import "./hero.css";

export const Hero = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={Mainvideo} type="video/mp4" />
      </video>
      <div className="hero-text">
        <h1>Decentralized</h1>
        <h1>
          <span className="blue">Trading</span> Protocol
        </h1>
        <p>
          Guranteed liquidity trading for millions of users and top Ethereum
          applications
        </p>
        <div className="btn-group">
          <button className="btn">Use Defi</button>
          <button className="btn btn-outline">Documentation</button>
          <button className="btn btn-outline">FAQ</button>
        </div>
      </div>
      <div className="bottom-text">
        <h2>Total Volume Secured: $85,231,459,538,692</h2>
      </div>
    </div>
  );
};
