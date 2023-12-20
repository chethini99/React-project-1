import React from "react";
import "./Menu.css";
import p1 from "../assets/1.png";
import p2 from "../assets/2.png";
import p3 from "../assets/3.png";
import p4 from "../assets/4.png";
import p5 from "../assets/5.png";
import p6 from "../assets/6.png";
import p7 from "../assets/7.png";
import p8 from "../assets/8.png";

function Menu() {
  return (
    <div>
      <div class="container  mt-5">
        <div class="row mb-5  ">
          <div class="col-lg-10 ">
            <h3
              class="display-5 fw-bold  text-center 
              menu"
            >
              Our Menu
            </h3>
          </div>

          <hr class="bg-black pt-1 mt-2" />
        </div>
      </div>
      <div class="container">
        <div class="product-wrapper">
          <div class="row text-black   gy-5 py-3">
            {/* image 1 */}
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card shadow">
                <div class="product-imgs text-center">
                  <img
                    src={p1}
                    alt=""
                    class="card-img-top product-img img-fluid "
                  />
                  <div class="card-img-overlay iconsi py-5"></div>
                </div>
                <div class="card-body text-center">
                  <h5 class="card-title m-a">Garlic Chicken</h5>

                  <div class="icon-imgs m-2">
                    <span>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i class="fa-regular fa-star-half-stroke"></i>
                    </span>
                  </div>
                  <div
                    className="
                  d-flex "
                  >
                    <p className="text-center para">$19.99</p>

                    <button className="btn btn-danger   ms-auto">
                      <i class="fa fa-cart-plus" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* image 2 */}
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card shadow">
                <div class="product-imgs text-center">
                  <img
                    src={p2}
                    alt=""
                    class="card-img-top product-img  img-fluid"
                  />
                  <div class="card-img-overlay iconsi py-5"></div>
                </div>
                <div class="card-body text-center">
                  <h5 class="card-title m-a">Garlic Chicken</h5>

                  <div class="icon-imgs m-2">
                    <span>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i class="fa-regular fa-star-half-stroke"></i>
                    </span>
                  </div>
                  <div
                    className="
                  d-flex "
                  >
                    <p className="text-center para ">$19.99</p>

                    <button className="btn btn-danger   ms-auto">
                      <i class="fa fa-cart-plus" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* image 3 */}
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card shadow">
                <div class="product-imgs text-center">
                  <img
                    src={p3}
                    alt=""
                    class="card-img-top product-img  img-fluid"
                  />
                  <div class="card-img-overlay iconsi py-5"></div>
                </div>
                <div class="card-body text-center">
                  <h5 class="card-title m-a">Garlic Chicken</h5>

                  <div class="icon-imgs m-2">
                    <span>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i class="fa-regular fa-star-half-stroke"></i>
                    </span>
                  </div>
                  <div
                    className="
                  d-flex "
                  >
                    <p className="text-center para ">$19.99</p>

                    <button className="btn btn-danger   ms-auto">
                      <i class="fa fa-cart-plus" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* image 4 */}
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card shadow">
                <div class="product-imgs text-center">
                  <img
                    src={p4}
                    alt=""
                    class="card-img-top product-img  img-fluid"
                  />
                  <div class="card-img-overlay iconsi py-5"></div>
                </div>
                <div class="card-body text-center">
                  <h5 class="card-title m-a">Garlic Chicken</h5>

                  <div class="icon-imgs m-2">
                    <span>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i class="fa-regular fa-star-half-stroke"></i>
                    </span>
                  </div>
                  <div
                    className="
                  d-flex "
                  >
                    <p className="text-center para">$19.99</p>

                    <button className="btn btn-danger   ms-auto">
                      <i class="fa fa-cart-plus" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row text-black gy-5 py-3">
            {/* image 5*/}
            <div class="col-lg-3 col-md-6 col-sm-6 mb-5">
              <div class="card shadow">
                <div class="product-imgs text-center">
                  <img
                    src={p5}
                    alt=""
                    class="card-img-top product-img  img-fluid"
                  />
                  <div class="card-img-overlay iconsi py-5"></div>
                </div>
                <div class="card-body text-center">
                  <h5 class="card-title m-a">Garlic Chicken</h5>

                  <div class="icon-imgs m-2">
                    <span>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i class="fa-regular fa-star-half-stroke"></i>
                    </span>
                  </div>
                  <div
                    className="
                  d-flex "
                  >
                    <p className="text-center para ">$19.99</p>

                    <button className="btn btn-danger   ms-auto">
                      <i class="fa fa-cart-plus" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* image 6*/}
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card shadow">
                <div class="product-imgs text-center">
                  <img
                    src={p6}
                    alt=""
                    class="card-img-top product-img  img-fluid"
                  />
                  <div class="card-img-overlay iconsi py-5"></div>
                </div>
                <div class="card-body text-center">
                  <h5 class="card-title m-a">Garlic Chicken</h5>

                  <div class="icon-imgs m-2">
                    <span>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i class="fa-regular fa-star-half-stroke"></i>
                    </span>
                  </div>
                  <div
                    className="
                  d-flex "
                  >
                    <p className="text-center para">$19.99</p>

                    <button className="btn btn-danger   ms-auto">
                      <i class="fa fa-cart-plus" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* image 7 */}
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card shadow">
                <div class="product-imgs text-center">
                  <img
                    src={p7}
                    alt=""
                    class="card-img-top product-img  img-fluid"
                  />
                  <div class="card-img-overlay iconsi py-5"></div>
                </div>
                <div class="card-body text-center">
                  <h5 class="card-title m-a">Garlic Chicken</h5>

                  <div class="icon-imgs m-2">
                    <span>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i class="fa-regular fa-star-half-stroke"></i>
                    </span>
                  </div>
                  <div
                    className="
                  d-flex "
                  >
                    <p className="text-center para">$19.99</p>

                    <button className="btn btn-danger   ms-auto">
                      <i class="fa fa-cart-plus" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* image 8*/}
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card shadow">
                <div class="product-imgs text-center">
                  <img
                    src={p8}
                    alt=""
                    class="card-img-top product-img  img-fluid"
                  />
                  <div class="card-img-overlay iconsi py-5"></div>
                </div>
                <div class="card-body text-center">
                  <h5 class="card-title m-a">Garlic Chicken</h5>

                  <div class="icon-imgs m-2">
                    <span>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i class="fa-regular fa-star-half-stroke"></i>
                    </span>
                  </div>
                  <div
                    className="
                  d-flex "
                  >
                    <p className="text-center para">$19.99</p>

                    <button className="btn btn-danger   ms-auto">
                      <i class="fa fa-cart-plus" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
