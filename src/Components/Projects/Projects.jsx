import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./Projects.css";

function Projects(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

Projects.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {
        <section className="Projects_section">
          <Box
            className="container"
            sx={{ borderBottom: 1, borderColor: "divider" }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Show All" {...a11yProps(0)} />
              <Tab label="VRV" {...a11yProps(1)} />
              <Tab label="AC" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <Projects value={value} index={0}>
            {/* --Show All-- */}
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-lg-4 col-sm-6 col-12 my-3">
                  <div className="wrapper">
                    <div className="card project_card">
                      <img
                        className="img-responsive p-2"
                        src="http://airmaker.in/images/ahu/2.png"
                        alt="project images"
                      />
                      <div className="info">
                        <h1>AHU</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-6 col-12 my-3">
                  <div className="wrapper">
                    <div className="card project_card">
                      <img
                        className="img-responsive p-2"
                        src="	http://airmaker.in/images/cassette/1.png"
                        alt="project images"
                      />
                      <div className="info">
                        <h1>Cassette</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-6 col-12 my-3">
                  <div className="wrapper">
                    <div className="card project_card">
                      <img
                        className="img-responsive p-2"
                        src="	http://airmaker.in/images/ahu/1.png"
                        alt="project images"
                      />
                      <div className="info">
                        <h1>AHU</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-6 col-12 my-3">
                  <div className="wrapper">
                    <div className="card project_card">
                      <img
                        className="img-responsive p-2"
                        src="	http://airmaker.in/images/cassette/2.png"
                        alt="project images"
                      />
                      <div className="info">
                        <h1>Cassette</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-6 col-12 my-3">
                  <div className="wrapper">
                    <div className="card project_card">
                      <img
                        className="img-responsive p-2"
                        src="http://airmaker.in/images/chiller/1.png"
                        alt="project images"
                      />
                      <div className="info">
                        <h1>Chiller</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-6 col-12 my-3">
                  <div className="wrapper">
                    <div className="card project_card">
                      <img
                        className="img-responsive p-2"
                        src="	http://airmaker.in/images/coldroom/1.png"
                        alt="project images"
                      />
                      <div className="info">
                        <h1>Cold Room</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-6 col-12 my-3">
                  <div className="wrapper">
                    <div className="card project_card">
                      <img
                        className="img-responsive p-2"
                        src="http://airmaker.in/images/ceiling/1.png"
                        alt="project images"
                      />
                      <div className="info">
                        <h1>Fall Ceiling</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-6 col-12 my-3">
                  <div className="wrapper">
                    <div className="card project_card">
                      <img
                        className="img-responsive p-2"
                        src="	http://airmaker.in/images/vrv/2.png"
                        alt="project images"
                      />
                      <div className="info">
                        <h1>VRV</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Projects>
          <Projects value={value} index={1}>
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="wrapper">
                    <div className="card project_card">
                      <img
                        className="img-responsive p-2"
                        src="http://airmaker.in/images/ahu/2.png"
                        alt="project images"
                      />
                      <div className="info">
                        <h1>AHU</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="wrapper">
                    <div className="card project_card">
                      <img
                        className="img-responsive p-2"
                        src="http://airmaker.in/images/ahu/2.png"
                        alt="project images"
                      />
                      <div className="info">
                        <h1>AHU</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="wrapper">
                    <div className="card project_card">
                      <img
                        className="img-responsive p-2"
                        src="http://airmaker.in/images/ahu/2.png"
                        alt="project images"
                      />
                      <div className="info">
                        <h1>AHU</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Projects>
          <Projects value={value} index={2}>
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="wrapper">
                    <div className="card project_card">
                      <img
                        className="img-responsive p-2"
                        src="http://airmaker.in/images/ahu/2.png"
                        alt="project images"
                      />
                      <div className="info">
                        {/* <div className="card_icons">
                            {val.icons}
                          </div> */}
                        <h1>AHU</h1>
                        {/* <p>secribe your projevt wirh few words</p> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="wrapper">
                    <div className="card project_card">
                      <img
                        className="img-responsive p-2"
                        src="http://airmaker.in/images/ahu/2.png"
                        alt="project images"
                      />
                      <div className="info">
                        {/* <div className="card_icons">
                            {val.icons}
                          </div> */}
                        <h1>AHU</h1>
                        {/* <p>secribe your projevt wirh few words</p> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="wrapper">
                    <div className="card project_card">
                      <img
                        className="img-responsive p-2"
                        src="http://airmaker.in/images/ahu/2.png"
                        alt="project images"
                      />
                      <div className="info">
                        {/* <div className="card_icons">
                            {val.icons}
                          </div> */}
                        <h1>AHU</h1>
                        {/* <p>secribe your projevt wirh few words</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Projects>
        </section>
      }
    </>
  );
}
