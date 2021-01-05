import React, { Component } from "react";
import "./Slider.css";
class Slider extends Component {
  render() {
    return (
      <div>
        <div className="fluid-container">
          <div className="row">
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1" />
            <div
              id="carouselExampleIndicators"
              className="carousel slide col-xl-10 col-lg-10 col-md-10 col-sm-10"
              data-ride="carousel"
              style={{ zIndex: 0 }}
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to={0}
                  className="active"
                  style={{ margin: 5 }}
                />
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to={1}
                  style={{ margin: 5 }}
                />
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to={2}
                  style={{ margin: 5 }}
                />
              </ol>
              <div className="carousel-inner" style={{ zIndex: -1 }}>
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    style={{ objectFit: "cover" }}
                    src={`${process.env.PUBLIC_URL}/image/carousel-slide-1.jpg`}
                    alt="First slide"
                  />
                  <div className="infor" style={{ zIndex: 3 }}>
                    <h5 className="tag-name">#Collection Sport 2020</h5>
                    <h2 className="title">Cool Sport Shoes For Men!</h2>
                    <a href="https://www.facebook.com/">
                      <button>Buy now</button>
                    </a>
                  </div>
                </div>
                <div className="carousel-item position-relative">
                  <img
                    className="d-block w-100"
                    src={`${process.env.PUBLIC_URL}/image/carousel-slide-2.jpg`}
                    alt="Second slide"
                  />
                  <div className="infor" style={{ zIndex: 3 }}>
                    <h5 className="tag-name">#Collection Sport 2020</h5>
                    <h2 className="title">Cool Sport Shoes For Men!</h2>
                    <a href="https://www.facebook.com/">
                      <button>Buy now</button>
                    </a>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src={`${process.env.PUBLIC_URL}/image/carousel-slide-3.jpg`}
                    alt="Third slide"
                  />
                  <div className="infor" style={{ zIndex: 3 }}>
                    <h5 className="tag-name">#Collection Sport 2020</h5>
                    <h2 className="title">Cool Sport Shoes For Men!</h2>
                    <a href="https://www.facebook.com/">
                      <button>Buy now</button>
                    </a>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
            </div>
            <div className="col-xl-1 col-md-1 col-sm-1 col-lg-1" />
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
