import React from "react";

const Carousal = () => {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide  px-5 py-4 "
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="./img/Carousal1.png" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <a href="/Men">
            <img
              src="./img/Men/Carousal2.png"
              className="d-block w-100"
              alt="..."
            />
          </a>
        </div>
        <div className="carousel-item">
          <a href="/Women">
            <img
              src="./img/Women/Carousal3.png"
              className="d-block w-100"
              alt="..."
            />
          </a>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousal;
