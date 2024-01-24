import { useState, useEffect } from "react";
import "./auction.scss";
import eye from "./images/eye.png";
import avatar from "./images/avatar.png";

const Auction = () => {
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "October,31,2024";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Auction">
      <div className="Auction-info">
        <div className="Info-top">
          <div className="Top-left">
            <p>
              <img src={avatar} alt="avatar" /> Shroomie
            </p>
            <p>Magic Mashrooms</p>
          </div>
          <div className="Top-right">
            <div className="Countdown-container">
              <div className="Title">Auction ends in:</div>
              <div className="Countdown">
                <ul>
                  <li>
                    <span>{days}</span>
                    Days
                  </li>
                  <li>
                    <span>{hours}</span>
                    Hours
                  </li>
                  <li>
                    <span>{minutes}</span>
                    Minutes
                  </li>
                  <li>
                    <span>{seconds}</span>
                    Seconds
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="Info-bottom">
          <button>
            <img src={eye} alt="eye" />
            See NFT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auction;
