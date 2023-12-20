import React from "react";
import "../Pages/Home.css";
import curve from "../assets/curve.png";
import delivery from "../assets/delivery.png";
import thumbs from "../assets/thumbs.png";
import cook from "../assets/cook.png";
import diet from "../assets/diets.png";
import OCButtons from "../Components/OCButtons";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";
function Home() {
  return (
    <div>
      {/* header Image */}
      <div className="header py-5 ">
        <div className=" container py-2 my-3">
          <div className="row align-items-center g-5 text-black ">
            <div className=" col-lg-6 text-center text-sm-start">
              <h1 className="display-3 fw-bold mt-0">
                <span className="h-title">Achieve Optimal </span>
                With our Nutritious Meal Plans
              </h1>
              <p className="fs-5 fw-semibold py-3 mb-0">
                Discover a world of delicious salad at our online salad
                paradise.Salad meals are ready to eat in aminutes so save time
                energy
              </p>
              <OCButtons />
            </div>
          </div>
        </div>
      </div>
      {/* Delivery Feedbacks */}
      <div className="container">
        <div className="d-flex">
          <img src={curve} alt="" className="curve" />
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="box">
              <div className="boxContainer d-flex ">
                <div className="">
                  <img src={cook} alt="" className="img-fluid curve" />
                </div>
                <div className="w-100">
                  <h5>Delicious Food</h5>
                  <p className="text-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="box">
              <div className="boxContainer d-flex ">
                <div className="">
                  <img src={delivery} alt="" className="img-fluid curve" />
                </div>
                <div className="w-100">
                  <h5>Delivery</h5>
                  <p className="text-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="box">
              <div className="boxContainer d-flex ">
                <div className="">
                  <img src={thumbs} alt="" className="img-fluid curve" />
                </div>
                <div className="w-100">
                  <h5>
                    Feedback{" "}
                    <small className="ms-2 fw-normal ">
                      <i class="fa fa-star star me-2 " aria-hidden="true"></i>
                      4.8(14.5k)
                    </small>
                  </h5>
                  <p className="text-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Diet */}
      <div className="diet py-3">
        <div className="container">
          <div className="row py-3 ">
            <div className="col-lg-6 py-3 ">
              <img src={diet} alt="" className="img-fluid" />
            </div>
            <div className="col-lg-6 py-3 ">
              <h3 className="mb-4">
                Fitness goals with delectable, nutritous salad tailored for you
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. <br />
                <br /> veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est
                laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat."
              </p>
              <OCButtons />
            </div>
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <div className="py-5">
        <Testimonials />
      </div>
      <hr className="container border-2 shadow-sm py-3 " />
      {/* Call */}
      <div className="container">
        <div className="row  m-5">
          <div className="col-lg-4  ">
            <div className=" d-flex py-4">
              <div className="">
                <div className="eicon-area  ">
                  <i class="fa fa-map-marker eicon" aria-hidden="true"></i>
                </div>
              </div>
              <div className="w-100">
                <h5 className="ehead">Find Us</h5>
                <p className="text-secondary">
                  229 Stuart Ave Kalamazoo Michigan
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className=" d-flex py-4">
              <div className="">
                <div className="eicon-area">
                  <i class="fa fa-phone eicon" aria-hidden="true"></i>
                </div>
              </div>
              <div className="w-100">
                <h5 className="ehead">Call Us</h5>
                <p className="text-secondary">269-342-0230</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className=" d-flex py-4">
              <div className="">
                <div className="eicon-area">
                  <i class="fa fa-envelope eicon" aria-hidden="true"></i>
                </div>
              </div>
              <div className="w-100">
                <h5 className="ehead">Mail Us</h5>
                <p className="text-secondary">tunasalad@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="container border-2 shadow-sm  py-3 " />
    </div>
  );
}

export default Home;
