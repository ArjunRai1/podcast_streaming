import "./defaultstyle.css";
import { Link } from "react-router-dom";
function DefaultLanding() {
  return (
    <div>
      <section className="background firstsection">
        <div className="box-main">
          <div className="firsthalf">
            <p className="text-big">Podcasts for Growth and Development</p>
            <p className="small-text">
              Observe your surroundings and become a better person. Enhance your business and improve personal relationships with those around you.
            </p>
            <div className="buttons">
              <Link to="/user-login">
                <button className="btn">Listen Now</button>
              </Link>
            </div>
          </div>
          <div className="secondhalf">
            <img src="/pexels-wallace-chuck-3587478.jpg" alt="bg" />
            <img src="/pexels-damian-scarlassa-12564395.jpg" />
            <img src="/pexels-los-muertos-crew-7586482.jpg" />
            <img src="/pexels-cottonbro-studio-6883810.jpg" />
          </div>
        </div>
      </section>

      <h1 className="tex">Top Podcast Categories</h1>

      <div className="favorite-categories-container">
        <div className="category">
          <img src="/q11.jpg" alt="Category 1" className="imgfluid" />

        </div>
        <div className="category">
          <img src="/q13.jpg" alt="Category 2" className="imgfluid" />

        </div>
        <div className="category">
          <img src="/q14.jpg" alt="Category 3" className="imgfluid" />

        </div>
      </div>
    </div>
  );
}

export default DefaultLanding;
