import "./categories.scss";
import categoriesData from "./categories.Data";
const Categories = () => {
  return (
    <div className="Categories">
      <div className="Categories-top">
        <h1>Browse Categories</h1>
      </div>
      <div className="Categories-bottom">
        <ul>
          {categoriesData.map((category) => {
            const { id, title, icon, background } = category;
            return (
              <li key={id}>
                <div
                  className="Top"
                  style={{
                    background: `url(${background})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="Icon">
                    <img src={icon} alt={title} />
                  </div>
                </div>
                <div className="Bottom">{title}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Categories;
