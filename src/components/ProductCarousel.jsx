import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { Carousel, Image } from "react-bootstrap";
import Loader from "./Loader";
import Message from "./Message";
import { listTopProducts } from "../actions/productActions";
//Slider
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// swiper bundle styles
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const ProductCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    // <Carousel pause="hover" className="bg-dark">
    //   {products.map((product) => (
    //     <Carousel.Item key={product._id} className="carousel-item">
    //       <Link to={`/product/${product._id}`}>
    //         <Image
    //           src={product.image}
    //           alt={product.name}
    //           fluid
    //           // className="d-block w-100"
    //         />
    //         <Carousel.Caption className="carousel-caption">
    //           <h2>
    //             {product.name} ({product.price})
    //           </h2>
    //         </Carousel.Caption>
    //       </Link>
    //     </Carousel.Item>
    //   ))}
    // </Carousel>
    <Swiper slidesPerView={1} pagination={{ clickable: true }}>
      {products.map((product) => (
        <SwiperSlide
          key={product._id}
          onClick={() => navigate(`/product/${product._id}`)}
        >
          <div
            style={{
              background: `url(${product.image}) center no-repeat`,
              backgroundSize: "cover",
            }}
            className="swiperSlideDiv"
          >
            <p className="swiperSlideText">
              {" "}
              {product.name} (${product.price}){" "}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductCarousel;
