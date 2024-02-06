import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Slider(props) {
  const { student } = props;

  useEffect(() => {
    AOS.init();
  }, []);

  const getNumber = (dep) => {
    return student.filter((el) => el.department === dep).length;
  };

  return (
    <section id="hero" className="hero d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-between">
          <h1 className="col-12 col-12 text-center">Students CRUD APP</h1>
          <div data-aos="flip-left" className="col-12">
            <div className="row mt-3 justify-content-center">
              <div className="col-lg-3 col-4 p-0">
                <div className="stats-item text-center w-100 h-100">
                  <span className="purecounter">
                    {" "}
                    {getNumber("Science and Mathematics")}{" "}
                  </span>
                  <p>Science and Mathematics</p>
                </div>
              </div>

              <div className="col-lg-3 col-3">
                <div className="stats-item text-center w-100 h-100">
                  <span className="purecounter">
                    {getNumber("Arts and Creative Studies")}
                  </span>
                  <p>Arts and Creative Studies</p>
                </div>
              </div>
              <div className="col-lg-3 col-3">
                <div className="stats-item text-center w-100 h-100">
                  <span className="purecounter">
                    {getNumber("Social Sciences")}
                  </span>
                  <p>Social Sciences</p>
                </div>
              </div>

              <div className="col-lg-3 col-3">
                <div className="stats-item text-center w-100 h-100">
                  <span className="purecounter">
                    {getNumber("Physical Education and Sports")}
                  </span>
                  <p>Physical Education and Sports</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
