import "./subscribe.scss";
import img from "./images/mainn.webp";
import icon from "./images/envelope.png";

const Subscribe = () => {
  return (
    <div className="Subscribe">
      <div className="Sub-container">
        <div className="Sub-img">
          <img src={img} alt="img" height="100%" width="100%" />
        </div>
        <div className="Sub-info">
          <p>Join our weekly digest</p>
          <p>Get exclusive promotions & updates straight to your inbox.</p>
          <p>
            <input type="email" placeholder="Enter your email here" />
            <button>
              <img src={icon} alt="icon" />
              Subscribe
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
