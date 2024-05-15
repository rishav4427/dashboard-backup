/* eslint-disable no-unused-vars */
import { Button } from "@mui/material";
import { IoMdHome } from "react-icons/io";

import { useContext, useEffect, useState } from "react";
import { FaCloudUploadAlt, FaRegImages } from "react-icons/fa";
import { postData } from "../../utils/api";
import CircularProgress from "@mui/material/CircularProgress";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../App";

const CategoryAdd = () => {
  const navigation = useNavigate();
  const context = useContext(MyContext);
  const formData = new FormData();

  const [isLoading, setIsLoading] = useState(false);
  const [previews, setPreviews] = useState();
  const [imgFiles, setImgFiles] = useState();
  const [files, setFiles] = useState([]);
  const [formfields, setFormFields] = useState({
    name: "",
    color: "",
  });

  const changeInput = (e) => {
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
      console.log(imgArr);
      postData(apiEndPoint, formData).then((res) => {});
    } catch (error) {
      console.log(error);
    }
  };

  const addCategory = (e) => {
    e.preventDefault();
    formData.append("name", formfields.name);
    formData.append("color", formfields.color);
    if (formfields.name !== "" && formfields.color !== "") {
      setIsLoading(true);
      postData("/api/category/create", formfields).then((res) => {
        setIsLoading(false);
        navigation("/category");
      });
    } else {
      context.setAlertBox({
        open: true,
        error: true,
        msg: "Please fill out all the fields",
      });
      return false;
    }
  };

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
            <h1>Add Category</h1>
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
                <Link to="/category">
                  <Button>Category</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <form className="form" onSubmit={addCategory}>
          <div className="row">
            <div className="col-sm-12">
              <div className="card p-4">
                <div className="form-group">
                  <h6>Category Name</h6>
                  <input type="text" name="name" onChange={changeInput} />
                </div>

                <div className="form-group">
                  <h6>Color</h6>
                  <input type="text" name="color" onChange={changeInput} />
                </div>

                <br />
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
                        onChange={(e) =>
                          onChangeFile(e, "/api/products/upload")
                        }
                        name="images"
                      />
                      <div className="info">
                        <FaRegImages />
                        <h5>image Upload</h5>
                      </div>
                    </div>
                  </div>

                  <br />
                  <Button
                    type="submit"
                    className="btn-blue btn-lg btn-big w-100"
                  >
                    <FaCloudUploadAlt /> &nbsp;{" "}
                    {isLoading === true ? (
                      <CircularProgress color="inherit" className=" loader" />
                    ) : (
                      "  PUBLISH AND VIEW"
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CategoryAdd;
