import React from "react";

function SlideProduct() {
  return (
    <div>
      <h1>SlideProduct</h1>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://static.bigc.co.th/media/catalog/product/8/8/8851727001038.jpg" className="d-block w-25" alt="โปเต้" />
          </div>
          <div className="carousel-item">
            <img src="https://static.bigc.co.th/media/catalog/product/8/8/8851932230490.jpg" className="d-block w-25" alt="บรีส เอ็กเซล" />
          </div>
          <div className="carousel-item">
            <img src="https://static.bigc.co.th/media/catalog/product/8/8/8850250000365_5.jpg" className="d-block w-25" alt="กาแฟ เบอร์ดี้" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default SlideProduct;
