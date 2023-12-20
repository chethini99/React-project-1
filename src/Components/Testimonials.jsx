import React from "react";
import pro1 from "../assets/pro1.jfif";
import pro2 from "../assets/pro2.jpg";
import pro3 from "../assets/pro3.webp";

function Testimonials() {
  return (
    <div>
      <div class="container">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            {/* Client 1 */}
            <div class="carousel-item active">
              <div class="block">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="user">
                      <div class="user-image">
                        <img src={pro1} alt="" />
                      </div>
                      <div class="info">
                        <h2 class="user-name">Mark Jones</h2>
                        <h4>Client</h4>
                        <p>
                          <span>
                            <i class="fa fa-quote-left p-2 "></i>
                          </span>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Neque ipsum iste excepturi totam sit voluptatum
                          explicabo voluptate? Magni ad dolor est deleniti
                          voluptatem consequuntur exercitationem reiciendis illo
                          aperiam rerum atque voluptates blanditiis culpa ea,
                          accusantium, itaque voluptate? Magni ad dolor est
                          deleniti voluptatem consequuntur exercitationem
                          reiciendis illo aperiam rerum atque voluptates
                          blanditiis culpa ea, accusantium, itaque
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Client 2 */}
            <div class="carousel-item ">
              <div class="block">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="user">
                      <div class="user-image">
                        <img src={pro2} alt="" />
                      </div>
                      <div class="info">
                        <h2 class="user-name">Jada Smith</h2>
                        <h4>Client</h4>
                        <p>
                          <span>
                            <i class="fa fa-quote-left p-2 "></i>
                          </span>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Neque ipsum iste excepturi totam sit voluptatum
                          explicabo voluptate? Magni ad dolor est deleniti
                          voluptatem consequuntur exercitationem reiciendis illo
                          aperiam rerum atque voluptates blanditiis culpa ea,
                          accusantium, itaque voluptate? Magni ad dolor est
                          deleniti voluptatem consequuntur exercitationem
                          reiciendis illo aperiam rerum atque voluptates
                          blanditiis culpa ea, accusantium, itaque
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Client 3*/}
            <div class="carousel-item ">
              <div class="block">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="user">
                      <div class="user-image">
                        <img src={pro3} alt="" />
                      </div>
                      <div class="info">
                        <h2 class="user-name">Selina Smith</h2>
                        <h4>Client</h4>
                        <p>
                          <span>
                            <i class="fa fa-quote-left p-2 "></i>
                          </span>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Neque ipsum iste excepturi totam sit voluptatum
                          explicabo voluptate? Magni ad dolor est deleniti
                          voluptatem consequuntur exercitationem reiciendis illo
                          aperiam rerum atque voluptates blanditiis culpa ea,
                          accusantium, itaque voluptate? Magni ad dolor est
                          deleniti voluptatem consequuntur exercitationem
                          reiciendis illo aperiam rerum atque voluptates
                          blanditiis culpa ea, accusantium, itaque
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
