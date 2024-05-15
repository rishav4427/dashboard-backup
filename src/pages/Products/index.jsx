/* eslint-disable no-unused-vars */
import { Button } from "@mui/material";
import { FaEye, FaUserCircle } from "react-icons/fa";
import { MdDelete, MdEdit, MdShoppingBag } from "react-icons/md";
import { IoMdHome } from "react-icons/io";

import Rating from "@mui/material/Rating";
import MenuItem from "@mui/material/MenuItem";

import Pagination from "@mui/material/Pagination";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useContext, useEffect, useState } from "react";
import DashboardBox from "../Dashboard/components/DashboardBox";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";
import { deleteData, fetchDataFromApi } from "../../utils/api";
import { MyContext } from "../../App";

const Product = () => {
  const context = useContext(MyContext);
  const [showBy, setShowBy] = useState("");
  const [showCategoryBy, setShowCategoryBy] = useState("");
  const [productList, setProductList] = useState([]);

  const deleteProduct = (id) => {
    context.setProgress(40);
    deleteData(`/api/products/${id}`).then((res) => {
      console.log(context.progress);
      context.setProgress(100);
      context.setAlertBox({
        open: true,
        error: true,
        msg: "Product deleted",
      });

      fetchDataFromApi("/api/products").then((res) => {
        setProductList(res);
      });
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    context.setProgress(40);
    fetchDataFromApi("/api/products").then((res) => {
      setProductList(res);
      context.setProgress(100);
    });
  }, []);
  return (
    <>
      <div className="right-content w-100">
        <div className="d-flex align-items-center">
          <div className="productHead d-flex align-items-center">
            <h1>Product List</h1>
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
        <div className="row product">
          <div className="col-4 dashboardBoxWrapper d-flex w-100 ">
            <DashboardBox
              color={["#1da256", "#48d483"]}
              icon={<FaUserCircle />}
              grow={true}
            />
          </div>
          <div className="col-4 dashboardBoxWrapper d-flex">
            <DashboardBox color={["#c01292", "#eb64fe"]} icon={<IoMdCart />} />
          </div>

          <div className="col-4 dashboardBoxWrapper d-flex">
            <DashboardBox
              color={["#2c78e5", "#60aff5"]}
              icon={<MdShoppingBag />}
            />
          </div>
        </div>

        <div className="card shadow border-0 p-3 mt-4">
          <h3 className="hd">Best selling products</h3>
          <div className="row cardFilters mt-3">
            <div className="col-md-3">
              <h4>Show By</h4>
              <FormControl size="small" className="w-100">
                <Select
                  value={showBy}
                  onChange={(e) => setShowBy(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  labelId="demo-select-small-label"
                  className="w-100"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="col-md-3">
              <h4>Category By</h4>

              <FormControl size="small" className="w-100">
                <Select
                  value={showCategoryBy}
                  onChange={(e) => setShowCategoryBy(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  labelId="demo-select-small-label"
                  className="w-100"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          <div className="table-responsive mt-3">
            <table className="table table-bordered v-align">
              <thead className="thead-dark">
                <tr>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Brand</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Rating</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {productList?.length !== 0 &&
                  productList?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <div className="d-flex align-items-center productBox">
                            <div className="imgWrapper">
                              <div className="img">
                                <img
                                  src={`${context.baseUrl}/uploads/${item.images[0]}`}
                                  alt=""
                                  className="w-100 "
                                />
                              </div>
                            </div>
                            <div className="info">
                              <h6>{item.name}</h6>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </td>
                        <td>{item.category.name}</td>
                        <td>{item.brand}</td>
                        <td>
                          <div style={{ width: "60px" }}>
                            <del className="old">{item.oldPrice}</del>
                            <span className="new text-danger">
                              {item.price}
                            </span>
                          </div>
                        </td>
                        <td>{item.countInStock}</td>
                        <td>
                          <Rating
                            name="read-only"
                            value={item.rating}
                            precision={0.5}
                            readOnly
                          />
                        </td>

                        <td>
                          <div className="actions d-flex align-items-center">
                            <Link to="/product/details">
                              <Button className="secondary" color="secondary">
                                <FaEye />
                              </Button>
                            </Link>

                            <Button className="success" color="success">
                              <MdEdit />
                            </Button>

                            <Button
                              className="error"
                              color="error"
                              onClick={() => deleteProduct(item.id)}
                            >
                              <MdDelete />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>

            <div className="d-flex tableFooter">
              <p>
                showing <b>12</b> of <b>60 </b>results
              </p>
              <Pagination
                count={10}
                color="primary"
                className="pagination"
                showFirstButton
                showLastButton
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
