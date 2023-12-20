import React from "react";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <div class="diet text-black  pt-5 pb-4">
      <div class="container text-md-left ">
        <div class="row text-md-left">
          <div class="col-lg-3 text-md-left py-3 ">
            <img src={logo} alt="" className="mb-4" />
            <p className="m-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
              inventore similique, dolorem debitis ipsum fugit. Totam dicta cum
              voluptates sit.
            </p>
          </div>
          <div class="col-lg-3 text-md-left">
            <h5 class="text-uppercase mb-4 fw-bold py-3 eicon">Quick Links</h5>
            <p>
              <a href="/" class="text-black nav-link m-2">
                Home
              </a>
            </p>
            <p>
              <a href="/" class="text-black nav-link m-2">
                Menu
              </a>
            </p>
            <p>
              <a href="/" class="text-black nav-link m-2">
                About
              </a>
            </p>
            <p>
              <a href="/" class="text-black nav-link m-2">
                Reviews
              </a>
            </p>
            <p>
              <a href="/" class="text-black nav-link m-2">
                Contact
              </a>
            </p>
          </div>

          <div class="col-lg-3 text-md-left">
            <h5 class="text-uppercase mb-4 fw-bold py-3 eicon">Follow Us</h5>
            <p>
              <a href="/" class="text-black nav-link">
                <i class="fa-brands fa-facebook-f ehead m-2"></i> Facebook
              </a>
            </p>
            <p>
              <a href="/" class="text-black nav-link">
                <i class="fa-brands fa-twitter ehead m-2"></i> Twitter
              </a>
            </p>
            <p>
              <a href="/" class="text-black nav-link">
                <i class="fa-brands fa-instagram ehead m-2"></i> Instergram
              </a>
            </p>
            <p>
              <a href="/" class="text-black nav-link">
                <i class="fa-brands fa-linkedin-in ehead m-2"></i> Linkedin
              </a>
            </p>
            <p>
              <a href="#" class="text-black nav-link">
                <i class="fa-brands fa-pinterest-p ehead m-2"></i> Pinterest
              </a>
            </p>
          </div>
          <div class="col-lg-3 text-md-left">
            <h5 class="text-uppercase mb-4 fw-bold py-3 eicon ">Newsletter</h5>
            <p>Subscribe For Latest Updates</p>

            <div class="form-group py-2">
              <input
                type="email"
                class="p-2 search"
                placeholder="Enter Your Email Here"
              />
            </div>
            <button type="submit" class="btn btn-danger mt-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
