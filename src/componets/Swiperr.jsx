import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import "swiper/css/navigation";

const Swiperr = ({ arr }) => {
  return (
    <>
      <CardsContainer>
        <Swiper
          slidesPerView={7}
          spaceBetween={30}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {arr.map((item) => {
            const { id, url } = item;
            return (
              <SwiperSlide
                className="swiper-slide swiper-width active"
                key={id}
              >
                <a href="/">
                  <img src={url} className="card-img-top" alt="..." />
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </CardsContainer>
    </>
  );
};

const CardsContainer = styled.section`
  .cards-container {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    gap: 0.5rem;
  }

  .mySwiper {
    width: 95%;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card {
  }
  .swiper-slide img {
    display: block;
    object-fit: cover;
  }
`;

export default Swiperr;
