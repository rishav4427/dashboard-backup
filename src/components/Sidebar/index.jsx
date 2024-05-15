/* eslint-disable no-unused-vars */
import { Button } from "@mui/material";
import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { FaProductHunt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { IoIosLock } from "react-icons/io";
import { MyContext } from "../../App";

const Sidebar = () => {
  const context = useContext(MyContext);
  const [activeTab, setActiveTab] = useState(0);
  const [isToogleSubmenu, setIsToogleSubmenu] = useState(false);
  const isOpenSubmenu = (index) => {
    setActiveTab(index);
    setIsToogleSubmenu(!isToogleSubmenu);
  };
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <Link to="">
              <Button
                className={`w-100 ${activeTab === 0 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(0)}
              >
                <span className="icon">
                  <MdDashboard />
                </span>
                Dashboard
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>

          <li>
            <Button
              className={`w-100 ${
                activeTab === 1 && isToogleSubmenu === true ? "active" : ""
              }`}
              onClick={() => isOpenSubmenu(1)}
            >
              <span className="icon">
                <FaProductHunt />
              </span>
              Category
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
            <div
              className={`submenuWrapper ${
                activeTab === 1 && isToogleSubmenu === true
                  ? "collaspe"
                  : "collasped"
              }`}
            >
              <div className="submenu">
                <ul>
                  <li>
                    <Link to="/category">Category List</Link>
                  </li>

                  <li>
                    <Link to="/category/add">Add Category</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <Button
              className={`w-100 ${
                activeTab === 2 && isToogleSubmenu === true ? "active" : ""
              }`}
              onClick={() => isOpenSubmenu(2)}
            >
              <span className="icon">
                <FaProductHunt />
              </span>
              Products
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
            <div
              className={`submenuWrapper ${
                activeTab === 2 && isToogleSubmenu === true
                  ? "collaspe"
                  : "collasped"
              }`}
            >
              <div className="submenu">
                <ul>
                  <li>
                    <Link to="/products">Product List</Link>
                  </li>
                  <li>
                    <Link to="/product/details">Product View</Link>
                  </li>
                  <li>
                    <Link to="/product/upload">Product Upload</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
        <div className="logoutWrapper">
          <div className="logoutBox">
            <Button variant="contained">
              <IoIosLock />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
