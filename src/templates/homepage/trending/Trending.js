import "./trending.scss";
import trendData from "./trendData";

const Trending = () => {
  return (
    <div className="Trending">
      <div className="Trend-title">
        <h1>Trending Collection</h1>
        <h3>Checkout our weekly updated trending collection.</h3>
      </div>
      <div className="Trend-info">
        {trendData.map((data) => {
          const { id, img, name, title } = data;
          return (
            <div className="Info-item" key={id}>
              <div className="Item-top">
                <img src={img} alt="name" height="100%" width="100%" />
              </div>
              <div className="Item-mid">
                <ul>
                  <li>
                    <img src={img} alt="name" width="100%" />
                  </li>
                  <li>
                    <img src={img} alt="name" width="100%" />
                  </li>
                  <li>1025+</li>
                </ul>
              </div>
              <div className="Item-bottom">
                <div className="Bottom-title">{title}</div>
                <div className="Bottom-info">
                  <img src={img} alt="name" height="25px" /> {name}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
