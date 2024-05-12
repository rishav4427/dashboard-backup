/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.webp";
import Button from "@mui/material/Button";
import SearchBox from "../SearchBox";

import { MdOutlineMenu } from "react-icons/md";
import { MdOutlineMenuOpen } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import { MdOutlineLightMode } from "react-icons/md";
import { IoShieldHalfSharp } from "react-icons/io5";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Logout from "@mui/icons-material/Logout";
import { useContext, useState } from "react";
import { Avatar, Divider } from "@mui/material";
import { MyContext } from "../../App";
import UserImage from "../UserImage";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpenNotificationDrop, setIsOpenNotificationDrop] = useState(false);
  const openMyAcc = Boolean(anchorEl);
  const openNotifications = Boolean(isOpenNotificationDrop);

  const context = useContext(MyContext);

  const handleOpenMyAccDr = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMyAccDr = () => {
    setAnchorEl(null);
  };

  const handleCloseNotificationsDrop = () => {
    setIsOpenNotificationDrop(false);
  };

  const handleOpenNotificationsDrop = () => {
    setIsOpenNotificationDrop(true);
  };
  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container-fluid w-100">
          <div className="row d-flex align-items-center w-100">
            <div className="col-sm-2 part1">
              <Link to="/" className="d-flex align-items-center logo">
                <img src={Logo} alt="" />
                <span className="ml-2">SUPPLIFY</span>
              </Link>
            </div>

            <div className="col-sm-3 d-flex align-items-center  part2">
              <Button
                className="rounded-circle mr-3"
                onClick={() =>
                  context.setIsToogleSidebar(!context.isToogleSidebar)
                }
              >
                {context.isToogleSidebar === false ? (
                  <MdOutlineMenuOpen />
                ) : (
                  <MdOutlineMenu />
                )}
              </Button>
              <SearchBox />
            </div>

            <div className="col-sm-7 d-flex align-items-cente justify-content-end part3">
              <Button
                className="rounded-circle mr-3 bt-3"
                onClick={() => context.setThemeMode(!context.themeMode)}
              >
                {context.themeMode === true ? (
                  <MdOutlineLightMode />
                ) : (
                  <MdDarkMode />
                )}
              </Button>

              <Button
                className="rounded-circle mr-3 bt-3"
                onClick={handleCloseMyAccDr}
              >
                <IoCartOutline />
              </Button>

              <Button className="rounded-circle mr-3 bt-3">
                <MdOutlineMailOutline />
              </Button>

              <div className="dropdownWrapper position-relative">
                <Button
                  className="rounded-circle mr-3 bt-3"
                  onClick={handleOpenNotificationsDrop}
                >
                  <FaRegBell />
                </Button>
                <Menu
                  anchorEl={isOpenNotificationDrop}
                  className="notifications dropdown_list"
                  id="notifications"
                  open={openNotifications}
                  onClose={handleCloseNotificationsDrop}
                  onClick={handleCloseNotificationsDrop}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <div className="head pl-3 pb-0">
                    <h4>Notifications(4)</h4>
                  </div>

                  <Divider className="mb-1" />
                  <div className="scroll">
                    <MenuItem onClick={handleCloseMyAccDr}>
                      <div>
                        <UserImage
                          image={
                            "https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                          }
                        />
                      </div>
                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Mahmudul</b> added to his favorite list
                            <b> Leather belt steve madden</b>
                          </span>
                        </h4>

                        <p className="text-sky mb-0">Few seconds ago</p>
                      </div>
                    </MenuItem>

                    <MenuItem onClick={handleCloseMyAccDr}>
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img
                              src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                              alt=""
                            />
                          </span>
                        </div>
                      </div>
                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Mahmudul</b> added to his favorite list
                            <b> Leather belt steve madden</b>
                          </span>
                        </h4>

                        <p className="text-sky mb-0">Few seconds ago</p>
                      </div>
                    </MenuItem>

                    <MenuItem onClick={handleCloseMyAccDr}>
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img
                              src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                              alt=""
                            />
                          </span>
                        </div>
                      </div>
                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Mahmudul</b> added to his favorite list
                            <b> Leather belt steve madden</b>
                          </span>
                        </h4>

                        <p className="text-sky mb-0">Few seconds ago</p>
                      </div>
                    </MenuItem>

                    <MenuItem onClick={handleCloseMyAccDr}>
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img
                              src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                              alt=""
                            />
                          </span>
                        </div>
                      </div>
                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Mahmudul</b> added to his favorite list
                            <b> Leather belt steve madden</b>
                          </span>
                        </h4>

                        <p className="text-sky mb-0">Few seconds ago</p>
                      </div>
                    </MenuItem>

                    <MenuItem onClick={handleCloseMyAccDr}>
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img
                              src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                              alt=""
                            />
                          </span>
                        </div>
                      </div>
                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Mahmudul</b> added to his favorite list
                            <b> Leather belt steve madden</b>
                          </span>
                        </h4>

                        <p className="text-sky mb-0">Few seconds ago</p>
                      </div>
                    </MenuItem>

                    <MenuItem onClick={handleCloseMyAccDr}>
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img
                              src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                              alt=""
                            />
                          </span>
                        </div>
                      </div>
                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Mahmudul</b> added to his favorite list
                            <b> Leather belt steve madden</b>
                          </span>
                        </h4>

                        <p className="text-sky mb-0">Few seconds ago</p>
                      </div>
                    </MenuItem>

                    <MenuItem onClick={handleCloseMyAccDr}>
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img
                              src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                              alt=""
                            />
                          </span>
                        </div>
                      </div>
                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Mahmudul</b> added to his favorite list
                            <b> Leather belt steve madden</b>
                          </span>
                        </h4>

                        <p className="text-sky mb-0">Few seconds ago</p>
                      </div>
                    </MenuItem>
                  </div>

                  <div className="pl-3 pr-3 w-100 pt-2 pb-1">
                    <Button className="btn-blue w-100">
                      View All Notifications
                    </Button>
                  </div>
                </Menu>
              </div>

              {context.isLogin === false ? (
                <Link to="/login">
                  <Button className="btn-blue btn-lg btn-big btn-round">
                    Sign In
                  </Button>
                </Link>
              ) : (
                <div className="myAccWrapper">
                  <Button
                    className="myAcc d-flex align-items-center"
                    onClick={handleOpenMyAccDr}
                  >
                    <div className="userImg">
                      <span className="rounded-circle">
                        <img
                          src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                          alt=""
                        />
                      </span>
                    </div>

                    <div className="userInfo">
                      <h4>Rishav Shrestha</h4>
                      <p className="mb-0">@rishav4427</p>
                    </div>
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={openMyAcc}
                    onClose={handleCloseMyAccDr}
                    onClick={handleCloseMyAccDr}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem onClick={handleCloseMyAccDr}>
                      <ListItemIcon>
                        <PersonAdd fontSize="small" />
                      </ListItemIcon>
                      My Account
                    </MenuItem>
                    <MenuItem onClick={handleCloseMyAccDr}>
                      <ListItemIcon>
                        <IoShieldHalfSharp />
                      </ListItemIcon>
                      Reset Password
                    </MenuItem>
                    <MenuItem onClick={handleCloseMyAccDr}>
                      <ListItemIcon>
                        <Logout fontSize="small" />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                  </Menu>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
