import React from "react";
import aboutPic from "../assets/headerRght.png";
function About() {
  return (
    <div className="container">
      <div className="row py-5">
        <div className="col-lg-6">
          <h1 className="py-3 text-center">About Us</h1>
          <p className="text-center py-3 ">
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna
          </p>
        </div>
        <div className="col-lg-6">
          <img src={aboutPic} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default About;
