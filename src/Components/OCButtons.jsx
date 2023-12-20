import React from "react";

function OCButtons() {
  return (
    <div>
      <a href="/menu" className="text-decoration-none " type="button">
        <button className="btn btn-danger  px-5 py-2  d-inline  justify-content-center align-items-center  ">
          Order Food
        </button>
      </a>

      <a href="/contact" className="text-decoration-none " type="button">
        <button className="btn btn-outline-danger px-5 py-2 m-3 ">
          Contact Us
        </button>
      </a>
    </div>
  );
}

export default OCButtons;
