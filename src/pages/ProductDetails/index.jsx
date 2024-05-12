import { Button } from "@mui/material";

import { IoMdHome } from "react-icons/io";
import Slider from "react-slick";
import Rating from "@mui/material/Rating";

import { MdBrandingWatermark } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { IoIosColorPalette } from "react-icons/io";
import { LuFileSpreadsheet } from "react-icons/lu";
import { FaTag } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { RiStarSLine } from "react-icons/ri";
import { MdVerified } from "react-icons/md";
import { FaReply } from "react-icons/fa";

import UserImage from "./../../components/UserImage/index";
import { useRef } from "react";

const ProductDetails = () => {
  const productSliderBig = useRef();
  const productSliderSmall = useRef();

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  var settings2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };

  const goToSlide = (index) => {
    productSliderBig.current.slickGoTo(index);
    productSliderSmall.current.slickGoTo(index);
  };
  return (
    <>
      <div className="right-content w-100">
        <div className="d-flex align-items-center">
          <div className="productHead d-flex align-items-center">
            <h1>Product View</h1>
            <div className="ml-auto d-flex align-items-center justify-content-around">
              <div className="mr-2">
                <Button>
                  <IoMdHome className="home" />
                  Dashboard
                </Button>
              </div>

              <div>
                <span className="mt-0">/</span>
              </div>
              <div className="ml-2">
                <Button>Products</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="card productDetailsSection">
          <div className="row">
            <div className="col-md-5 ">
              <div className="sliderWrapper pt-3 pb-3 pl-4 pr-2">
                <h6 className="mb-4">Product Gallery</h6>
                <Slider
                  {...settings}
                  ref={productSliderBig}
                  className="sliderBig mb-2"
                >
                  <div className="item">
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
                      alt=""
                      className="w-100"
                    />
                  </div>

                  <div className="item">
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/02.webp"
                      alt=""
                      className="w-100"
                    />
                  </div>

                  <div className="item">
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/04.webp"
                      alt=""
                      className="w-100"
                    />
                  </div>

                  <div className="item">
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/04.webp"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/03.webp"
                      alt=""
                      className="w-100"
                    />
                  </div>
                </Slider>

                <Slider
                  {...settings2}
                  ref={productSliderSmall}
                  className="sliderSmall"
                >
                  <div className="item" onClick={() => goToSlide(1)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
                      alt=""
                      className="w-100"
                    />
                  </div>

                  <div className="item" onClick={() => goToSlide(2)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/02.webp"
                      alt=""
                      className="w-100"
                    />
                  </div>

                  <div className="item" onClick={() => goToSlide(3)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/04.webp"
                      alt=""
                      className="w-100"
                    />
                  </div>

                  <div className="item" onClick={() => goToSlide(4)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/04.webp"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="item" onClick={() => goToSlide(5)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/03.webp"
                      alt=""
                      className="w-100"
                    />
                  </div>
                </Slider>
              </div>
            </div>
            <div className="col-md-7">
              <div className="pt-3 pb-3 pl-4 pr-2">
                <h6 className="mb-4">Product Details</h6>
                <h4>
                  Formal suits for men wedding slim fit 3 piece dress business
                  party jacket
                </h4>

                <div className="productInfo mt-3">
                  <div className="row mb-3">
                    <div className="col-sm-3 d-flex align-items-center ">
                      <span className="icon">
                        <MdBrandingWatermark />
                      </span>
                      <span className="name">Brand</span>
                    </div>
                    <div className="col-sm-9">
                      : <span>Ecstasy</span>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-sm-3 d-flex align-items-center ">
                      <span className="icon">
                        <MdCategory />
                      </span>
                      <span className="name">Category</span>
                    </div>
                    <div className="col-sm-9">
                      : <span>Men</span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center ">
                      <span className="icon">
                        <IoMdSettings />
                      </span>
                      <span className="name">Tags</span>
                    </div>
                    <div className="col-sm-9">
                      :{" "}
                      <span>
                        <ul className="list list-inline tags sml">
                          <li className="list-inline-item">
                            <span>SUITE</span>
                          </li>
                          <li className="list-inline-item">
                            <span>SUITE</span>
                          </li>
                          <li className="list-inline-item">
                            <span>SUITE</span>
                          </li>
                          <li className="list-inline-item">
                            <span>SUITE</span>
                          </li>
                          <li className="list-inline-item">
                            <span>SUITE</span>
                          </li>
                        </ul>
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center ">
                      <span className="icon">
                        <IoIosColorPalette />
                      </span>
                      <span className="name">Color</span>
                    </div>
                    <div className="col-sm-9">
                      :{" "}
                      <span>
                        {" "}
                        <ul className="list list-inline tags sml">
                          <li className="list-inline-item">
                            <span>RED</span>
                          </li>
                          <li className="list-inline-item">
                            <span>Green</span>
                          </li>
                          <li className="list-inline-item">
                            <span>Blue</span>
                          </li>
                          <li className="list-inline-item">
                            <span>Yellow</span>
                          </li>
                          <li className="list-inline-item">
                            <span>Purple</span>
                          </li>
                        </ul>
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center ">
                      <span className="icon">
                        <LuFileSpreadsheet />
                      </span>
                      <span className="name">Size</span>
                    </div>
                    <div className="col-sm-9">
                      : <span>Ecstasy</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center ">
                      <span className="icon">
                        <FaTag />
                      </span>
                      <span className="name">Price</span>
                    </div>
                    <div className="col-sm-9">
                      : <span>Ecstasy</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center ">
                      <span className="icon">
                        <FaShoppingCart />
                      </span>
                      <span className="name">Stock</span>
                    </div>
                    <div className="col-sm-9">
                      : <span>Ecstasy</span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center ">
                      <span className="icon">
                        <RiStarSLine />
                      </span>
                      <span className="name">Review</span>
                    </div>
                    <div className="col-sm-9">
                      : <span>Ecstasy</span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center ">
                      <span className="icon">
                        <MdVerified />
                      </span>
                      <span className="name">Published</span>
                    </div>
                    <div className="col-sm-9">
                      : <span>Ecstasy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4">
            <h6 className="mt-4 mb-3">Product Description</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              reprehenderit repellendus expedita esse cupiditate quos doloremque
              rerum, corrupti ab illum est nihil, voluptate ex dignissimos! Sit
              voluptatem delectus nam, molestiae, repellendus ab sint quo
              aliquam debitis amet natus doloremque laudantium? Repudiandae,
              consequuntur, officiis quidem quo deleniti, autem non laudantium
              sequi error molestiae ducimus accusamus facere velit consectetur
              vero dolore natus nihil temporibus aspernatur quia consequatur?
              Consequuntur voluptate deserunt repellat tenetur debitis molestiae
              doloribus dicta. In rem illum dolorem atque ratione voluptates
              asperiores maxime doloremque laudantium magni neque ad quae quos
              quidem, quaerat rerum ducimus blanditiis reiciendis
            </p>

            <br />

            <h6 className="mt-4 mb-4">Rating</h6>
            <div className="ratingSection">
              <div className="ratingRow d-flex align-items-center">
                <span className="col1"> 5star</span>
                <div className="col2">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
                <span className="col3"> (22)</span>
              </div>

              <div className="ratingRow d-flex align-items-center">
                <span className="col1"> 4star</span>
                <div className="col2">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </div>
                <span className="col3"> (22)</span>
              </div>

              <div className="ratingRow d-flex align-items-center">
                <span className="col1"> 3star</span>
                <div className="col2">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "40%" }}
                    ></div>
                  </div>
                </div>
                <span className="col3"> (22)</span>
              </div>

              <div className="ratingRow d-flex align-items-center">
                <span className="col1"> 2star</span>
                <div className="col2">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "30%" }}
                    ></div>
                  </div>
                </div>
                <span className="col3"> (22)</span>
              </div>

              <div className="ratingRow d-flex align-items-center">
                <span className="col1"> 1star</span>
                <div className="col2">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "20%" }}
                    ></div>
                  </div>
                </div>
                <span className="col3"> (22)</span>
              </div>
            </div>

            <br />

            <h6 className="mt-4 mb-4">Customer_reviews</h6>

            <div className="reviewsSection">
              <div className="reviewsRow">
                <div className="row">
                  <div className="col-sm-7 d-flex">
                    <div className="d-flex  flex-column">
                      {" "}
                      <div className="userInfo d-flex align-items-center mb-3">
                        <UserImage
                          image={
                            "https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                          }
                          lg={true}
                        />
                        <div className="info pl-3">
                          <h6>Miron Mahmud</h6>
                          <span>25 minutes ago!</span>
                        </div>
                      </div>
                      <Rating
                        name="read-only"
                        value={4}
                        precision={0.5}
                        readOnly
                        color="#faaf00 !"
                      />
                    </div>
                  </div>

                  <div className="col-sm-5 d-flex align-items-center">
                    <div className="ml-auto">
                      <Button className="btn-blue btn-big btn-lg ">
                        <FaReply /> &nbsp; Reply
                      </Button>
                    </div>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis quo nostrum dolore fugiat ducimus labore debitis unde
                    autem recusandae? Eius harum tempora quis minima, adipisci
                    natus quod magni omnis quas.
                  </p>
                </div>
              </div>

              <div className="reviewsRow reply">
                <div className="row">
                  <div className="col-sm-7 d-flex">
                    <div className="d-flex  flex-column">
                      {" "}
                      <div className="userInfo d-flex align-items-center mb-3">
                        <UserImage
                          image={
                            "https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                          }
                          lg={true}
                        />
                        <div className="info pl-3">
                          <h6>Miron Mahmud</h6>
                          <span>25 minutes ago!</span>
                        </div>
                      </div>
                      <Rating
                        name="read-only"
                        value={4}
                        precision={0.5}
                        readOnly
                        color="#faaf00 !"
                      />
                    </div>
                  </div>

                  <div className="col-sm-5 d-flex align-items-center">
                    <div className="ml-auto">
                      <Button className="btn-blue btn-big btn-lg ">
                        <FaReply /> &nbsp; Reply
                      </Button>
                    </div>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis quo nostrum dolore fugiat ducimus labore debitis unde
                    autem recusandae? Eius harum tempora quis minima, adipisci
                    natus quod magni omnis quas.
                  </p>
                </div>
              </div>

              <div className="reviewsRow">
                <div className="row">
                  <div className="col-sm-7 d-flex">
                    <div className="d-flex  flex-column">
                      {" "}
                      <div className="userInfo d-flex align-items-center mb-3">
                        <UserImage
                          image={
                            "https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                          }
                          lg={true}
                        />
                        <div className="info pl-3">
                          <h6>Miron Mahmud</h6>
                          <span>25 minutes ago!</span>
                        </div>
                      </div>
                      <Rating
                        name="read-only"
                        value={4}
                        precision={0.5}
                        readOnly
                        color="#faaf00 !"
                      />
                    </div>
                  </div>

                  <div className="col-sm-5 d-flex align-items-center">
                    <div className="ml-auto">
                      <Button className="btn-blue btn-big btn-lg ">
                        <FaReply /> &nbsp; Reply
                      </Button>
                    </div>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis quo nostrum dolore fugiat ducimus labore debitis unde
                    autem recusandae? Eius harum tempora quis minima, adipisci
                    natus quod magni omnis quas.
                  </p>
                </div>
              </div>

              <div className="reviewsRow reply">
                <div className="row">
                  <div className="col-sm-7 d-flex">
                    <div className="d-flex  flex-column">
                      {" "}
                      <div className="userInfo d-flex align-items-center mb-3">
                        <UserImage
                          image={
                            "https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                          }
                          lg={true}
                        />
                        <div className="info pl-3">
                          <h6>Miron Mahmud</h6>
                          <span>25 minutes ago!</span>
                        </div>
                      </div>
                      <Rating
                        name="read-only"
                        value={4}
                        precision={0.5}
                        readOnly
                        color="#faaf00 !"
                      />
                    </div>
                  </div>

                  <div className="col-sm-5 d-flex align-items-center">
                    <div className="ml-auto">
                      <Button className="btn-blue btn-big btn-lg ">
                        <FaReply /> &nbsp; Reply
                      </Button>
                    </div>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis quo nostrum dolore fugiat ducimus labore debitis unde
                    autem recusandae? Eius harum tempora quis minima, adipisci
                    natus quod magni omnis quas.
                  </p>
                </div>
              </div>
            </div>

            <br />

            <h6 className="mt-4 mb-4"> Review Reply form</h6>

            <form className="reviewForm ">
              <textarea placeholder="write here"></textarea>
              <Button className="btn-blue btn-big btn-lg w-100 mt-4">
                Drop Your Replies
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
