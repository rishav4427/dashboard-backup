/* eslint-disable no-unused-vars */
import { Button, CircularProgress } from "@mui/material";
import { IoMdHome } from "react-icons/io";
import { FaRegImages } from "react-icons/fa";

import Select from "@mui/material/Select";

import MenuItem from "@mui/material/MenuItem";
import { useContext, useEffect, useRef, useState } from "react";
import Rating from "@mui/material/Rating";
import { FaCloudUploadAlt } from "react-icons/fa";
import { fetchDataFromApi, postData } from "../../utils/api";
import { MyContext } from "../../App";
import { useNavigate } from "react-router-dom";

const ProductUpload = () => {
  const navigation = useNavigate();
  const context = useContext(MyContext);
  const [categoryVal, setCategoryVal] = useState("");
  const [ratingValue, setRatingValue] = useState(0);
  const [isFeaturedValue, setIsFeaturedValue] = useState("");
  const [catData, setCatData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [files, setFiles] = useState([]);

  const [imgFiles, setImgFiles] = useState();
  const [previews, setPreviews] = useState();

  const [productImagesArr, setProductImagesArr] = useState([]);

  const [formfields, setFormFields] = useState({
    name: "",
    description: "",
    brand: "",
    price: null,
    oldPrice: null,
    addProduct: "",
    countInStock: null,
    category: "",
    rating: 0,
    isFeatured: null,
  });

  const productImages = useRef();
  const formData = new FormData();

  const handleChangeCategory = (event) => {
    setCategoryVal(event.target.value);
    setFormFields(() => ({
      ...formfields,
      category: event.target.value,
    }));
  };

  const handleIsFeaturedValue = (event) => {
    setIsFeaturedValue(event.target.value);
    setFormFields(() => ({
      ...formfields,
      isFeatured: event.target.value,
    }));
  };

  const inputChange = (e) => {
    setFormFields(() => ({
      ...formfields,
      [e.target.name]: e.target.value,
    }));
  };

  const onChangeFile = async (e, apiEndPoint) => {
    try {
      const imgArr = [];
      const files = e.target.files;

      setImgFiles(e.target.files);
      for (var i = 0; i < files.length; i++) {
        const file = files[i];
        imgArr.push(file);
        formData.append("images", file);
      }
      setFiles(imgArr);

      postData(apiEndPoint, formData).then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addProduct = (e) => {
    e.preventDefault();

    formData.append("name", formfields.name);
    formData.append("description", formfields.description);
    formData.append("category", formfields.category);
    formData.append("brand", formfields.brand);
    formData.append("oldPrice", formfields.oldPrice);
    formData.append("price", formfields.price);
    formData.append("countInStock", formfields.countInStock);
    formData.append("isFeatured", formfields.isFeatured);
    formData.append("rating", formfields.rating);

    if (formfields.name === "") {
      context.setAlertBox({
        open: true,
        msg: "Please add product name",
        error: true,
      });
      return false;
    }

    if (formfields.description === "") {
      context.setAlertBox({
        open: true,
        msg: "Please add product description",
        error: true,
      });
      return false;
    }

    if (formfields.category === "") {
      context.setAlertBox({
        open: true,
        msg: "Please select category",
        error: true,
      });
      return false;
    }

    if (formfields.brand === "") {
      context.setAlertBox({
        open: true,
        msg: "Please add product brand",
        error: true,
      });
      return false;
    }

    if (formfields.oldPrice === null) {
      context.setAlertBox({
        open: true,
        msg: "Please add old product price",
        error: true,
      });
      return false;
    }

    if (formfields.price === null) {
      context.setAlertBox({
        open: true,
        msg: "Please add  new product price",
        error: true,
      });
      return false;
    }

    if (formfields.countInStock === null) {
      context.setAlertBox({
        open: true,
        msg: "Please add product stock",
        error: true,
      });
      return false;
    }

    if (formfields.isFeatured === null) {
      context.setAlertBox({
        open: true,
        msg: "Please select product is featured or not",
        error: true,
      });
      return false;
    }

    if (formfields.rating === 0) {
      context.setAlertBox({
        open: true,
        msg: "Please add product rating",
        error: true,
      });
      return false;
    }

    setIsLoading(true);

    postData("/api/products/create", formfields).then((res) => {
      context.setAlertBox({
        open: true,
        msg: "Product created",
        error: false,
      });

      setFormFields({
        name: "",
        description: "",
        brand: "",
        price: "",
        oldPrice: "",
        addProduct: "",
        countInStock: "",
        category: "",
        rating: 0,
        isFeatured: "",
        images: [],
      });
      setIsLoading(false);
      navigation("/products");
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    context.setProgress(20);
    fetchDataFromApi("/api/category").then((res) => {
      setCatData(res);
      context.setProgress(100);
      // console.log(res);
    });
  }, []);

  useEffect(() => {
    if (!imgFiles) return;
    let tmp = [];
    for (let i = 0; i < imgFiles.length; i++) {
      tmp.push(URL.createObjectURL(imgFiles[i]));
    }

    const objectUrls = tmp;
    setPreviews(objectUrls);

    // free memory

    for (let i = 0; i < objectUrls.length; i++) {
      return () => {
        URL.revokeObjectURL(objectUrls[i]);
      };
    }
  }, [imgFiles]);

  return (
    <>
      <div className="right-content w-100">
        <div className="d-flex align-items-center">
          <div className="productHead d-flex align-items-center">
            <h1>Product Upload</h1>
            <div className="ml-auto d-flex align-items-center justify-content-around">
              <div className="mr-2">
                <Button>
                  <IoMdHome className="home" />
                  Home
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

        <form className="form" onSubmit={addProduct}>
          <div className="row">
            <div className="col-md-12">
              <div className="card p-4">
                <h5>Basic Information</h5>
                <div className="form-group">
                  <h6 className="mt-4 text-uppercase">Product Name</h6>
                  <input
                    type="text"
                    name="name"
                    onChange={inputChange}
                    value={formfields.name}
                  />
                </div>

                <div className="form-group">
                  <h6 className="text-uppercase">Description</h6>
                  <textarea
                    rows={5}
                    cols={10}
                    name="description"
                    onChange={inputChange}
                    value={formfields.description}
                  />
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6 className="text-uppercase">Category</h6>
                      <Select
                        value={categoryVal}
                        onChange={handleChangeCategory}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        className="w-100"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>

                        {catData?.categoryList?.length !== 0 &&
                          catData?.categoryList?.map((item, index) => {
                            return (
                              <MenuItem
                                value={item.id}
                                key={index}
                                className="text-capitalize"
                              >
                                {item.name}
                              </MenuItem>
                            );
                          })}
                      </Select>
                    </div>
                  </div>

                  <div className="col">
                    <div className="form-group">
                      <h6 className="text-uppercase">Brand</h6>
                      <input
                        type="text"
                        name="brand"
                        onChange={inputChange}
                        value={formfields.brand}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <h6 className="text-uppercase">Old Price</h6>
                      <input
                        type="text"
                        name="oldPrice"
                        onChange={inputChange}
                        value={formfields.oldPrice}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <h6 className="text-uppercase">New Price</h6>
                      <input
                        type="text"
                        name="price"
                        onChange={inputChange}
                        value={formfields.price}
                      />
                    </div>
                  </div>

                  <div className="col">
                    <div className="form-group">
                      <h6 className="text-uppercase">Product Stock</h6>
                      <input
                        type="text"
                        name="countInStock"
                        onChange={inputChange}
                        value={formfields.countInStock}
                      />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="form-group">
                      <h6 className="text-uppercase">is_Featured</h6>
                      <Select
                        value={isFeaturedValue}
                        onChange={handleIsFeaturedValue}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        className="w-100"
                      >
                        <MenuItem value="">
                          <em value={null}>None</em>
                        </MenuItem>
                        <MenuItem value={true}>True</MenuItem>
                        <MenuItem value={false}>False</MenuItem>
                      </Select>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="form-group">
                      <h6 className="text-uppercase">Rating</h6>
                      <Rating
                        name="simple-controlled"
                        value={ratingValue}
                        onChange={(event, newValue) => {
                          setRatingValue(newValue);
                          setFormFields(() => ({
                            ...formfields,
                            rating: newValue,
                          }));
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="col-sm-3">
              <div className="stickyBox">
                {productImagesArr?.length !== 0 && <h4>Product Images</h4>}

                <div className="imgGrid d-flex" id="imgGrid">
                  {productImagesArr?.map((item, index) => {
                    return (
                      <div className="img" key={index}>
                        <img src={item} alt="image" className="w-100" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div> */}
          </div>

          <div className="card p-4">
            <div className="imageUploadSection">
              <h5 className="mb-4">Media and Published</h5>

              <div className="imgUploadBox d-flex align-items-center">
                {previews?.length !== 0 &&
                  previews?.map((img, index) => {
                    return (
                      <div className="uploadBox" key={index}>
                        <img src={img} alt="image" className="w-100" />
                      </div>
                    );
                  })}

                <div className="uploadBox">
                  <input
                    type="file"
                    multiple
                    onChange={(e) => onChangeFile(e, "/api/products/upload")}
                    name="images"
                  />
                  <div className="info">
                    <FaRegImages />
                    <h5>image Upload</h5>
                  </div>
                </div>
              </div>

              <br />
              <Button type="submit" className="btn-blue btn-lg btn-big w-100">
                <FaCloudUploadAlt /> &nbsp;{" "}
                {isLoading === true ? (
                  <CircularProgress color="inherit" className=" loader" />
                ) : (
                  "  PUBLISH AND VIEW"
                )}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductUpload;
