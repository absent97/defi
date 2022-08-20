import "./subscribe.css";

export const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="container">
        <h2>Join our DeFi Community</h2>
        <form
          method="POST"
          action="https://getform.io/f/67894191-f382-43ca-a364-f1275c46269d"
        >
          <div className="form-container display-col">
            <input type="text" name="name" placeholder="Enter your name" />
          </div>
          <div className="form-container display-col">
            <input type="email" name="email" placeholder="Enter your email" />
            <button className="btn">Sign Up</button>
          </div>
          <div className="form-container">
            <input type="checkbox" />
            <p>Yes, I agree to receive email communications from DeFi</p>
          </div>
        </form>
      </div>
    </div>
  );
};
