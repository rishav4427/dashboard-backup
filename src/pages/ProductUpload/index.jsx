/* eslint-disable no-unused-vars */
import { Button } from "@mui/material";
import { IoMdHome } from "react-icons/io";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import { FaCloudUploadAlt } from "react-icons/fa";

const ProductUpload = () => {
  const [categoryVal, setCategoryVal] = useState("");
  const [ratingValue, setRatingValue] = useState(0);

  const handleChangeCategory = (event) => {
    setCategoryVal(event.target.value);
  };
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

        <form className="form">
          <div className="row">
            <div className="col-sm-12">
              <div className="card p-4">
                <h5>Basic Information</h5>
                <div className="form-group">
                  <h6>Title</h6>
                  <input type="text" />
                </div>

                <div className="form-group">
                  <h6>Description</h6>
                  <textarea rows={5} cols={10} />
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>Category</h6>
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
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </div>
                  </div>

                  <div className="col">
                    <div className="form-group">
                      <h6>Brand</h6>
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
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <h6>Regular Price</h6>
                      <input type="text" />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="form-group">
                      <h6>Discount Price</h6>
                      <input type="text" />
                    </div>
                  </div>

                  <div className="col">
                    <div className="form-group">
                      <h6>Rating</h6>
                      <Rating
                        name="simple-controlled"
                        value={ratingValue}
                        onChange={(event, newValue) => {
                          setRatingValue(newValue);
                        }}
                      />
                    </div>
                  </div>

                  <div className="col">
                    <div className="form-group">
                      <h6>Product Stock</h6>
                      <input type="text" />
                    </div>
                  </div>
                </div>

                <br />
                <Button className="btn-blue btn-lg btn-big">
                  <FaCloudUploadAlt /> &nbsp; PUBLISH AND VIEW
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductUpload;
