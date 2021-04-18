import React from "react";

function SlideProduct() {
  return (
    <div className="SlideProduct mx-auto">
      <div
        id="carouselExampleIndicators"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://static.bigc.co.th/media/catalog/product/8/8/8851727001038.jpg"
              className="d-flex align-items-center normal"
              alt="โปเต้"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://static.bigc.co.th/media/catalog/product/8/8/8851932230490.jpg"
              className="d-flex align-items-center normal"
              alt="บรีส เอ็กเซล"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://static.bigc.co.th/media/catalog/product/8/8/8850250000365_5.jpg"
              className="d-flex align-items-center normal"
              alt="กาแฟ เบอร์ดี้"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default SlideProduct;
