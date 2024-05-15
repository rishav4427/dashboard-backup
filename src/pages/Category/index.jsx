/* eslint-disable no-unused-vars */
import { Button } from "@mui/material";

import { MdDelete, MdEdit } from "react-icons/md";
import { IoMdHome } from "react-icons/io";

import Pagination from "@mui/material/Pagination";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteData, editData, fetchDataFromApi } from "../../utils/api";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CircularProgress from "@mui/material/CircularProgress";
import { MyContext } from "../../App";

const Category = () => {
  const context = useContext(MyContext);
  const [catData, setCatData] = useState([]);
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [editFields, setEditFields] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formfields, setFormFields] = useState({
    name: "",
    images: [],
    color: "",
  });

  const addImageUrl = (e) => {
    const arr = [];
    arr.push(e.target.value);
    setFormFields(() => ({
      ...formfields,
      [e.target.name]: arr,
    }));
  };

  const changeInput = (e) => {
    setFormFields(() => ({
      ...formfields,
      [e.target.name]: e.target.value,
    }));
  };

  const editCategory = (id) => {
    setFormFields({
      name: "",
      images: "",
      color: "",
    });
    setOpen(true);
    setEditId(id);
    fetchDataFromApi(`/api/category/${id}`).then((res) => {
      setFormFields({
        name: res.name,
        images: res.images,
        color: res.color,
      });
      console.log(res);
    });
  };

  const deleteCat = (id) => {
    deleteData(`/api/category/${id}`).then((res) => {
      fetchDataFromApi(`/api/category`).then((res) => {
        setCatData(res);
      });
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const categoryEditFunc = (e) => {
    e.preventDefault();
    setIsLoading(true);
    context.setProgress(40);
    editData(`/api/category/${editId}`, formfields).then((res) => {
      fetchDataFromApi(`/api/category`).then((res) => {
        setCatData(res);
        setOpen(false);
        setIsLoading(false);
      });

      context.setAlertBox({
        open: true,
        error: false,
        msg: "Category updated !",
      });
      context.setProgress(100);
    });
  };

  const handleChange = (event, value) => {
    context.setProgress(40);
    fetchDataFromApi(`/api/category?page=${value}`).then((res) => {
      setCatData(res);
      context.setProgress(100);
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
  return (
    <>
      <div className="right-content w-100">
        <div className="d-flex align-items-center">
          <div className="productHead d-flex align-items-center">
            <h1>Category List</h1>
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
                <Button>Category</Button>
              </div>

              <Link to="/category/add">
                <Button className="btn-blue btn-lg btn-big ml-3 buttonaddcat">
                  Add Category
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card shadow border-0 p-3 mt-4">
          <div className="table-responsive mt-3">
            <table className="table table-bordered v-align">
              <thead className="thead-dark">
                <tr>
                  <th>UID</th>
                  <th>Category</th>
                  <th>Image</th>
                  <th>Color</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {catData?.categoryList?.length !== 0 &&
                  catData?.categoryList?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>
                          <div className="d-flex align-items-center productBox">
                            <div className="imgWrapper">
                              <div className="img">
                                <img
                                  src={`${context.baseUrl}/uploads/${item.images[0]}`}
                                  alt=""
                                  className="w-100"
                                />
                              </div>
                            </div>
                          </div>
                        </td>

                        <td>{item.color}</td>
                        <td>
                          <div className="actions d-flex align-items-center">
                            <Button
                              className="success"
                              color="success"
                              onClick={() => editCategory(item.id)}
                            >
                              <MdEdit />
                            </Button>

                            <Button className="error" color="error">
                              <MdDelete onClick={() => deleteCat(item.id)} />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>

            <div className="d-flex tableFooter">
              <Pagination
                count={catData?.totalPages}
                color="primary"
                className="pagination"
                showFirstButton
                showLastButton
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>

      <Dialog
        className="editModal"
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Edit Category</DialogTitle>
        <form>
          <DialogContent>
            <div className="form-group mb-3">
              <TextField
                autoFocus
                required
                margin="dense"
                id="name"
                name="name"
                label="Category Name"
                type="text"
                value={formfields.name}
                fullWidth
                onChange={changeInput}
              />
            </div>

            <div className="form-group mb-3">
              <TextField
                autoFocus
                required
                margin="dense"
                id="images"
                name="images"
                label="Category Image"
                type="text"
                value={formfields.images}
                fullWidth
                onChange={addImageUrl}
              />
            </div>

            <div className="form-group mb-3">
              <TextField
                autoFocus
                required
                margin="dense"
                id="color"
                name="color"
                label="Category Color"
                type="text"
                value={formfields.color}
                fullWidth
                onChange={changeInput}
              />
            </div>
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose} variant="outlined">
              Cancel
            </Button>
            <Button type="button" onClick={categoryEditFunc} variant="outlined">
              {isLoading === true ? (
                <CircularProgress color="inherit" className=" loader" />
              ) : (
                " Edit"
              )}
            </Button>
          </DialogActions>
        </form>
        <br />
      </Dialog>
    </>
  );
};

export default Category;
