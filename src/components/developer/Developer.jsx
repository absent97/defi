import "./developer.css";

import Terminal from "../../assets/terminal.png";

export const Developer = () => {
  return (
    <div className="developers">
      <div className="container">
        <div className="left">
          <h2>Superpowers for DEFI developers</h2>
          <p>
            Cehckout the <span className="blue">documentation</span>,the{" "}
            <span className="blue">quick start</span> or a guide below to
            integrate your project with thousands of tokens and billions in
            liquidity.
          </p>
        </div>
        <div className="right">
          <div className="img-container">
            <img src={Terminal} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
