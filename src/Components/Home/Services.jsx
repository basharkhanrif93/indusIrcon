import "./Home.css";
import CardData from "./ServicesData";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div className="card_section">
        <div className="container">
          <h1 className="my-3 service_text">Main Services</h1>
          <div className="row">
            {CardData.map((val) => {
              return (
                <div className="col-lg-4 my-3 col-md-4 col-12" key={val.id}>
                  <Link to="/Services" className="Nav_link">
                    <div className="wrapper">
                      <div className="card">
                        <img className="img-responsive" src={val.images} />
                        <div className="info">
                          <div className="card_icons">
                            {val.icons}
                          </div>
                          <h1>{val.Title}</h1>
                          <p>{val.discription}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
